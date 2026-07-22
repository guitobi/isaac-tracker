import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterUserDto) {
    const isRegistred = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (isRegistred)
      throw new BadRequestException('This username is already taken!');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        username: dto.username,
        password: hashedPassword,
      },
    });
  }

  async login(dto: RegisterUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (!user) throw new BadRequestException('No user found!');

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Incorrect password');
    }

    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);
    return { access_token: token, username: user.username };
  }
}
