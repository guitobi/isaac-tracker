import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

export const items = [
  {
    "id": 1,
    "name": "The Sad Onion",
    "description": "• ↑ Tears +0.7 Tears",
    "image": "/items/1.png"
  },
  {
    "id": 2,
    "name": "The Inner Eye",
    "description": "• ↓ Tears x0.51 Fire rate multiplier\n• Isaac shoots 3 tears at once",
    "image": "/items/2.png"
  },
  {
    "id": 3,
    "name": "Spoon Bender",
    "description": "• Homing tears",
    "image": "/items/3.png"
  },
  {
    "id": 4,
    "name": "Cricket's Head",
    "description": "• ↑ Damage +0.5 Damage\n• ↑ Damage x1.5 Damage multiplier",
    "image": "/items/4.png"
  },
  {
    "id": 5,
    "name": "My Reflection",
    "description": "• ↑ Damage +1.5 Damage\n• ↑ Range +1.5 Range\n• ↑ Range x2 Range multiplier\n• ↑ Shotspeed x1.6 Shot speed multiplier\n• ↓ Luck -1 Luck\n• Tears get a boomerang effect",
    "image": "/items/5.png"
  },
  {
    "id": 6,
    "name": "Number One",
    "description": "• ↑ Tears +1.5 Tears\n• ↓ Range -1.5 Range\n• ↓ Range x0.8 Range multiplier",
    "image": "/items/6.png"
  },
  {
    "id": 7,
    "name": "Blood of the Martyr",
    "description": "• ↑ Damage +1 Damage",
    "image": "/items/7.png"
  },
  {
    "id": 8,
    "name": "Brother Bobby",
    "description": "• Shoots normal tears\n• Deals 3.5 damage per tear",
    "image": "/items/8.png"
  },
  {
    "id": 9,
    "name": "Skatole",
    "description": "• All fly enemies are friendly",
    "image": "/items/9.png"
  },
  {
    "id": 10,
    "name": "Halo of Flies",
    "description": "• +2 Fly orbitals\n• Blocks enemy projectiles",
    "image": "/items/10.png"
  },
  {
    "id": 11,
    "name": "1up!",
    "description": "• ↑ +1 Life\n• Isaac respawns with full health on death",
    "image": "/items/11.png"
  },
  {
    "id": 12,
    "name": "Magic Mushroom",
    "description": "• ↑ Heart +1 Health\n• ↑ Speed +0.3 Speed\n• ↑ Damage +0.3 Damage\n• ↑ Damage x1.5 Damage multiplier\n• ↑ Range +2.5 Range\n• Size up\n• Healing Red Full health",
    "image": "/items/12.png"
  },
  {
    "id": 13,
    "name": "The Virus",
    "description": "• ↑ Speed +0.2 Speed\n• Poison Touching enemies poisons them\n• Isaac deals 48 contact damage per second",
    "image": "/items/13.png"
  },
  {
    "id": 14,
    "name": "Roid Rage",
    "description": "• ↑ Speed +0.3 Speed\n• ↑ Range +2.5 Range",
    "image": "/items/14.png"
  },
  {
    "id": 15,
    "name": "<3",
    "description": "• ↑ Heart +1 Health\n• Healing Red Full health",
    "image": "/items/15.png"
  },
  {
    "id": 16,
    "name": "Raw Liver",
    "description": "• ↑ Heart +2 Health\n• Healing Red Full health",
    "image": "/items/16.png"
  },
  {
    "id": 17,
    "name": "Skeleton Key",
    "description": "• Key +99 Keys",
    "image": "/items/17.png"
  },
  {
    "id": 18,
    "name": "A Dollar",
    "description": "• Coin +100 Coins",
    "image": "/items/18.png"
  },
  {
    "id": 19,
    "name": "Boom!",
    "description": "• Bomb +10 Bombs",
    "image": "/items/19.png"
  },
  {
    "id": 20,
    "name": "Transcendence",
    "description": "• Flight",
    "image": "/items/20.png"
  },
  {
    "id": 21,
    "name": "The Compass",
    "description": "• Reveals icons on the map\n• Does not reveal the layout of the map",
    "image": "/items/21.png"
  },
  {
    "id": 22,
    "name": "Lunch",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/22.png"
  },
  {
    "id": 23,
    "name": "Dinner",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/23.png"
  },
  {
    "id": 24,
    "name": "Dessert",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/24.png"
  },
  {
    "id": 25,
    "name": "Breakfast",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/25.png"
  },
  {
    "id": 26,
    "name": "Rotten Meat",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/26.png"
  },
  {
    "id": 27,
    "name": "Wooden Spoon",
    "description": "• ↑ Speed +0.3 Speed",
    "image": "/items/27.png"
  },
  {
    "id": 28,
    "name": "The Belt",
    "description": "• ↑ Speed +0.3 Speed",
    "image": "/items/28.png"
  },
  {
    "id": 29,
    "name": "Mom's Underwear",
    "description": "• ↑ Range +2.5 Range\n• Spawns 3-6 blue flies",
    "image": "/items/29.png"
  },
  {
    "id": 30,
    "name": "Mom's Heels",
    "description": "• ↑ Range +2.5 Range\n• Isaac deals 24 contact damage per second",
    "image": "/items/30.png"
  },
  {
    "id": 31,
    "name": "Mom's Lipstick",
    "description": "• ↑ Range +3.75 Range\n• Unknown Heart Spawns 1 random heart",
    "image": "/items/31.png"
  },
  {
    "id": 32,
    "name": "Wire Coat Hanger",
    "description": "• ↑ Tears +0.7 Tears",
    "image": "/items/32.png"
  },
  {
    "id": 33,
    "name": "The Bible",
    "description": "• Timer Flight for the room\n• Moms Heart Kills Mom's Foot and Mom's Heart instantly\n• Warning Kills Isaac when used on Satan",
    "image": "/items/33.png"
  },
  {
    "id": 34,
    "name": "The Book of Belial",
    "description": "• Angel Devil Chance +12.5% Devil/Angel Room chance while held\n• Timer Receive for the room:\n• ↑ Damage +2 Damage",
    "image": "/items/34.png"
  },
  {
    "id": 35,
    "name": "The Necronomicon",
    "description": "• Deals 40 damage to all enemies in the room",
    "image": "/items/35.png"
  },
  {
    "id": 36,
    "name": "The Poop",
    "description": "• Spawns one poop and knocks back enemies\n• Can be placed next to a pit and destroyed with a bomb to make a bridge",
    "image": "/items/36.png"
  },
  {
    "id": 37,
    "name": "Mr. Boom",
    "description": "• Drops a large bomb below Isaac which deals 185 damage",
    "image": "/items/37.png"
  },
  {
    "id": 38,
    "name": "Tammy's Head",
    "description": "• Shoots 10 tears in a circle around Isaac\n• The tears copy Isaac's tear effects, plus 25 damage",
    "image": "/items/38.png"
  },
  {
    "id": 39,
    "name": "Mom's Bra",
    "description": "• Petrify Petrifies all enemies in the room for 4 seconds",
    "image": "/items/39.png"
  },
  {
    "id": 40,
    "name": "Kamikaze!",
    "description": "• Causes a big explosion at Isaac's location\n• Deals 185 damage",
    "image": "/items/40.png"
  },
  {
    "id": 41,
    "name": "Mom's Pad",
    "description": "• Fear Fears all enemies in the room for 5 seconds\n• Spawns a blue fly",
    "image": "/items/41.png"
  },
  {
    "id": 42,
    "name": "Bob's Rotten Head",
    "description": "• Using the item and firing in a direction throws the head\n• Poison The head explodes where it lands and creates a poison cloud\n• Deals Isaac's damage + 185",
    "image": "/items/42.png"
  },
  {
    "id": 43,
    "name": "Item 43",
    "description": "Collectible item",
    "image": "/items/43.png"
  },
  {
    "id": 44,
    "name": "Teleport!",
    "description": "• Teleports Isaac into a random room, except I AM ERROR rooms",
    "image": "/items/44.png"
  },
  {
    "id": 45,
    "name": "Yum Heart",
    "description": "• Healing Red Heals 1 heart",
    "image": "/items/45.png"
  },
  {
    "id": 46,
    "name": "Lucky Foot",
    "description": "• ↑ Luck +1 Luck\n• Better chance to win while gambling\n• Increases room clearing drop chance\n• Turns bad pills into good ones",
    "image": "/items/46.png"
  },
  {
    "id": 47,
    "name": "Doctor's Remote",
    "description": "• Collectible168 On use, start aiming a crosshair\n• A missile lands on the crosshair after 1.5 seconds\n• It deals 20x Isaac's damage",
    "image": "/items/47.png"
  },
  {
    "id": 48,
    "name": "Cupid's Arrow",
    "description": "• Piercing tears",
    "image": "/items/48.png"
  },
  {
    "id": 49,
    "name": "Shoop da Whoop!",
    "description": "• The next shot is replaced with a beam\n• It deals 24x Isaac's damage over 0.83 seconds",
    "image": "/items/49.png"
  },
  {
    "id": 50,
    "name": "Steven",
    "description": "• ↑ Damage +1 Damage",
    "image": "/items/50.png"
  },
  {
    "id": 51,
    "name": "Pentagram",
    "description": "• ↑ Damage +1 Damage\n• Angel Devil Chance +10% Devil/Angel Room chance",
    "image": "/items/51.png"
  },
  {
    "id": 52,
    "name": "Dr. Fetus",
    "description": "• ↓ Tears x0.4 Fire rate multiplier\n• Bomb Isaac shoots bombs instead of tears\n• Damage Those bombs deal 10x Isaac's tear damage\n• If that results in over 60 damage, they instead deal 5x damage +30",
    "image": "/items/52.png"
  },
  {
    "id": 53,
    "name": "Magneto",
    "description": "• Pickups are attracted to Isaac\n• Opens chests from 2 tiles away, ignoring damage of Spike Chests",
    "image": "/items/53.png"
  },
  {
    "id": 54,
    "name": "Treasure Map",
    "description": "• Reveals the floor layout\n• Does not reveal room icons",
    "image": "/items/54.png"
  },
  {
    "id": 55,
    "name": "Mom's Eye",
    "description": "• 50% chance to shoot an extra tear backwards\n• Luck 100% chance at 5 luck",
    "image": "/items/55.png"
  },
  {
    "id": 56,
    "name": "Lemon Mishap",
    "description": "• Spills a pool of creep\n• The creep deals 24 damage per second",
    "image": "/items/56.png"
  },
  {
    "id": 57,
    "name": "Distant Admiration",
    "description": "• Mid-range fly orbital\n• Deals 75 contact damage per second",
    "image": "/items/57.png"
  },
  {
    "id": 58,
    "name": "Book of Shadows",
    "description": "• Timer Invincibility for 10 seconds",
    "image": "/items/58.png"
  },
  {
    "id": 59,
    "name": "The Book of Belial",
    "description": "• Angel Devil Chance +12.5% Devil/Angel Room chance while held\n• Timer Receive for the room:\n• ↑ Damage +2 Damage",
    "image": "/items/59.png"
  },
  {
    "id": 60,
    "name": "The Ladder",
    "description": "• Allows Isaac to cross 1-tile gaps",
    "image": "/items/60.png"
  },
  {
    "id": 61,
    "name": "Item 61",
    "description": "Collectible item",
    "image": "/items/61.png"
  },
  {
    "id": 62,
    "name": "Charm of the Vampire",
    "description": "• ↑ Damage +0.3 Damage\n• Healing Red Killing 13 enemies heals half a heart",
    "image": "/items/62.png"
  },
  {
    "id": 63,
    "name": "The Battery",
    "description": "• Battery Active items can be overcharged to two full charges",
    "image": "/items/63.png"
  },
  {
    "id": 64,
    "name": "Steam Sale",
    "description": "• Shop Shop items cost 50% less",
    "image": "/items/64.png"
  },
  {
    "id": 65,
    "name": "Anarchist Cookbook",
    "description": "• Spawns 6 Troll Bombs near the center of the room",
    "image": "/items/65.png"
  },
  {
    "id": 66,
    "name": "The Hourglass",
    "description": "• Slow Slows enemies down for 8 seconds",
    "image": "/items/66.png"
  },
  {
    "id": 67,
    "name": "Sister Maggy",
    "description": "• Shoots normal tears\n• Deals 6 damage per tear",
    "image": "/items/67.png"
  },
  {
    "id": 68,
    "name": "Technology",
    "description": "• Isaac shoots lasers instead of tears",
    "image": "/items/68.png"
  },
  {
    "id": 69,
    "name": "Chocolate Milk",
    "description": "• Chargeable Chargeable tears\n• Damage Damage scales with charge time, up to 4x",
    "image": "/items/69.png"
  },
  {
    "id": 70,
    "name": "Growth Hormones",
    "description": "• ↑ Speed +0.2 Speed\n• ↑ Damage +1 Damage",
    "image": "/items/70.png"
  },
  {
    "id": 71,
    "name": "Mini Mush",
    "description": "• ↑ Speed +0.3 Speed\n• ↑ Range +2.5 Range\n• ↑ Size down",
    "image": "/items/71.png"
  },
  {
    "id": 72,
    "name": "Rosary",
    "description": "• ↑ Tears +0.5 Tears\n• Soul Heart +3 Soul Hearts\n• Collectible33 The Bible is added to all item pools",
    "image": "/items/72.png"
  },
  {
    "id": 73,
    "name": "Cube of Meat",
    "description": "• Lv1: Orbital\n• Lv2: Shooting orbital\n• Lv3: Meat Boy\n• Lv4: Super Meat Boy",
    "image": "/items/73.png"
  },
  {
    "id": 74,
    "name": "A Quarter",
    "description": "• Coin +25 Coins",
    "image": "/items/74.png"
  },
  {
    "id": 75,
    "name": "PHD",
    "description": "• Healing Red Heals 2 hearts\n• Pill Spawns 1 pill\n• Pill Changes bad pills into good pills\n• Blood Donation Machine Blood Donation Machines give more Coin coins",
    "image": "/items/75.png"
  },
  {
    "id": 76,
    "name": "X-Ray Vision",
    "description": "• Secret Room Opens all secret room entrances",
    "image": "/items/76.png"
  },
  {
    "id": 77,
    "name": "My Little Unicorn",
    "description": "• Timer Receive for 6 seconds:\n• ↑ Speed +0.28 Speed\n• Invincibility\n• Isaac can't shoot but deals 40 contact damage per second",
    "image": "/items/77.png"
  },
  {
    "id": 78,
    "name": "Book of Revelations",
    "description": "• Soul Heart +1 Soul Heart\n• Angel Devil Chance +17.5% Devil/Angel Room chance while held\n• Using the item replaces the floor's boss with a horseman",
    "image": "/items/78.png"
  },
  {
    "id": 79,
    "name": "The Mark",
    "description": "• ↑ Damage +1 Damage\n• ↑ Speed +0.2 Speed\n• Black Heart +1 Black Heart",
    "image": "/items/79.png"
  },
  {
    "id": 80,
    "name": "The Pact",
    "description": "• ↑ Tears +0.7 Tears\n• ↑ Damage +0.5 Damage\n• Black Heart +2 Black Hearts",
    "image": "/items/80.png"
  },
  {
    "id": 81,
    "name": "Dead Cat",
    "description": "• ↑ +9 Lives\n• Isaac respawns with 1 heart container on death\n• Warning Sets Isaac's heart containers to 1 when picked up",
    "image": "/items/81.png"
  },
  {
    "id": 82,
    "name": "Lord of the Pit",
    "description": "• ↑ Speed +0.3 Speed\n• Flight",
    "image": "/items/82.png"
  },
  {
    "id": 83,
    "name": "The Nail",
    "description": "• Upon use:\n• Half Black Heart + Half Black Heart\n• Timer Receive for the room:\n• ↑ Damage +2 Damage\n• ↓ Speed -0.18 Speed\n• Isaac deals 40 contact damage per second\n• Allows Isaac to destroy rocks by walking into them",
    "image": "/items/83.png"
  },
  {
    "id": 84,
    "name": "We Need To Go Deeper!",
    "description": "• Opens a trapdoor to the next floor\n• Ladder Room Opens a crawlspace if used on a decorative floor tile (grass, small rocks, papers, gems, etc.)",
    "image": "/items/84.png"
  },
  {
    "id": 85,
    "name": "Deck of Cards",
    "description": "• Card Spawns 1 card",
    "image": "/items/85.png"
  },
  {
    "id": 86,
    "name": "Monstro's Tooth",
    "description": "• Monstro falls on an enemy and deals 120 damage\n• Warning Monstro falls on Isaac if the room has no enemies",
    "image": "/items/86.png"
  },
  {
    "id": 87,
    "name": "Loki's Horns",
    "description": "• 25% chance to shoot in 4 directions\n• Luck 100% chance at 15 luck",
    "image": "/items/87.png"
  },
  {
    "id": 88,
    "name": "Little Chubby",
    "description": "• Charges forward in the direction Isaac is shooting\n• Deals 52.5 contact damage per second",
    "image": "/items/88.png"
  },
  {
    "id": 89,
    "name": "Spider Bite",
    "description": "• Slow 25% chance to shoot slowing tears\n• Luck 100% chance at 15 luck",
    "image": "/items/89.png"
  },
  {
    "id": 90,
    "name": "The Small Rock",
    "description": "• ↑ Tears +0.2 Tears\n• ↑ Damage +1 Damage\n• ↓ Speed -0.2 Speed",
    "image": "/items/90.png"
  },
  {
    "id": 91,
    "name": "Spelunker Hat",
    "description": "• Rooms on the map are revealed from further away\n• Secret Room Can also reveal Secret and Super Secret Rooms\n• Prevents damage from falling projectiles",
    "image": "/items/91.png"
  },
  {
    "id": 92,
    "name": "Super Bandage",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Soul Heart +2 Soul Hearts",
    "image": "/items/92.png"
  },
  {
    "id": 93,
    "name": "The Gamekid",
    "description": "• Timer Receive for 6.5 seconds:\n• Invincibility\n• Isaac can't shoot but deals 40 contact damage per second\n• Healing Red Killing 2 enemies heals half a heart\n• Fear Fears all enemies in the room",
    "image": "/items/93.png"
  },
  {
    "id": 94,
    "name": "Sack of Pennies",
    "description": "• Coin Spawns a random coin every 2 rooms",
    "image": "/items/94.png"
  },
  {
    "id": 95,
    "name": "Robo-Baby",
    "description": "• Shoots lasers\n• Deals 3.5 damage per shot",
    "image": "/items/95.png"
  },
  {
    "id": 96,
    "name": "Little C.H.A.D.",
    "description": "• Half Heart Spawns a half Red Heart every 3 rooms",
    "image": "/items/96.png"
  },
  {
    "id": 97,
    "name": "The Book of Sin",
    "description": "• Spawns 1 random pickup",
    "image": "/items/97.png"
  },
  {
    "id": 98,
    "name": "The Relic",
    "description": "• Soul Heart Spawns 1 Soul Heart every 7-8 rooms",
    "image": "/items/98.png"
  },
  {
    "id": 99,
    "name": "Little Gish",
    "description": "• Slow Shoots slowing tears\n• Deals 3.5 damage per tear",
    "image": "/items/99.png"
  },
  {
    "id": 100,
    "name": "Little Steven",
    "description": "• Shoots homing tears\n• Deals 3.5 damage per tear",
    "image": "/items/100.png"
  },
  {
    "id": 101,
    "name": "The Halo",
    "description": "• ↑ Heart +1 Health\n• ↑ Speed +0.3 Speed\n• ↑ Tears +0.2 Tears\n• ↑ Damage +0.3 Damage\n• ↑ Range +1.5 Range\n• Healing Red Heals 1 heart",
    "image": "/items/101.png"
  },
  {
    "id": 102,
    "name": "Mom's Bottle of Pills",
    "description": "• Pill Spawns 1 pill",
    "image": "/items/102.png"
  },
  {
    "id": 103,
    "name": "The Common Cold",
    "description": "• Poison 25% chance to shoot poison tears\n• Luck 100% chance at 12 luck",
    "image": "/items/103.png"
  },
  {
    "id": 104,
    "name": "The Parasite",
    "description": "• Tears split in two on contact\n• Split tears deal half damage",
    "image": "/items/104.png"
  },
  {
    "id": 105,
    "name": "The D6",
    "description": "• Rerolls pedestal items in the room",
    "image": "/items/105.png"
  },
  {
    "id": 106,
    "name": "Mr. Mega",
    "description": "• ↑ x1.85 Bomb damage\n• Bomb +5 Bombs",
    "image": "/items/106.png"
  },
  {
    "id": 107,
    "name": "The Pinking Shears",
    "description": "• Timer Receive for the room:\n• Flight\n• Isaac's body separates from his head and attacks enemies with 23.5 contact damage per second",
    "image": "/items/107.png"
  },
  {
    "id": 108,
    "name": "The Wafer",
    "description": "• Reduces most damage taken to half a heart",
    "image": "/items/108.png"
  },
  {
    "id": 109,
    "name": "Money = Power",
    "description": "• ↑ Damage +0.04 Damage for every Coin coin Isaac has",
    "image": "/items/109.png"
  },
  {
    "id": 110,
    "name": "Mom's Contacts",
    "description": "• ↑ Range +1.5 Range\n• Petrify 20% chance to shoot petrifying tears\n• Luck 50% chance at 20 luck",
    "image": "/items/110.png"
  },
  {
    "id": 111,
    "name": "The Bean",
    "description": "• Poison Deals 5 damage to enemies nearby and poisons them\n• The poison deals Isaac's damage 6 times",
    "image": "/items/111.png"
  },
  {
    "id": 112,
    "name": "Guardian Angel",
    "description": "• Orbital\n• Speeds up all other orbitals\n• Blocks projectiles\n• Deals 105 contact damage per second",
    "image": "/items/112.png"
  },
  {
    "id": 113,
    "name": "Demon Baby",
    "description": "• Shoots enemies that get close to him\n• Deals 3 damage per tear",
    "image": "/items/113.png"
  },
  {
    "id": 114,
    "name": "Mom's Knife",
    "description": "• Isaac's tears are replaced by a throwable knife\n• Damage The knife deals 2x Isaac's damage while held and caps at 6x damage at 1/3 charge\n• Charging further only increases throwing range\n• Damage reduces to 2x when returning to Isaac",
    "image": "/items/114.png"
  },
  {
    "id": 115,
    "name": "Ouija Board",
    "description": "• ↑ Tears +0.5 Tears\n• Spectral tears",
    "image": "/items/115.png"
  },
  {
    "id": 116,
    "name": "9 Volt",
    "description": "• Battery Automatically charges the first bar of active items\n• Battery Fully recharges the active item on pickup",
    "image": "/items/116.png"
  },
  {
    "id": 117,
    "name": "Dead Bird",
    "description": "• Taking damage spawns a bird that attacks enemies\n• The bird deals 4.3 contact damage per second",
    "image": "/items/117.png"
  },
  {
    "id": 118,
    "name": "Brimstone",
    "description": "• ↓ Tears x0.33 Fire rate multiplier\n• Chargeable Isaac's tears are replaced by a chargeable blood beam\n• Damage It deals 9x Isaac's damage over 0.63 seconds",
    "image": "/items/118.png"
  },
  {
    "id": 119,
    "name": "Blood Bag",
    "description": "• ↑ Heart +1 Health\n• ↑ Speed +0.3 Speed\n• Healing Red Heals 4 hearts",
    "image": "/items/119.png"
  },
  {
    "id": 120,
    "name": "Odd Mushroom (Thin)",
    "description": "• ↑ Speed +0.3 Speed\n• ↑ Tears +1.7 Tears\n• ↓ Damage x0.9 Damage multiplier\n• ↓ Damage -0.4 Damage",
    "image": "/items/120.png"
  },
  {
    "id": 121,
    "name": "Odd Mushroom (Large)",
    "description": "• ↑ Heart +1 Health\n• ↑ Damage +1 Damage\n• ↑ Range +1.5 Range\n• ↓ Speed -0.2 Speed",
    "image": "/items/121.png"
  },
  {
    "id": 122,
    "name": "Whore of Babylon",
    "description": "• When on half a Red Heart or less:\n• ↑ Speed +0.3 Speed\n• ↑ Damage +1.5 Damage",
    "image": "/items/122.png"
  },
  {
    "id": 123,
    "name": "Monster Manual",
    "description": "• Timer Spawns a random familiar for the floor",
    "image": "/items/123.png"
  },
  {
    "id": 124,
    "name": "Dead Sea Scrolls",
    "description": "• Triggers a random active item effect\n• Chooses the effect from a fixed list of items",
    "image": "/items/124.png"
  },
  {
    "id": 125,
    "name": "Bobby-Bomb",
    "description": "• Bomb +5 Bombs\n• Homing bombs",
    "image": "/items/125.png"
  },
  {
    "id": 126,
    "name": "Razor Blade",
    "description": "• ↑ Damage +1.2 Damage for the room\n• Warning Deals 1 heart of damage to Isaac\n• After the first use in a room, deals half a heart instead\n• Heart Removes Red Hearts first",
    "image": "/items/126.png"
  },
  {
    "id": 127,
    "name": "Forget Me Now",
    "description": "• Rerolls and restarts the entire floor",
    "image": "/items/127.png"
  },
  {
    "id": 128,
    "name": "Forever Alone",
    "description": "• Long range fly orbital\n• Deals 30 contact damage per second",
    "image": "/items/128.png"
  },
  {
    "id": 129,
    "name": "Bucket of Lard",
    "description": "• ↑ Heart +2 Health\n• ↓ Speed -0.2 Speed",
    "image": "/items/129.png"
  },
  {
    "id": 130,
    "name": "A Pony",
    "description": "• While held:\n• Speed Sets your Speed to at least 1.5\n• Flight\n• Upon use, dashes in the direction of Isaac's movement",
    "image": "/items/130.png"
  },
  {
    "id": 131,
    "name": "Bomb Bag",
    "description": "• Bomb Spawns 1 bomb pickup every 3 rooms",
    "image": "/items/131.png"
  },
  {
    "id": 132,
    "name": "A Lump of Coal",
    "description": "• Damage Tears deal more damage the further they travel",
    "image": "/items/132.png"
  },
  {
    "id": 133,
    "name": "Guppy's Paw",
    "description": "• Soul Heart Converts 1 heart container into 3 Soul Hearts",
    "image": "/items/133.png"
  },
  {
    "id": 134,
    "name": "Guppy's Tail",
    "description": "• Chest 33% chance to replace the room clear reward with a chest\n• 22% chance to spawn no room clear reward",
    "image": "/items/134.png"
  },
  {
    "id": 135,
    "name": "IV Bag",
    "description": "• Coin Hurts Isaac for half a heart and spawns 1-2 coins\n• Heart Removes Red Hearts first",
    "image": "/items/135.png"
  },
  {
    "id": 136,
    "name": "Best Friend",
    "description": "• Spawns a decoy Isaac that attracts enemies and explodes after 5 seconds",
    "image": "/items/136.png"
  },
  {
    "id": 137,
    "name": "Remote Detonator",
    "description": "• Bomb +5 Bombs\n• Isaac's bombs no longer explode automatically\n• Upon use, detonates all of Isaac's bombs at once",
    "image": "/items/137.png"
  },
  {
    "id": 138,
    "name": "Stigmata",
    "description": "• ↑ Heart +1 Health\n• ↑ Damage +0.3 Damage\n• Healing Red Heals 1 heart",
    "image": "/items/138.png"
  },
  {
    "id": 139,
    "name": "Mom's Purse",
    "description": "• Trinket Spawns 1 random trinket\n• Trinket Isaac can hold 2 trinkets",
    "image": "/items/139.png"
  },
  {
    "id": 140,
    "name": "Bob's Curse",
    "description": "• Bomb +5 Bombs\n• Poison Isaac's bombs create a cloud of poison\n• Poison Poison immunity",
    "image": "/items/140.png"
  },
  {
    "id": 141,
    "name": "Pageant Boy",
    "description": "• Coin Spawns 7 random coins",
    "image": "/items/141.png"
  },
  {
    "id": 142,
    "name": "Scapular",
    "description": "• Soul Heart Isaac gains 1 Soul Heart when damaged down to half a heart\n• Can only happen once per room\n• Exiting and re-entering the room allows the effect to trigger again\n• Warning Doesn't trigger from health donations",
    "image": "/items/142.png"
  },
  {
    "id": 143,
    "name": "Speed Ball",
    "description": "• ↑ Speed +0.3 Speed\n• ↑ Shotspeed +0.2 Shot speed",
    "image": "/items/143.png"
  },
  {
    "id": 144,
    "name": "Bum Friend",
    "description": "• Coin Picks up nearby coins\n• Spawns random pickups every 3-4 coins",
    "image": "/items/144.png"
  },
  {
    "id": 145,
    "name": "Guppy's Head",
    "description": "• Spawns 2-4 blue flies",
    "image": "/items/145.png"
  },
  {
    "id": 146,
    "name": "Prayer Card",
    "description": "• Eternal Heart +1 Eternal Heart",
    "image": "/items/146.png"
  },
  {
    "id": 147,
    "name": "Notched Axe",
    "description": "• Using the item makes Isaac hold the axe\n• Holding the axe allows Isaac to break rocks, secret room entrances and damage enemies\n• Landing a hit with the axe reduces its charge\n• Entering a new floor fully recharges the axe",
    "image": "/items/147.png"
  },
  {
    "id": 148,
    "name": "Infestation",
    "description": "• Taking damage spawns 2-6 blue flies",
    "image": "/items/148.png"
  },
  {
    "id": 149,
    "name": "Ipecac",
    "description": "• ↑ Damage +40 Damage\n• ↓ Tears x0.33 Fire rate multiplier\n• ↓ Range x0.8 Range multiplier\n• ↓ Shotspeed x0.8 Shot speed multiplier\n• Isaac's tears are fired in an arc\n• Poison The tears explode and poison enemies where they land",
    "image": "/items/149.png"
  },
  {
    "id": 150,
    "name": "Tough Love",
    "description": "• Damage 10% chance to shoot teeth that deal 3.2x Isaac's damage\n• Luck 100% chance at 9 luck",
    "image": "/items/150.png"
  },
  {
    "id": 151,
    "name": "The Mulligan",
    "description": "• Tears have a 1/6 chance to spawn a blue fly when hitting an enemy",
    "image": "/items/151.png"
  },
  {
    "id": 152,
    "name": "Technology 2",
    "description": "• ↓ Tears x0.67 Fire rate multiplier\n• Replaces Isaac's right eye tears with a continuous laser\n• Damage The laser deals 2x Isaac's damage per second",
    "image": "/items/152.png"
  },
  {
    "id": 153,
    "name": "Mutant Spider",
    "description": "• ↓ Tears x0.42 Fire rate multiplier\n• Isaac shoots 4 tears at once",
    "image": "/items/153.png"
  },
  {
    "id": 154,
    "name": "Chemical Peel",
    "description": "• ↑ Damage +2 Damage for the left eye",
    "image": "/items/154.png"
  },
  {
    "id": 155,
    "name": "The Peeper",
    "description": "• ↑ Damage x1.35 Damage multiplier for the left eye\n• Floats around the room\n• Deals 17.1 contact damage per second",
    "image": "/items/155.png"
  },
  {
    "id": 156,
    "name": "Habit",
    "description": "• Battery Taking damage adds 1 charge to the active item",
    "image": "/items/156.png"
  },
  {
    "id": 157,
    "name": "Bloody Lust",
    "description": "• ↑ Damage Taking damage grants a damage up\n• Applies up to 6 times per floor\n• Lasts for the whole floor",
    "image": "/items/157.png"
  },
  {
    "id": 158,
    "name": "Crystal Ball",
    "description": "• Spawns a Soul Heart Soul Heart, Rune rune or Card card\n• Timer Full mapping effect for the floor (except Super Secret RoomUltra Secret Room Super/Ultra Secret Room)\n• While held:\n• Planetarium Chance +15% Planetarium chance\n• Planetarium Chance +100% if a Treasure Room Treasure Room was skipped",
    "image": "/items/158.png"
  },
  {
    "id": 159,
    "name": "Spirit of the Night",
    "description": "• Spectral tears\n• Flight",
    "image": "/items/159.png"
  },
  {
    "id": 160,
    "name": "Crack the Sky",
    "description": "• Spawns 5 beams of light near enemies\n• Each beam deals 8x Isaac's damage + 160 over 0.8 seconds",
    "image": "/items/160.png"
  },
  {
    "id": 161,
    "name": "Ankh",
    "description": "• Player4 Respawn as ??? (Blue Baby) on death",
    "image": "/items/161.png"
  },
  {
    "id": 162,
    "name": "Celtic Cross",
    "description": "• Taking damage has a 20% chance to make Isaac temporarily invincible\n• Luck 100% chance at 27 luck",
    "image": "/items/162.png"
  },
  {
    "id": 163,
    "name": "Ghost Baby",
    "description": "• Shoots spectral tears\n• Deals 3.5 damage per tear",
    "image": "/items/163.png"
  },
  {
    "id": 164,
    "name": "The Candle",
    "description": "• Throws a blue flame\n• It deals contact damage, blocks enemy tears, and despawns after 2 seconds",
    "image": "/items/164.png"
  },
  {
    "id": 165,
    "name": "Cat-o-nine-tails",
    "description": "• ↑ Damage +1 Damage\n• ↑ Shotspeed +0.23 Shot speed",
    "image": "/items/165.png"
  },
  {
    "id": 166,
    "name": "D20",
    "description": "• Rerolls all pickups in the room",
    "image": "/items/166.png"
  },
  {
    "id": 167,
    "name": "Harlequin Baby",
    "description": "• Shoots two tears in a V-shaped pattern\n• Deals 4 damage per tear",
    "image": "/items/167.png"
  },
  {
    "id": 168,
    "name": "Epic Fetus",
    "description": "• Instead of shooting tears, aim a crosshair\n• A missile lands on the crosshair after 1.5 seconds\n• Damage Missiles deal 20x Isaac's damage",
    "image": "/items/168.png"
  },
  {
    "id": 169,
    "name": "Polyphemus",
    "description": "• ↑ Damage +4 Damage\n• ↑ Damage x2 Damage multiplier\n• ↓ Tears x0.42 Fire rate multiplier\n• Tears pierce killed enemies if there is leftover damage",
    "image": "/items/169.png"
  },
  {
    "id": 170,
    "name": "Daddy Longlegs",
    "description": "• Stomps on a nearby enemy every 4 seconds\n• Deals 40 damage per second",
    "image": "/items/170.png"
  },
  {
    "id": 171,
    "name": "Spider Butt",
    "description": "• Slow Slows down enemies for 4 seconds\n• Deals 10 damage to all enemies\n• Enemies killed by the item spawn blue spiders",
    "image": "/items/171.png"
  },
  {
    "id": 172,
    "name": "Sacrificial Dagger",
    "description": "• Orbital\n• Blocks enemy shots\n• Deals 112.5 contact damage per second",
    "image": "/items/172.png"
  },
  {
    "id": 173,
    "name": "Mitre",
    "description": "• Soul Heart 33% chance that Red Hearts spawn as Soul Hearts instead",
    "image": "/items/173.png"
  },
  {
    "id": 174,
    "name": "Rainbow Baby",
    "description": "• Shoots random tears\n• Deals 3-5 damage per tear",
    "image": "/items/174.png"
  },
  {
    "id": 175,
    "name": "Dad's Key",
    "description": "• Opens all doors in the room, including Secret RoomSuper Secret RoomSecret Rooms, Challenge RoomBoss Rush RoomChallenge Rooms, and the Mega Satan door",
    "image": "/items/175.png"
  },
  {
    "id": 176,
    "name": "Stem Cells",
    "description": "• ↑ Heart +1 Health\n• ↑ Shotspeed +0.16 Shot speed\n• Healing Red Heals 1 heart",
    "image": "/items/176.png"
  },
  {
    "id": 177,
    "name": "Portable Slot",
    "description": "• Coin Spend 1 coin for a chance to spawn a pickup",
    "image": "/items/177.png"
  },
  {
    "id": 178,
    "name": "Holy Water",
    "description": "• Throwable Launches itself in the direction Isaac shoots\n• Breaks and deals 7 damage upon hitting an enemy\n• Petrify Leaves a pool of petrifying + damaging creep",
    "image": "/items/178.png"
  },
  {
    "id": 179,
    "name": "Fate",
    "description": "• Eternal Heart +1 Eternal Heart\n• Flight",
    "image": "/items/179.png"
  },
  {
    "id": 180,
    "name": "The Black Bean",
    "description": "• Isaac farts multiple times when damaged\n• Poison The farts leave poison clouds and deflects projectiles",
    "image": "/items/180.png"
  },
  {
    "id": 181,
    "name": "White Pony",
    "description": "• Speed Sets your Speed to at least 1.5\n• Flight while held\n• Using the item dashes in the direction of Isaac's movement, leaving behind beams of light",
    "image": "/items/181.png"
  },
  {
    "id": 182,
    "name": "Sacred Heart",
    "description": "• ↑ Heart +1 Health\n• ↑ Damage x2.3 Damage multiplier\n• ↑ Damage +1 Damage\n• ↓ Tears -0.4 Tears\n• ↓ Shotspeed -0.25 Shot speed\n• Healing Red Full health\n• Homing tears",
    "image": "/items/182.png"
  },
  {
    "id": 183,
    "name": "Tooth Picks",
    "description": "• ↑ Tears +0.7 Tears\n• ↑ Shotspeed +0.16 Shot speed",
    "image": "/items/183.png"
  },
  {
    "id": 184,
    "name": "Holy Grail",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Flight",
    "image": "/items/184.png"
  },
  {
    "id": 185,
    "name": "Dead Dove",
    "description": "• Spectral tears\n• Flight",
    "image": "/items/185.png"
  },
  {
    "id": 186,
    "name": "Blood Rights",
    "description": "• Deals 40 damage to every enemy\n• Warning Deals 1 heart of damage to Isaac\n• After the first use in a room, deals half a heart instead\n• Heart Removes Red Hearts first",
    "image": "/items/186.png"
  },
  {
    "id": 187,
    "name": "Guppy's Hairball",
    "description": "• Moving swings the hairball around\n• The ball grows when it kills an enemy\n• It deals more damage the bigger it is",
    "image": "/items/187.png"
  },
  {
    "id": 188,
    "name": "Abel",
    "description": "• Mirrors Isaac's movement\n• Shoots towards Isaac\n• Deals 3.5 damage per tear",
    "image": "/items/188.png"
  },
  {
    "id": 189,
    "name": "SMB Super Fan",
    "description": "• ↑ Tears +0.2 Tears\n• ↑ Damage +0.3 Damage\n• ↑ Speed +0.2 Speed\n• ↑ Range +2.5 Range\n• ↑ Heart +1 Health\n• Healing Red Full health",
    "image": "/items/189.png"
  },
  {
    "id": 190,
    "name": "Pyro",
    "description": "• Bomb +99 Bombs",
    "image": "/items/190.png"
  },
  {
    "id": 191,
    "name": "3 Dollar Bill",
    "description": "• Isaac's tears get random effects every 2-3 seconds",
    "image": "/items/191.png"
  },
  {
    "id": 192,
    "name": "Telepathy for Dummies",
    "description": "• Timer Receive for the room:\n• ↑ Range +3 Range\n• Homing tears",
    "image": "/items/192.png"
  },
  {
    "id": 193,
    "name": "MEAT!",
    "description": "• ↑ Damage +0.3 Damage\n• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/193.png"
  },
  {
    "id": 194,
    "name": "Magic 8 Ball",
    "description": "• ↑ Shotspeed +0.16 Shot speed\n• Card Spawns 1 card\n• Planetarium Chance +15% Planetarium chance",
    "image": "/items/194.png"
  },
  {
    "id": 195,
    "name": "Mom's Coin Purse",
    "description": "• Pill Spawns 4 pills",
    "image": "/items/195.png"
  },
  {
    "id": 196,
    "name": "Squeezy",
    "description": "• ↑ Tears +0.4 Tears\n• Soul Heart Spawns 2 Soul Hearts",
    "image": "/items/196.png"
  },
  {
    "id": 197,
    "name": "Jesus Juice",
    "description": "• ↑ Damage +0.5 Damage\n• ↑ Range +1.5 Range",
    "image": "/items/197.png"
  },
  {
    "id": 198,
    "name": "Box",
    "description": "• Spawns 1 pickup of each type",
    "image": "/items/198.png"
  },
  {
    "id": 199,
    "name": "Mom's Key",
    "description": "• Key +2 Keys\n• Chests contain more pickups",
    "image": "/items/199.png"
  },
  {
    "id": 200,
    "name": "Mom's Eyeshadow",
    "description": "• Charm 10% chance to shoot charming tears\n• Luck 100% chance at 27 luck",
    "image": "/items/200.png"
  },
  {
    "id": 201,
    "name": "Iron Bar",
    "description": "• ↑ Damage +0.3 Damage\n• Confusion 10% chance to shoot concussive tears\n• Luck 100% chance at 27 luck",
    "image": "/items/201.png"
  },
  {
    "id": 202,
    "name": "Midas' Touch",
    "description": "• Petrify Touching enemies petrifies them and turns them gold\n• Isaac deals contact damage based on his coin count\n• Coin Killing a golden enemy spawns coins\n• Poop spawned by Isaac has a high chance to be golden poop",
    "image": "/items/202.png"
  },
  {
    "id": 203,
    "name": "Humbleing Bundle",
    "description": "• Pickups have a 50% chance to be doubled",
    "image": "/items/203.png"
  },
  {
    "id": 204,
    "name": "Fanny Pack",
    "description": "• Taking damage has a 50% chance to spawn a random pickup",
    "image": "/items/204.png"
  },
  {
    "id": 205,
    "name": "Sharp Plug",
    "description": "• Battery Using an uncharged active item fully recharges it at the cost of half a heart per missing charge\n• Heart Removes Red Hearts first",
    "image": "/items/205.png"
  },
  {
    "id": 206,
    "name": "Guillotine",
    "description": "• ↑ Tears +0.5 Fire rate\n• ↑ Damage +1 Damage\n• Isaac's head becomes an orbital that shoots, doesn't take damage and deals 56 contact damage per second",
    "image": "/items/206.png"
  },
  {
    "id": 207,
    "name": "Ball of Bandages",
    "description": "• Lv1: Orbital\n• Charm Lv2: Orbital that shoots charmed tears\n• Charm Lv3: Bandage Girl\n• Charm Lv4: Super Bandage Girl",
    "image": "/items/207.png"
  },
  {
    "id": 208,
    "name": "Champion Belt",
    "description": "• ↑ Damage +1 Damage\n• Champion enemy chance +15%\n• Doesn't increase chance of champion bosses",
    "image": "/items/208.png"
  },
  {
    "id": 209,
    "name": "Butt Bombs",
    "description": "• Bomb +5 Bombs\n• Confusion Explosions concuss and damage every enemy in the room",
    "image": "/items/209.png"
  },
  {
    "id": 210,
    "name": "Gnawed Leaf",
    "description": "• After 1 second of inactivity, Isaac becomes invincible",
    "image": "/items/210.png"
  },
  {
    "id": 211,
    "name": "Spiderbaby",
    "description": "• Taking damage spawns 3-5 blue spiders",
    "image": "/items/211.png"
  },
  {
    "id": 212,
    "name": "Guppy's Collar",
    "description": "• 50% chance to revive with half a heart on death",
    "image": "/items/212.png"
  },
  {
    "id": 213,
    "name": "Lost Contact",
    "description": "• ↓ Shotspeed -0.15 Shot speed\n• Isaac's tears destroy enemy shots",
    "image": "/items/213.png"
  },
  {
    "id": 214,
    "name": "Anemic",
    "description": "• ↑ Range +1.5 Range\n• Timer When taking damage Isaac leaves a trail of blood creep for the room\n• The creep deals 6 damage per second",
    "image": "/items/214.png"
  },
  {
    "id": 215,
    "name": "Goat Head",
    "description": "• Angel Devil Chance 100% Devil/Angel Room chance",
    "image": "/items/215.png"
  },
  {
    "id": 216,
    "name": "Ceremonial Robes",
    "description": "• ↑ Damage +1 Damage\n• Black Heart +3 Black Hearts",
    "image": "/items/216.png"
  },
  {
    "id": 217,
    "name": "Mom's Wig",
    "description": "• Healing Red Heals 1 heart\n• 5% chance to spawn a blue spider when shooting tears\n• Luck 100% chance at 10 luck",
    "image": "/items/217.png"
  },
  {
    "id": 218,
    "name": "Placenta",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Healing Red 50% chance to heal half a heart every minute",
    "image": "/items/218.png"
  },
  {
    "id": 219,
    "name": "Old Bandage",
    "description": "• ↑ Empty Heart +1 Empty heart container\n• Heart Taking damage has a 20% chance to spawn a Red Heart",
    "image": "/items/219.png"
  },
  {
    "id": 220,
    "name": "Sad Bombs",
    "description": "• Bomb +5 Bombs\n• Isaac's bombs shoot 10 tears in a circle when they explode",
    "image": "/items/220.png"
  },
  {
    "id": 221,
    "name": "Rubber Cement",
    "description": "• Isaac's tears bounce off enemies and obstacles",
    "image": "/items/221.png"
  },
  {
    "id": 222,
    "name": "Anti-Gravity",
    "description": "• ↑ Tears +1 Fire rate\n• Holding the fire buttons causes tears to hover in mid-air\n• Releasing the fire buttons shoots them in the direction they were fired",
    "image": "/items/222.png"
  },
  {
    "id": 223,
    "name": "Pyromaniac",
    "description": "• Bomb +5 Bombs\n• Immunity to explosions and fire\n• Healing Red Getting hit by explosions heals half a heart",
    "image": "/items/223.png"
  },
  {
    "id": 224,
    "name": "Cricket's Body",
    "description": "• ↑ Tears +0.5 Fire rate\n• ↓ Range x0.8 Range multiplier\n• Tears split in 4 on hit\n• Split tears deal half damage",
    "image": "/items/224.png"
  },
  {
    "id": 225,
    "name": "Gimpy",
    "description": "• Soul Heart Taking damage has a 8% chance to spawn a Soul Heart\n• Luck +2% chance per luck\n• Half Heart Enemies have a chance to drop a half Red Heart on death",
    "image": "/items/225.png"
  },
  {
    "id": 226,
    "name": "Black Lotus",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Soul Heart +1 Soul Heart\n• Black Heart +1 Black Heart",
    "image": "/items/226.png"
  },
  {
    "id": 227,
    "name": "Piggy Bank",
    "description": "• Coin +3 Coins\n• Coin Taking damage spawns 1-2 coins",
    "image": "/items/227.png"
  },
  {
    "id": 228,
    "name": "Mom's Perfume",
    "description": "• ↑ Tears +0.5 Fire rate (Flat bonus, ignores tears cap)\n• Fear 15% chance to shoot fear tears",
    "image": "/items/228.png"
  },
  {
    "id": 229,
    "name": "Monstro's Lung",
    "description": "• ↓ Tears x0.23 Fire rate multiplier\n• Chargeable Tears are charged and released in a shotgun style attack",
    "image": "/items/229.png"
  },
  {
    "id": 230,
    "name": "Abaddon",
    "description": "• ↑ Speed +0.2 Speed\n• ↑ Damage +1.5 Damage\n• Black Heart Converts all heart containers into Black Hearts\n• Black Heart +2 Black Hearts\n• Fear 15% chance to shoot fear tears",
    "image": "/items/230.png"
  },
  {
    "id": 231,
    "name": "Ball of Tar",
    "description": "• Slow 10% chance to shoot slowing tears\n• Luck 100% chance at 18 luck\n• Slow Isaac leaves a trail of slowing creep",
    "image": "/items/231.png"
  },
  {
    "id": 232,
    "name": "Stop Watch",
    "description": "• ↑ Speed +0.3 Speed\n• Slow Enemies are permanently slowed down to 80% of their attack and movement speed",
    "image": "/items/232.png"
  },
  {
    "id": 233,
    "name": "Tiny Planet",
    "description": "• ↑ Range +6.5 Range\n• Spectral tears\n• Isaac's tears orbit around him",
    "image": "/items/233.png"
  },
  {
    "id": 234,
    "name": "Infestation 2",
    "description": "• Killing an enemy spawns a blue spider",
    "image": "/items/234.png"
  },
  {
    "id": 235,
    "name": "Item 235",
    "description": "Collectible item",
    "image": "/items/235.png"
  },
  {
    "id": 236,
    "name": "E. Coli",
    "description": "• Touching an enemy turns it into poop",
    "image": "/items/236.png"
  },
  {
    "id": 237,
    "name": "Death's Touch",
    "description": "• ↑ Damage +1.5 Damage\n• ↑ Tearsize x2 Tear size\n• ↓ Tears -0.3 Tears\n• Piercing tears",
    "image": "/items/237.png"
  },
  {
    "id": 238,
    "name": "Key Piece 1",
    "description": "• Warning Getting both parts of the key opens a big golden door\n• Angel Chance +25% Angel Room chance\n• Eternal Heart +2.5% chance for Eternal Hearts",
    "image": "/items/238.png"
  },
  {
    "id": 239,
    "name": "Key Piece 2",
    "description": "• Warning Getting both parts of the key opens a big golden door\n• Angel Chance +25% Angel Room chance\n• Eternal Heart +2.5% chance for Eternal Hearts",
    "image": "/items/239.png"
  },
  {
    "id": 240,
    "name": "Experimental Treatment",
    "description": "• ↑ Increases 4 random stats\n• ↓ Decreases 2 random stats",
    "image": "/items/240.png"
  },
  {
    "id": 241,
    "name": "Contract from Below",
    "description": "• Doubles all room clear rewards\n• 33% chance for no room clear reward",
    "image": "/items/241.png"
  },
  {
    "id": 242,
    "name": "Infamy",
    "description": "• 50% chance to block enemy shots",
    "image": "/items/242.png"
  },
  {
    "id": 243,
    "name": "Trinity Shield",
    "description": "• Blocks enemy shots coming from the direction Isaac is shooting",
    "image": "/items/243.png"
  },
  {
    "id": 244,
    "name": "Tech.5",
    "description": "• Occasionally shoot lasers in addition to Isaac's tears",
    "image": "/items/244.png"
  },
  {
    "id": 245,
    "name": "20/20",
    "description": "• ↓ Damage x0.8 Damage multiplier\n• Isaac shoots 2 tears at once",
    "image": "/items/245.png"
  },
  {
    "id": 246,
    "name": "Blue Map",
    "description": "• Secret Room Reveals secret room locations on the map",
    "image": "/items/246.png"
  },
  {
    "id": 247,
    "name": "BFFS!",
    "description": "• Familiars deal double damage",
    "image": "/items/247.png"
  },
  {
    "id": 248,
    "name": "Hive Mind",
    "description": "• Blue spiders and flies deal double damage\n• Spider and fly familiars become stronger",
    "image": "/items/248.png"
  },
  {
    "id": 249,
    "name": "There's Options",
    "description": "• Allows Isaac to choose between 2 items after beating a boss",
    "image": "/items/249.png"
  },
  {
    "id": 250,
    "name": "Bogo Bombs",
    "description": "• Bomb All bomb drops become double bombs",
    "image": "/items/250.png"
  },
  {
    "id": 251,
    "name": "Starter Deck",
    "description": "• Card Spawns 1 card on pickup\n• Isaac can carry 2 cards\n• Turns all pills into cards",
    "image": "/items/251.png"
  },
  {
    "id": 252,
    "name": "Little Baggy",
    "description": "• Pill Spawns 1 pill on pickup\n• Isaac can carry 2 pills\n• Turns all cards into pills",
    "image": "/items/252.png"
  },
  {
    "id": 253,
    "name": "Magic Scab",
    "description": "• ↑ Heart +1 Health\n• ↑ Luck +1 Luck\n• Healing Red Heals 1 heart",
    "image": "/items/253.png"
  },
  {
    "id": 254,
    "name": "Blood Clot",
    "description": "• ↑ Damage +1 Damage for the left eye\n• ↑ Range +2.75 Range for the left eye",
    "image": "/items/254.png"
  },
  {
    "id": 255,
    "name": "Screw",
    "description": "• ↑ Tears +0.5 Tears\n• ↑ Shotspeed +0.2 Shot speed",
    "image": "/items/255.png"
  },
  {
    "id": 256,
    "name": "Hot Bombs",
    "description": "• Bomb +5 Bombs\n• Burning Isaac's bombs deal contact damage\n• Burning Isaac's bombs leave a flame where they explode\n• Burning Fire immunity (except projectiles)",
    "image": "/items/256.png"
  },
  {
    "id": 257,
    "name": "Fire Mind",
    "description": "• Burning Isaac's tears light enemies on fire\n• 10% chance for tears to explode on enemy impact\n• Luck 100% chance at 13 luck\n• Warning The explosion can hurt Isaac",
    "image": "/items/257.png"
  },
  {
    "id": 258,
    "name": "Missing No.",
    "description": "• Rerolls all of Isaac's items and stats on pickup and at every new floor",
    "image": "/items/258.png"
  },
  {
    "id": 259,
    "name": "Dark Matter",
    "description": "• ↑ Damage +1 Damage\n• Fear 33% chance to shoot fear tears\n• Luck 100% chance at 20 luck",
    "image": "/items/259.png"
  },
  {
    "id": 260,
    "name": "Black Candle",
    "description": "• Curse Blind Immune to curses\n• Black Heart +1 Black Heart\n• Angel Devil Chance +15% Devil/Angel Room chance",
    "image": "/items/260.png"
  },
  {
    "id": 261,
    "name": "Proptosis",
    "description": "• ↑ Damage +0.5 Damage\n• ↓ Tears deal less damage the longer they are airborne\n• Tears deal 3x damage at point blank range and no damage after 0.8 seconds",
    "image": "/items/261.png"
  },
  {
    "id": 262,
    "name": "Missing Page 2",
    "description": "• Black Heart +1 Black Heart\n• Taking damage down to 1 heart damages all enemies in the room\n• Collectible35 Black Hearts and Necronomicon-like effects deal double damage",
    "image": "/items/262.png"
  },
  {
    "id": 263,
    "name": "Clear Rune",
    "description": "• Rune Spawns 1 rune on pickup\n• Rune Triggers the effect of the rune Isaac holds without using it",
    "image": "/items/263.png"
  },
  {
    "id": 264,
    "name": "Smart Fly",
    "description": "• Orbital\n• Attacks enemies when Isaac takes damage\n• Deals 6.5 contact damage per second",
    "image": "/items/264.png"
  },
  {
    "id": 265,
    "name": "Dry Baby",
    "description": "• 10% chance to damage all enemies in the room when it is hit by an enemy tear",
    "image": "/items/265.png"
  },
  {
    "id": 266,
    "name": "Juicy Sack",
    "description": "• Slow Leaves slowing creep\n• Spawns 1-2 friendly spiders after clearing a room",
    "image": "/items/266.png"
  },
  {
    "id": 267,
    "name": "Robo-Baby 2.0",
    "description": "• Shoots lasers\n• Deals 3.5 damage per shot\n• Moves in the direction Isaac is shooting",
    "image": "/items/267.png"
  },
  {
    "id": 268,
    "name": "Rotten Baby",
    "description": "• Spawns blue flies when Isaac shoots",
    "image": "/items/268.png"
  },
  {
    "id": 269,
    "name": "Headless Baby",
    "description": "• Leaves creep which deals 6 damage per second",
    "image": "/items/269.png"
  },
  {
    "id": 270,
    "name": "Leech",
    "description": "• Chases enemies\n• Healing Red Heals Isaac for half a heart when it kills an enemy\n• Deals 3.2 damage per second",
    "image": "/items/270.png"
  },
  {
    "id": 271,
    "name": "Mystery Sack",
    "description": "• Spawns a random pickup every 5-6 rooms",
    "image": "/items/271.png"
  },
  {
    "id": 272,
    "name": "BBF",
    "description": "• Friendly exploding fly\n• The explosion deals 100 damage\n• Warning The explosion can hurt Isaac",
    "image": "/items/272.png"
  },
  {
    "id": 273,
    "name": "Bob's Brain",
    "description": "• Dashes in the direction Isaac is shooting\n• Explodes when it hits an enemy\n• Poison The explosion deals 100 damage and poisons enemies\n• Warning The explosion can hurt Isaac",
    "image": "/items/273.png"
  },
  {
    "id": 274,
    "name": "Best Bud",
    "description": "• Taking damage spawns one midrange orbital for the room\n• Deals 150 contact damage per second",
    "image": "/items/274.png"
  },
  {
    "id": 275,
    "name": "Lil Brimstone",
    "description": "• Chargeable Familiar that charges and shoots a Collectible118 blood beam\n• It deals 24 damage over 0.63 seconds",
    "image": "/items/275.png"
  },
  {
    "id": 276,
    "name": "Isaac's Heart",
    "description": "• Isaac becomes invincible\n• Spawns a heart familiar that follows Isaac\n• The heart charges up when Isaac fires and releases a burst of tears when he stops\n• Warning If the heart familiar gets hit, Isaac takes damage",
    "image": "/items/276.png"
  },
  {
    "id": 277,
    "name": "Lil Haunt",
    "description": "• Fear Chases and fears enemies\n• Deals 4 contact damage per second",
    "image": "/items/277.png"
  },
  {
    "id": 278,
    "name": "Dark Bum",
    "description": "• Heart Picks up nearby Red Hearts\n• Spawns a Black Heart, rune, card, pill, or spider for every 1.5 hearts picked up",
    "image": "/items/278.png"
  },
  {
    "id": 279,
    "name": "Big Fan",
    "description": "• Large orbital\n• Deals 30 contact damage per second",
    "image": "/items/279.png"
  },
  {
    "id": 280,
    "name": "Sissy Longlegs",
    "description": "• Randomly spawns blue spiders in hostile rooms\n• Charm Charms enemies it comes in contact with",
    "image": "/items/280.png"
  },
  {
    "id": 281,
    "name": "Punching Bag",
    "description": "• Decoy familiar\n• Enemies target him instead of Isaac",
    "image": "/items/281.png"
  },
  {
    "id": 282,
    "name": "How to Jump",
    "description": "• Allows Isaac to jump over gaps and obstacles",
    "image": "/items/282.png"
  },
  {
    "id": 283,
    "name": "D100",
    "description": "• Duplicates 1 pickup in the room\n• Rerolls Isaac's speed, tears, damage, range and passive items\n• Rerolls all pedestal items, pickups and rocks in the room\n• Restarts the room, respawns all enemies and devolves them",
    "image": "/items/283.png"
  },
  {
    "id": 284,
    "name": "D4",
    "description": "• Reroll all of Isaac's passive items",
    "image": "/items/284.png"
  },
  {
    "id": 285,
    "name": "D10",
    "description": "• Devolves all enemies in the room\n• For instance, all Red Flies become Black Flies",
    "image": "/items/285.png"
  },
  {
    "id": 286,
    "name": "Blank Card",
    "description": "• Triggers the effect of the card Isaac holds without using it",
    "image": "/items/286.png"
  },
  {
    "id": 287,
    "name": "Book of Secrets",
    "description": "• Highlights tinted and crawlspace rocks in the room\n• Timer Receive one of these effects for the floor:\n• Collectible54 Treasure Map\n• Collectible21 Compass \n• Collectible246 Blue Map\n• Only grants effects not already active\n• Collectible76 If all effects are active, grants X-Ray Vision",
    "image": "/items/287.png"
  },
  {
    "id": 288,
    "name": "Box of Spiders",
    "description": "• Spawns 4-8 blue spiders",
    "image": "/items/288.png"
  },
  {
    "id": 289,
    "name": "Red Candle",
    "description": "• Throws a red flame\n• It deals contact damage, blocks enemy tears, and disappears when it has dealt damage or blocked shots 4 times or after 10 seconds",
    "image": "/items/289.png"
  },
  {
    "id": 290,
    "name": "The Jar",
    "description": "• Heart Picking up Red Hearts while at full health stores up to 4 of them in the Jar\n• Using the item drops all stored hearts on the floor",
    "image": "/items/290.png"
  },
  {
    "id": 291,
    "name": "Flush!",
    "description": "• Turns all non-boss enemies into poop\n• Instantly kills poop enemies and bosses\n• Extinguishes fire places and fills the room with water\n• Turns lava pits into walkable ground",
    "image": "/items/291.png"
  },
  {
    "id": 292,
    "name": "Satanic Bible",
    "description": "• Black Heart +1 Black Heart\n• Devil Room Using the item before a boss fight makes the boss reward a devil deal\n• Purchasing these devil deals has the same consequences as those in Devil Rooms\n• Does not affect item pedestals in The Void floor",
    "image": "/items/292.png"
  },
  {
    "id": 293,
    "name": "Head of Krampus",
    "description": "• Collectible118 Shoot a 4-way blood beam\n• They each deal 200 damage over 1.33 seconds",
    "image": "/items/293.png"
  },
  {
    "id": 294,
    "name": "Butter Bean",
    "description": "• Knocks back nearby enemies and projectiles\n• Enemies pushed into obstacles take 10 damage",
    "image": "/items/294.png"
  },
  {
    "id": 295,
    "name": "Magic Fingers",
    "description": "• Deals 2x Isaac's damage + 10 to all enemies in the room\n• Coin Costs 1 coin",
    "image": "/items/295.png"
  },
  {
    "id": 296,
    "name": "Converter",
    "description": "• Heart Converts 1 Soul or Black Heart into 1 heart container",
    "image": "/items/296.png"
  },
  {
    "id": 297,
    "name": "Pandora's Box",
    "description": "• No L BSpawns rewards based on floor:\n• B1: 2Soul Heart; B2: 2Bomb + 2Key\n• No L BC1: Boss item; C2: C1 + 2Soul Heart\n• D1: 4Soul Heart; D2: 20Coin\n• W1: 2 Boss items\n• W2: Collectible33 The Bible\n• ???/Void: Nothing\n• Sheol: Devil item + 1Black Heart\n• Cathe: Angel item + 1Eternal Heart\n• No L BDark Room: Unlocks Collectible523 Moving Box\n• Chest: 1Coin\n• Home: Collectible580 Red Key",
    "image": "/items/297.png"
  },
  {
    "id": 298,
    "name": "Unicorn Stump",
    "description": "• Timer Receive for 6 seconds:\n• ↑ Speed +0.28 Speed\n• Invincibility\n• Isaac can't shoot (No contact damage)",
    "image": "/items/298.png"
  },
  {
    "id": 299,
    "name": "Taurus",
    "description": "• ↓ Speed -0.3 Speed\n• ↑ Speed Slowly gain speed while in hostile rooms\n• At 2 speed, Isaac becomes invincible and deals contact damage\n• Afterwards, lose the Taurus speed boost for the room",
    "image": "/items/299.png"
  },
  {
    "id": 300,
    "name": "Aries",
    "description": "• ↑ Speed +0.25 Speed\n• Moving above 0.85 Speed makes Isaac immune to contact damage and deals 25 damage to enemies",
    "image": "/items/300.png"
  },
  {
    "id": 301,
    "name": "Cancer",
    "description": "• Soul Heart +3 Soul Hearts\n• Taking damage reduces all future damage in the room to half a heart",
    "image": "/items/301.png"
  },
  {
    "id": 302,
    "name": "Leo",
    "description": "• Size up\n• Isaac can destroy rocks by walking into them",
    "image": "/items/302.png"
  },
  {
    "id": 303,
    "name": "Virgo",
    "description": "• Taking damage have a 25% chance to make Isaac temporarily invincible\n• Luck 100% chance at 10 luck\n• Pill Converts negative pills into positive ones",
    "image": "/items/303.png"
  },
  {
    "id": 304,
    "name": "Libra",
    "description": "• +6 Coin coins, Bomb bombs and Key keys\n• Balances Isaac's stats\n• Future stat changes will be spread across all stats",
    "image": "/items/304.png"
  },
  {
    "id": 305,
    "name": "Scorpio",
    "description": "• Poison Poison tears",
    "image": "/items/305.png"
  },
  {
    "id": 306,
    "name": "Sagittarius",
    "description": "• ↑ Speed +0.2 Speed\n• Piercing tears",
    "image": "/items/306.png"
  },
  {
    "id": 307,
    "name": "Capricorn",
    "description": "• ↑ Heart +1 Health\n• ↑ Speed +0.1 Speed\n• ↑ Tears +0.5 Fire rate\n• ↑ Damage +0.5 Damage\n• ↑ Range +0.75 Range\n• +1 Coin coin, Bomb bomb and Key key\n• Healing Red Heals 1 heart",
    "image": "/items/307.png"
  },
  {
    "id": 308,
    "name": "Aquarius",
    "description": "• Isaac leaves a trail of creep\n• Damage The creep deals 66% of Isaac's damage per second and inherits his tear effects",
    "image": "/items/308.png"
  },
  {
    "id": 309,
    "name": "Pisces",
    "description": "• ↑ Tears +0.5 Fire rate\n• ↑ Tearsize +0.12 Tear size\n• Increases tear knockback",
    "image": "/items/309.png"
  },
  {
    "id": 310,
    "name": "Eve's Mascara",
    "description": "• ↑ Damage x2 Damage multiplier\n• ↓ Tears x0.66 Tears multiplier\n• ↓ Shotspeed -0.5 Shot speed",
    "image": "/items/310.png"
  },
  {
    "id": 311,
    "name": "Judas' Shadow",
    "description": "• Player12 When dead, respawn as Dark Judas with a x2 damage multiplier",
    "image": "/items/311.png"
  },
  {
    "id": 312,
    "name": "Maggy's Bow",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• All Red Hearts heal double their value",
    "image": "/items/312.png"
  },
  {
    "id": 313,
    "name": "Holy Mantle",
    "description": "• Negates the first hit taken once per room",
    "image": "/items/313.png"
  },
  {
    "id": 314,
    "name": "Thunder Thighs",
    "description": "• ↑ Heart +1 Health\n• ↓ Speed -0.4 Speed\n• Healing Red Heals 1 heart\n• Isaac can destroy rocks by walking into them",
    "image": "/items/314.png"
  },
  {
    "id": 315,
    "name": "Strange Attractor",
    "description": "• Isaac's tears attract enemies, pickups and trinkets\n• The attraction effect is much stronger at the end of the tears' path",
    "image": "/items/315.png"
  },
  {
    "id": 316,
    "name": "Cursed Eye",
    "description": "• Charged wave of 5 tears\n• Warning Taking damage while partially charged teleports Isaac to a random room",
    "image": "/items/316.png"
  },
  {
    "id": 317,
    "name": "Mysterious Liquid",
    "description": "• Isaac's tears leave creep\n• The creep deals 30 damage per second",
    "image": "/items/317.png"
  },
  {
    "id": 318,
    "name": "Gemini",
    "description": "• Close combat familiar\n• Deals 6 contact damage per second",
    "image": "/items/318.png"
  },
  {
    "id": 319,
    "name": "Cain's Other Eye",
    "description": "• Shoots tears in random directions with the same effects as Isaac\n• Damage Deals 75% of Isaac's damage",
    "image": "/items/319.png"
  },
  {
    "id": 320,
    "name": "???'s Only Friend",
    "description": "• Controllable fly\n• Deals 15 contact damage per second",
    "image": "/items/320.png"
  },
  {
    "id": 321,
    "name": "Samson's Chains",
    "description": "• Draggable ball that can destroy rocks\n• Deals 10.7 contact damage per second",
    "image": "/items/321.png"
  },
  {
    "id": 322,
    "name": "Mongo Baby",
    "description": "• Mimics your baby familiars' tears\n• If you have none, shoots normal 3.5 damage tears",
    "image": "/items/322.png"
  },
  {
    "id": 323,
    "name": "Isaac's Tears",
    "description": "• Shoots 8 tears in all directions\n• The tears copy Isaac's tear effects, plus 5 damage\n• Recharges by shooting tears",
    "image": "/items/323.png"
  },
  {
    "id": 324,
    "name": "Undefined",
    "description": "• Teleports Isaac to the Treasure Room Treasure, Secret Room Secret, Super Secret Room Super Secret or Error Room I AM ERROR Room",
    "image": "/items/324.png"
  },
  {
    "id": 325,
    "name": "Scissors",
    "description": "• Timer Isaac's head turns into a stationary familiar for the room\n• The body is controlled separately and gushes blood tears in the direction Isaac is shooting",
    "image": "/items/325.png"
  },
  {
    "id": 326,
    "name": "Breath of Life",
    "description": "• Holding down the USE button empties the charge bar\n• Isaac is temporarily invincible when the charge bar is empty\n• Isaac summons light beams on contact with enemies when invincible\n• If damage is blocked with perfect timing, shoot a 4-way holy beam and gain a brief shield\n• Warning Holding it for too long deals damage to Isaac",
    "image": "/items/326.png"
  },
  {
    "id": 327,
    "name": "The Polaroid",
    "description": "• Taking damage at half a Red Heart or none makes Isaac temporarily invincible for 5 seconds",
    "image": "/items/327.png"
  },
  {
    "id": 328,
    "name": "The Negative",
    "description": "• ↑ Damage +1 Damage\n• Taking damage at half a Red Heart or none damages all enemies in the room",
    "image": "/items/328.png"
  },
  {
    "id": 329,
    "name": "The Ludovico Technique",
    "description": "• Replaces Isaac's tears with one giant controllable tear",
    "image": "/items/329.png"
  },
  {
    "id": 330,
    "name": "Soy Milk",
    "description": "• ↑ Tears x5.5 Fire rate multiplier\n• ↓ Damage x0.2 Damage multiplier\n• ↓ Tearsize -0.3 Tear size\n• Drastically reduces knockback",
    "image": "/items/330.png"
  },
  {
    "id": 331,
    "name": "Godhead",
    "description": "• ↑ Damage +0.5 Damage\n• ↓ Tears -0.3 Tears\n• ↓ Shotspeed -0.3 Shot speed\n• Homing tears\n• Tears gain an aura that deals 60 damage per second",
    "image": "/items/331.png"
  },
  {
    "id": 332,
    "name": "Lazarus' Rags",
    "description": "• Player11 When dead, revive as Lazarus (Risen)",
    "image": "/items/332.png"
  },
  {
    "id": 333,
    "name": "The Mind",
    "description": "• Full mapping effect",
    "image": "/items/333.png"
  },
  {
    "id": 334,
    "name": "The Body",
    "description": "• ↑ Heart +3 Health",
    "image": "/items/334.png"
  },
  {
    "id": 335,
    "name": "The Soul",
    "description": "• Soul Heart +2 Soul Hearts\n• Grants an aura that repels enemies and projectiles",
    "image": "/items/335.png"
  },
  {
    "id": 336,
    "name": "Dead Onion",
    "description": "• ↑ Tearsize +0.22 Tear size\n• ↓ Range -1.5 Range\n• ↓ Shotspeed -0.4 Shot speed\n• Piercing + spectral tears",
    "image": "/items/336.png"
  },
  {
    "id": 337,
    "name": "Broken Watch",
    "description": "• Slow Slows down every 4th room\n• 13% chance to speed up the room instead",
    "image": "/items/337.png"
  },
  {
    "id": 338,
    "name": "The Boomerang",
    "description": "• Throwable boomerang\n• Petrify Petrifies enemies and deals 2x Isaac's damage\n• Can grab and bring back items",
    "image": "/items/338.png"
  },
  {
    "id": 339,
    "name": "Safety Pin",
    "description": "• ↑ Range +2.5 Range\n• ↑ Shotspeed +0.16 Shot speed\n• Black Heart +1 Black Heart",
    "image": "/items/339.png"
  },
  {
    "id": 340,
    "name": "Caffeine Pill",
    "description": "• ↑ Speed +0.3 Speed\n• ↑ Size down\n• Pill Spawns a random pill",
    "image": "/items/340.png"
  },
  {
    "id": 341,
    "name": "Torn Photo",
    "description": "• ↑ Tears +0.7 Tears\n• ↑ Shotspeed +0.16 Shot speed",
    "image": "/items/341.png"
  },
  {
    "id": 342,
    "name": "Blue Cap",
    "description": "• ↑ Heart +1 Health\n• ↑ Tears +0.7 Tears\n• ↓ Shotspeed -0.16 Shot speed\n• Healing Red Heals 1 heart",
    "image": "/items/342.png"
  },
  {
    "id": 343,
    "name": "Latch Key",
    "description": "• ↑ Luck +1 Luck\n• Soul Heart +1 Soul Heart\n• Key Spawns 2 keys",
    "image": "/items/343.png"
  },
  {
    "id": 344,
    "name": "Match Book",
    "description": "• Black Heart +1 Black Heart\n• Bomb Spawns 3 bombs\n• Trinket41 Spawns Match Stick",
    "image": "/items/344.png"
  },
  {
    "id": 345,
    "name": "Synthoil",
    "description": "• ↑ Damage +1 Damage\n• ↑ Range +2.5 Range",
    "image": "/items/345.png"
  },
  {
    "id": 346,
    "name": "A Snack",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/346.png"
  },
  {
    "id": 347,
    "name": "Diplopia",
    "description": "• Duplicates all item pedestals and pickups in the room",
    "image": "/items/347.png"
  },
  {
    "id": 348,
    "name": "Placebo",
    "description": "• Pill Triggers the effect of the pill Isaac holds without using it",
    "image": "/items/348.png"
  },
  {
    "id": 349,
    "name": "Wooden Nickel",
    "description": "• Coin 59% chance to spawn a random coin",
    "image": "/items/349.png"
  },
  {
    "id": 350,
    "name": "Toxic Shock",
    "description": "• Poison Entering a room poisons all enemies\n• Enemies killed leave a puddle of creep\n• The creep deals 30 damage per second",
    "image": "/items/350.png"
  },
  {
    "id": 351,
    "name": "Mega Bean",
    "description": "• Petrify Petrifies all enemies in the room\n• Poison Deals 5 damage and poisons any enemies nearby\n• Sends a rock wave in the direction Isaac is moving\n• The rock wave can open secret rooms and break rocks",
    "image": "/items/351.png"
  },
  {
    "id": 352,
    "name": "Glass Cannon",
    "description": "• Damage Shoots a large piercing spectral tear that does 10x Isaac's damage\n• Warning While held, taking damage:\n• ↓ Removes an extra 2 hearts of health\n• ↓ Breaks the cannon for a few rooms\n• ↑ Range +1.5 Range and leaves a blood trail for the room\n• The extra damage can't kill Isaac\n• Self-damage does not trigger the effect",
    "image": "/items/352.png"
  },
  {
    "id": 353,
    "name": "Bomber Boy",
    "description": "• Bomb +5 Bombs\n• Bombs explode in a cross-shaped pattern",
    "image": "/items/353.png"
  },
  {
    "id": 354,
    "name": "Crack Jacks",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Trinket Spawns a trinket",
    "image": "/items/354.png"
  },
  {
    "id": 355,
    "name": "Mom's Pearls",
    "description": "• ↑ Range +2.5 Range\n• ↑ Luck +1 Luck\n• Soul Heart +1 Soul Heart",
    "image": "/items/355.png"
  },
  {
    "id": 356,
    "name": "Car Battery",
    "description": "• Battery Using an active item triggers its effect twice",
    "image": "/items/356.png"
  },
  {
    "id": 357,
    "name": "Box of Friends",
    "description": "• Timer Duplicates all your familiars for the room\n• Collectible113 Grants a Demon Baby for the room if Isaac has no familiars",
    "image": "/items/357.png"
  },
  {
    "id": 358,
    "name": "The Wiz",
    "description": "• Spectral tears\n• Isaac shoots 2 tears at once diagonally",
    "image": "/items/358.png"
  },
  {
    "id": 359,
    "name": "8 Inch Nails",
    "description": "• ↑ Damage +1.5 Damage\n• Increases knockback",
    "image": "/items/359.png"
  },
  {
    "id": 360,
    "name": "Incubus",
    "description": "• Shoots tears with the same effects as Isaac\n• Damage Deals 75% of Isaac's damage",
    "image": "/items/360.png"
  },
  {
    "id": 361,
    "name": "Fate's Reward",
    "description": "• Shoots tears with the same damage and effects as Isaac\n• Shoots at half the rate of other familiars",
    "image": "/items/361.png"
  },
  {
    "id": 362,
    "name": "Lil Chest",
    "description": "• 35% chance to spawn a pickup every room",
    "image": "/items/362.png"
  },
  {
    "id": 363,
    "name": "Sworn Protector",
    "description": "• Orbital\n• Deals 105 contact damage per second\n• Blocks and attracts enemy shots\n• Eternal Heart Blocking 10 shots in one room spawns an Eternal Heart",
    "image": "/items/363.png"
  },
  {
    "id": 364,
    "name": "Friend Zone",
    "description": "• Midrange fly orbital\n• Deals 45 contact damage per second",
    "image": "/items/364.png"
  },
  {
    "id": 365,
    "name": "Lost Fly",
    "description": "• Moves along walls/obstacles in the room\n• Deals 30 contact damage per second\n• Nearby enemies target the fly",
    "image": "/items/365.png"
  },
  {
    "id": 366,
    "name": "Scatter Bombs",
    "description": "• Bomb +5 Bombs\n• Isaac's bombs scatter into 4-5 tiny bombs",
    "image": "/items/366.png"
  },
  {
    "id": 367,
    "name": "Sticky Bombs",
    "description": "• Bomb +5 Bombs\n• Slow Isaac's bombs stick to enemies and leave white slowing creep\n• Killing an enemy with a bomb spawns blue spiders",
    "image": "/items/367.png"
  },
  {
    "id": 368,
    "name": "Epiphora",
    "description": "• ↑ Tears Shooting in one direction gradually increases fire rate up to 200% and decreases accuracy",
    "image": "/items/368.png"
  },
  {
    "id": 369,
    "name": "Continuum",
    "description": "• ↑ Range +3 Range\n• Spectral tears\n• Tears can travel through one side of the screen and come out the other side",
    "image": "/items/369.png"
  },
  {
    "id": 370,
    "name": "Mr. Dolly",
    "description": "• ↑ Tears +0.7 Tears\n• ↑ Range +2.5 Range\n• Unknown Heart Spawns 3 random hearts",
    "image": "/items/370.png"
  },
  {
    "id": 371,
    "name": "Curse of the Tower",
    "description": "• Warning Taking damage spawns 6 Troll Bombs\n• The Troll Bombs inherit Isaac's bomb effects",
    "image": "/items/371.png"
  },
  {
    "id": 372,
    "name": "Charged Baby",
    "description": "• Every 30 seconds while in an uncleared room, the familiar can:\n• Battery Spawn a Battery (max 2 per room)\n• Battery Add one charge to the active item (max 2 per room)\n• Petrify Petrify all enemies in the room",
    "image": "/items/372.png"
  },
  {
    "id": 373,
    "name": "Dead Eye",
    "description": "• ↑ Damage Consecutive tear hits on enemies grant +25% damage (max +100%)\n• Missing has a chance to reset the multiplier",
    "image": "/items/373.png"
  },
  {
    "id": 374,
    "name": "Holy Light",
    "description": "• 10% chance to shoot holy tears, which spawn a beam of light on hit\n• Luck 50% chance at 9 luck\n• Damage The beams deals 3x Isaac's damage",
    "image": "/items/374.png"
  },
  {
    "id": 375,
    "name": "Host Hat",
    "description": "• Grants immunity to explosions and falling projectiles\n• 25% chance to reflect enemy shots",
    "image": "/items/375.png"
  },
  {
    "id": 376,
    "name": "Restock",
    "description": "• Buying an item from a Shop restocks it instantly\n• Restocked items increase in price each time",
    "image": "/items/376.png"
  },
  {
    "id": 377,
    "name": "Bursting Sack",
    "description": "• Spider enemies no longer target or deal contact damage to Isaac",
    "image": "/items/377.png"
  },
  {
    "id": 378,
    "name": "No. 2",
    "description": "• Holding a fire button for 2.35 seconds spawns a lit Butt Bomb",
    "image": "/items/378.png"
  },
  {
    "id": 379,
    "name": "Pupula Duplex",
    "description": "• ↑ Tearsize x2 Tear size\n• Spectral tears",
    "image": "/items/379.png"
  },
  {
    "id": 380,
    "name": "Pay To Play",
    "description": "• Coin +5 Coins\n• Locked blocks, doors and chests must be opened with coins instead of keys",
    "image": "/items/380.png"
  },
  {
    "id": 381,
    "name": "Eden's Blessing",
    "description": "• ↑ Tears +0.7 Tears\n• Grants a random item at the start of the next run",
    "image": "/items/381.png"
  },
  {
    "id": 382,
    "name": "Friendly Ball",
    "description": "• Can be thrown at enemies to capture them\n• Friendly Using the item after capturing an enemy spawns the capture as a friendly companion\n• Walking over the ball after a capture instantly recharges the item",
    "image": "/items/382.png"
  },
  {
    "id": 383,
    "name": "Tear Detonator",
    "description": "• Splits all of Isaac's tears currently on screen in a circle of 6 tears",
    "image": "/items/383.png"
  },
  {
    "id": 384,
    "name": "Lil Gurdy",
    "description": "• Chargeable Launches and bounces around the room with speed based on charge amount\n• Deals 5-20 contact damage per hit depending on speed",
    "image": "/items/384.png"
  },
  {
    "id": 385,
    "name": "Bumbo",
    "description": "• Coin Picks up nearby coins\n• Levels up after getting 6, 12, and 24 coins\n• Lv2: Chance to spawn item after room clears\n• Lv3: Shoots tears that can spawn coins on hit\n• Lv4: Chases enemies, occasionally dropping bombs, can spawn item on coin pickup",
    "image": "/items/385.png"
  },
  {
    "id": 386,
    "name": "D12",
    "description": "• Rerolls any obstacle into another random obstacle (e.g. poop, pots, TNT, red poop, stone blocks etc.)\n• Small chance to reroll obstacles into buttons, killswitches, crawlspaces or trapdoors",
    "image": "/items/386.png"
  },
  {
    "id": 387,
    "name": "Censer",
    "description": "• Slow Familiar surrounded by a huge aura of light that slows down enemies and projectiles in it",
    "image": "/items/387.png"
  },
  {
    "id": 388,
    "name": "Key Bum",
    "description": "• Key Picks up nearby keys\n• Chest Spawns random chests in return",
    "image": "/items/388.png"
  },
  {
    "id": 389,
    "name": "Rune Bag",
    "description": "• Rune Spawns a random rune or Soul Stone every 7-8 rooms",
    "image": "/items/389.png"
  },
  {
    "id": 390,
    "name": "Seraphim",
    "description": "• Shoots Sacred Heart tears\n• Deals 10 damage per tear",
    "image": "/items/390.png"
  },
  {
    "id": 391,
    "name": "Betrayal",
    "description": "• Enemies can hit each other with their projectiles, and start infighting",
    "image": "/items/391.png"
  },
  {
    "id": 392,
    "name": "Zodiac",
    "description": "• Grants a random zodiac item effect every floor",
    "image": "/items/392.png"
  },
  {
    "id": 393,
    "name": "Serpent's Kiss",
    "description": "• Poison 15% chance to shoot poison tears\n• Poison Poison enemies on contact\n• Black Heart Enemies killed by contact poison have a chance to drop a Black Heart on death",
    "image": "/items/393.png"
  },
  {
    "id": 394,
    "name": "Marked",
    "description": "• ↑ Tears +0.7 Tears\n• ↑ Range +3 Range\n• Isaac automatically shoots tears at a movable red target on the ground\n• Familiars shoot towards the target too\n• You can stop shooting and reset the target's location by pressing the drop button (Button R T)",
    "image": "/items/394.png"
  },
  {
    "id": 395,
    "name": "Tech X",
    "description": "• Isaac's tears are replaced by a chargeable laser ring\n• Ring size and damage increases up to 100% with charge time",
    "image": "/items/395.png"
  },
  {
    "id": 396,
    "name": "Ventricle Razor",
    "description": "• Creates up to two portals to travel between\n• Can be placed in different rooms",
    "image": "/items/396.png"
  },
  {
    "id": 397,
    "name": "Tractor Beam",
    "description": "• ↑ Tears +1 Fire rate\n• ↑ Tears +1 Fire rate cap\n• ↑ Range +2.5 Range\n• ↑ Shotspeed +0.16 Shot speed\n• Isaac's tears always travel along a beam of light in front of him",
    "image": "/items/397.png"
  },
  {
    "id": 398,
    "name": "God's Flesh",
    "description": "• Shrink Tears have a 10% chance to shrink enemies\n• Shrunken enemies can be crushed and killed by walking over them",
    "image": "/items/398.png"
  },
  {
    "id": 399,
    "name": "Maw of the Void",
    "description": "• Chargeable Firing tears for 2.35 seconds and releasing the fire button creates a black brimstone ring around Isaac\n• It deals 30x Isaac's damage over 2 seconds",
    "image": "/items/399.png"
  },
  {
    "id": 400,
    "name": "Spear of Destiny",
    "description": "• Isaac holds a spear in front of him\n• Fear The spear deals twice his damage and can fear enemies on contact",
    "image": "/items/400.png"
  },
  {
    "id": 401,
    "name": "Explosivo",
    "description": "• 25% chance to shoot sticky tears\n• Sticky tears grow and explode after a few seconds, dealing Isaac's damage +60",
    "image": "/items/401.png"
  },
  {
    "id": 402,
    "name": "Chaos",
    "description": "• All items are chosen from random item pools\n• Spawns 1-6 random pickups",
    "image": "/items/402.png"
  },
  {
    "id": 403,
    "name": "Spider Mod",
    "description": "• Displays tear damage and health bars of all enemies\n• Inflicts random status effects to enemies on contact\n• Randomly spawns batteries or blue spiders",
    "image": "/items/403.png"
  },
  {
    "id": 404,
    "name": "Farting Baby",
    "description": "• Blocks projectiles\n• When hit, 10% chance to fart and Charm charm, Poison poison or knockback enemies\n• The farts deal 5-6 damage",
    "image": "/items/404.png"
  },
  {
    "id": 405,
    "name": "GB Bug",
    "description": "• Throwable Throwable (double-tap shoot)\n• Rerolls enemies and pickups it comes in contact with",
    "image": "/items/405.png"
  },
  {
    "id": 406,
    "name": "D8",
    "description": "• Multiplies Isaac's damage, tears, range and speed stats by between x0.5 and x2\n• The multipliers are rerolled each use",
    "image": "/items/406.png"
  },
  {
    "id": 407,
    "name": "Purity",
    "description": "• ↑ Boosts one of Isaac's stats depending on the color of the aura\n• Taking damage removes the effect, and grants a new effect in the next room\n• Color YellowYellowC R = ↑ Speed +0.5 Speed\n• Color BlueBlueC R = ↑ Tears +2 Fire rate\n• Color RedRedC R = ↑ Damage +4 Damage\n• Color OrangeOrangeC R = ↑ Range +3 Range",
    "image": "/items/407.png"
  },
  {
    "id": 408,
    "name": "Athame",
    "description": "• 25% chance for a black brimstone ring to spawn around killed enemies\n• It deals 30x Isaac's damage over 2 seconds\n• Luck +2.5% chance per luck",
    "image": "/items/408.png"
  },
  {
    "id": 409,
    "name": "Empty Vessel",
    "description": "• Black Heart +2 Black Hearts\n• Empty Heart When Isaac has no Red Hearts:\n• Flight\n• Every 40 seconds while in a hostile room, gain a shield for 10 seconds",
    "image": "/items/409.png"
  },
  {
    "id": 410,
    "name": "Evil Eye",
    "description": "• 3.33% chance to shoot an eye\n• Luck 10% chance at 20 luck\n• The eye moves in a straight line and shoots tears in the same direction as Isaac",
    "image": "/items/410.png"
  },
  {
    "id": 411,
    "name": "Lusty Blood",
    "description": "• ↑ Damage +0.5 Damage for each enemy killed in the room\n• Caps at +5 Damage after 10 kills",
    "image": "/items/411.png"
  },
  {
    "id": 412,
    "name": "Cambion Conception",
    "description": "• Taking damage 15 times spawns a permanent demon familiar\n• After two familiars, it takes 30 instead of 15\n• Caps at 4 familiars",
    "image": "/items/412.png"
  },
  {
    "id": 413,
    "name": "Immaculate Conception",
    "description": "• Soul Heart Picking up 15 hearts spawns a permanent angelic familiar and a Soul Heart\n• Caps at 5 familiars",
    "image": "/items/413.png"
  },
  {
    "id": 414,
    "name": "More Options",
    "description": "• Treasure Room Allows Isaac to choose between 2 items in treasure rooms",
    "image": "/items/414.png"
  },
  {
    "id": 415,
    "name": "Crown Of Light",
    "description": "• Soul Heart +2 Soul Hearts\n• If Isaac has no damaged heart containers:\n• ↑ Damage x2 Damage multiplier\n• ↓ Shotspeed -0.3 Shot speed\n• Taking any damage removes the effect for the room",
    "image": "/items/415.png"
  },
  {
    "id": 416,
    "name": "Deep Pockets",
    "description": "• Coin If clearing a room would yield no reward, spawns 1-3 coins\n• Coin Increases the coin cap to 999",
    "image": "/items/416.png"
  },
  {
    "id": 417,
    "name": "Succubus",
    "description": "• Bounces around the room surrounded by a damaging aura that deals 7.5-10 damage per second\n• ↑ Damage x1.5 Damage multiplier while standing in the aura",
    "image": "/items/417.png"
  },
  {
    "id": 418,
    "name": "Fruit Cake",
    "description": "• Each one of Isaac's tears gets a different effect",
    "image": "/items/418.png"
  },
  {
    "id": 419,
    "name": "Teleport 2.0",
    "description": "• Teleports Isaac to a room that has not been cleared yet\n• Hierarchy: Room>Boss Room>Super Secret Room>Shop>Treasure Room>Sacrifice Room> Dice Room>Library>Cursed Room>Mini Boss>Challenge RoomBoss Rush Room>Isaacs RoomBarren Room> Arcade Room>Chest Room>Planetarium>Secret Room>Devil RoomAngel Room>Error Room",
    "image": "/items/419.png"
  },
  {
    "id": 420,
    "name": "Black Powder",
    "description": "• Walking in a circle draws a pentagram on the floor, which deals 130 damage over 4 seconds",
    "image": "/items/420.png"
  },
  {
    "id": 421,
    "name": "Kidney Bean",
    "description": "• Charm Charms all enemies in close range",
    "image": "/items/421.png"
  },
  {
    "id": 422,
    "name": "Glowing Hourglass",
    "description": "• Brings Isaac back to the previous room and reverses all actions done in the room the item was used in\n• The rewind can be used three times per floor\n• Collectible66 Acts as The Hourglass when out of rewinds, which slows enemies down for 8 seconds",
    "image": "/items/422.png"
  },
  {
    "id": 423,
    "name": "Circle of Protection",
    "description": "• Surrounds Isaac with a large halo that deals his damage on contact per second\n• Chance to reflect enemy projectiles",
    "image": "/items/423.png"
  },
  {
    "id": 424,
    "name": "Sack Head",
    "description": "• Pickups have a chance to be replaced with a Grab Bagsack:\n• Coin: 10%, BombKeyPillRuneBattery: 20%\n• Grab Bag Spawns a sack",
    "image": "/items/424.png"
  },
  {
    "id": 425,
    "name": "Night Light",
    "description": "• Slow Spawns a slowing cone of light in front of Isaac\n• Removes Curse of Darkness for the current floor",
    "image": "/items/425.png"
  },
  {
    "id": 426,
    "name": "Obsessed Fan",
    "description": "• Mimics Isaac's movement on a 0.66 second delay\n• Deals 30 contact damage per second",
    "image": "/items/426.png"
  },
  {
    "id": 427,
    "name": "Mine Crafter",
    "description": "• Spawns a pushable TNT barrel\n• Using the item a second time in the same room remotely detonates the barrel",
    "image": "/items/427.png"
  },
  {
    "id": 428,
    "name": "PJs",
    "description": "• Healing Red Full health\n• Soul Heart +4 Soul Hearts",
    "image": "/items/428.png"
  },
  {
    "id": 429,
    "name": "Head of the Keeper",
    "description": "• Coin Hitting an enemy with a tear has a 5% chance to spawn a Penny",
    "image": "/items/429.png"
  },
  {
    "id": 430,
    "name": "Papa Fly",
    "description": "• Mimics Isaac's movement on a 0.66 second delay\n• Damage Shoots tears at nearby enemies that deal Isaac's damage",
    "image": "/items/430.png"
  },
  {
    "id": 431,
    "name": "Multidimensional Baby",
    "description": "• Mimics Isaac's movement on a 0.66 second delay\n• Tears that pass through it are doubled and gain a range + shot speed boost",
    "image": "/items/431.png"
  },
  {
    "id": 432,
    "name": "Glitter Bombs",
    "description": "• Bomb +5 Bombs\n• Charm Bombs have a 63% chance to drop a random pickup and a 15% chance to charm enemies when they explode\n• The pickup spawn chance goes down by 1% for each spawn this floor",
    "image": "/items/432.png"
  },
  {
    "id": 433,
    "name": "My Shadow",
    "description": "• A small shadow follows Isaac\n• Friendly When an enemy touches the shadow a friendly black charger spawns for the room\n• The charger deals 8.7 damage per hit",
    "image": "/items/433.png"
  },
  {
    "id": 434,
    "name": "Jar of Flies",
    "description": "• Killing an enemy adds a blue fly to the jar, up to 20 flies\n• Using the item releases all the flies",
    "image": "/items/434.png"
  },
  {
    "id": 435,
    "name": "Lil Loki",
    "description": "• Shoots 4 tears in a cross pattern\n• Deals 3.5 damage per tear",
    "image": "/items/435.png"
  },
  {
    "id": 436,
    "name": "Milk!",
    "description": "• Tears Taking damage grants a Tears up for the duration of the room",
    "image": "/items/436.png"
  },
  {
    "id": 437,
    "name": "D7",
    "description": "• Restarts a room and respawns all enemies\n• Can be used to get multiple room clear rewards from a single room",
    "image": "/items/437.png"
  },
  {
    "id": 438,
    "name": "Binky",
    "description": "• ↑ Tears +0.75 Tears\n• ↑ Size down\n• Soul Heart +1 Soul Heart",
    "image": "/items/438.png"
  },
  {
    "id": 439,
    "name": "Mom's Box",
    "description": "• Trinket Spawns a random trinket\n• While held:\n• ↑ Luck +1 Luck\n• Trinket Doubles trinket effects",
    "image": "/items/439.png"
  },
  {
    "id": 440,
    "name": "Kidney Stone",
    "description": "• Isaac occasionally stops firing and charges an attack that releases a burst of tears and a kidney stone",
    "image": "/items/440.png"
  },
  {
    "id": 441,
    "name": "Mega Blast",
    "description": "• Timer Fires a huge Mega Satan blood beam for 15 seconds\n• The beam persists between rooms and floors",
    "image": "/items/441.png"
  },
  {
    "id": 442,
    "name": "Dark Prince's Crown",
    "description": "• While at 1 full Red Heart:\n• ↑ Tears +2 Fire rate\n• ↑ Range +1.5 Range\n• ↑ Shotspeed +0.2 Shot speed",
    "image": "/items/442.png"
  },
  {
    "id": 443,
    "name": "Apple!",
    "description": "• ↑ Tears +0.3 Tears\n• Damage 6.66% chance to shoot razor blades that deal 4x Isaac's damage\n• Luck 100% chance at 14 luck",
    "image": "/items/443.png"
  },
  {
    "id": 444,
    "name": "Lead Pencil",
    "description": "• Isaac shoots a cluster of tears every 15 tears",
    "image": "/items/444.png"
  },
  {
    "id": 445,
    "name": "Dog Tooth",
    "description": "• ↑ Speed +0.1 Speed\n• ↑ Damage +0.3 Damage\n• Secret RoomSuper Secret Room A wolf howls in rooms adjacent to a Secret/Super Secret Room\n• Ladder Room A dog barks in rooms with a crawlspace under a rock",
    "image": "/items/445.png"
  },
  {
    "id": 446,
    "name": "Dead Tooth",
    "description": "• Poison While firing, Isaac is surrounded by a green aura that poisons enemies",
    "image": "/items/446.png"
  },
  {
    "id": 447,
    "name": "Linger Bean",
    "description": "• Firing without pause for 7.5 seconds spawns a poop cloud\n• The cloud deals Isaac's damage 5 times a second\n• The cloud lasts 15 seconds and can be moved by shooting it",
    "image": "/items/447.png"
  },
  {
    "id": 448,
    "name": "Shard of Glass",
    "description": "• Upon taking damage:\n• Heart 25% chance to spawn a Red Heart\n• Bleeding Out Isaac bleeds, spewing tears in the direction he is shooting\n• The bleeding does half a Red Heart of damage every 20 seconds\n• The bleeding stops if a Red Heart is healed, all Red Hearts are empty, or the next damage would kill Isaac",
    "image": "/items/448.png"
  },
  {
    "id": 449,
    "name": "Metal Plate",
    "description": "• Soul Heart +1 Soul Heart\n• Confusion Enemy bullets have a 25% chance to be reflected as concussive tears",
    "image": "/items/449.png"
  },
  {
    "id": 450,
    "name": "Eye of Greed",
    "description": "• Damage Every 20 tears, Isaac shoots a coin tear that deals x1.5 +10 damage\n• Petrify Enemies hit with the coin get petrified and turn into gold\n• Coin Killing a gold enemy drops 1-3 coins\n• Warning Firing a coin tear costs 1 coin",
    "image": "/items/450.png"
  },
  {
    "id": 451,
    "name": "Tarot Cloth",
    "description": "• Card Spawns a card\n• Card Tarot card effects are doubled or enhanced",
    "image": "/items/451.png"
  },
  {
    "id": 452,
    "name": "Varicose Veins",
    "description": "• Taking damage shoots 10 tears in a circle around Isaac\n• The tears deal Isaac's damage + 25\n• Collectible214 20% chance to activate the Anemic effect for 2 seconds",
    "image": "/items/452.png"
  },
  {
    "id": 453,
    "name": "Compound Fracture",
    "description": "• ↑ Range +1.5 Range\n• Tears shatter into 1-3 bone shards upon hitting anything",
    "image": "/items/453.png"
  },
  {
    "id": 454,
    "name": "Polydactyly",
    "description": "• Spawns a Rune rune, Card card or Pill pill on pickup\n• Allows Isaac to carry 2 runes/cards/pills",
    "image": "/items/454.png"
  },
  {
    "id": 455,
    "name": "Dad's Lost Coin",
    "description": "• ↑ Range +2.5 Range\n• Luck Spawns a Lucky Penny",
    "image": "/items/455.png"
  },
  {
    "id": 456,
    "name": "Midnight Snack",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/456.png"
  },
  {
    "id": 457,
    "name": "Cone Head",
    "description": "• Soul Heart +1 Soul Heart\n• 20% chance to negate damage taken",
    "image": "/items/457.png"
  },
  {
    "id": 458,
    "name": "Belly Button",
    "description": "• Trinket Allows Isaac to carry 2 trinkets\n• Trinket Spawns a random trinket",
    "image": "/items/458.png"
  },
  {
    "id": 459,
    "name": "Sinus Infection",
    "description": "• 20% chance to shoot a sticky booger\n• Damage Boogers deal Isaac's damage once a second and stick for 10 seconds\n• Luck Not affected by luck",
    "image": "/items/459.png"
  },
  {
    "id": 460,
    "name": "Glaucoma",
    "description": "• Confusion 5% chance to shoot concussive tears\n• Makes the screen slightly darker",
    "image": "/items/460.png"
  },
  {
    "id": 461,
    "name": "Parasitoid",
    "description": "• 15% chance to shoot egg sacks\n• Luck 50% chance at 5 luck\n• Slow Egg sacks spawn slowing creep and 1-2 blue spider or fly on hit",
    "image": "/items/461.png"
  },
  {
    "id": 462,
    "name": "Eye of Belial",
    "description": "• ↑ Range +1.5 Range\n• Piercing tears\n• Hitting an enemy makes the tear homing and doubles its damage",
    "image": "/items/462.png"
  },
  {
    "id": 463,
    "name": "Sulfuric Acid",
    "description": "• ↑ Damage +0.3 Damage\n• Isaac's tears have a 25% chance to destroy rocks and open doors",
    "image": "/items/463.png"
  },
  {
    "id": 464,
    "name": "Glyph of Balance",
    "description": "• Soul Heart +2 Soul Hearts\n• Room clear rewards and champion enemy drops become whatever pickup Isaac needs the most",
    "image": "/items/464.png"
  },
  {
    "id": 465,
    "name": "Analog Stick",
    "description": "• ↑ Tears +0.3 Tears\n• Allows Isaac to shoot tears in any direction",
    "image": "/items/465.png"
  },
  {
    "id": 466,
    "name": "Contagion",
    "description": "• Poison The first enemy killed in a room explodes and poisons all nearby enemies\n• Enemies that die while poisoned also explode and poison nearby enemies",
    "image": "/items/466.png"
  },
  {
    "id": 467,
    "name": "Finger!",
    "description": "• Damage Constantly deals 10% of Isaac's damage in the direction it points",
    "image": "/items/467.png"
  },
  {
    "id": 468,
    "name": "Shade",
    "description": "• Follows Isaac's movement on a 0.66 second delay\n• Deals 75 contact damage per second\n• Friendly After it deals 666 damage, it is absorbed by Isaac, increasing his contact damage and spawning friendly Chargers",
    "image": "/items/468.png"
  },
  {
    "id": 469,
    "name": "Depression",
    "description": "• Leaves a trail of creep\n• The creep deals 6 damage per second\n• Enemies that touch the cloud can be hit by a holy light beam",
    "image": "/items/469.png"
  },
  {
    "id": 470,
    "name": "Hushy",
    "description": "• Bounces around the room\n• Deals 30 contact damage per second\n• Stops moving when Isaac shoots\n• Blocks projectiles when stopped",
    "image": "/items/470.png"
  },
  {
    "id": 471,
    "name": "Lil Monstro",
    "description": "• Chargeable Charges a shotgun attack similar to Collectible229 Monstro's Lung\n• Each tear deals 3.5 damage",
    "image": "/items/471.png"
  },
  {
    "id": 472,
    "name": "King Baby",
    "description": "• Other familiars follow it and automatically shoot at enemies\n• Stops moving when Isaac shoots\n• Teleports back to Isaac when he stops shooting",
    "image": "/items/472.png"
  },
  {
    "id": 473,
    "name": "Big Chubby",
    "description": "• Very slowly charges forwards\n• Blocks shots\n• Deals 40.5 contact damage per second",
    "image": "/items/473.png"
  },
  {
    "id": 474,
    "name": "Broken Glass Cannon",
    "description": "• Using the item turns it back into Glass Cannon",
    "image": "/items/474.png"
  },
  {
    "id": 475,
    "name": "Plan C",
    "description": "• Deals 9,999,999 damage to all enemies\n• Warning Kills Isaac 3 seconds later",
    "image": "/items/475.png"
  },
  {
    "id": 476,
    "name": "D1",
    "description": "• Duplicates a random pickup in the room\n• Duplicated pickups may not be identical to the original",
    "image": "/items/476.png"
  },
  {
    "id": 477,
    "name": "Void",
    "description": "• Consumes all pedestal items in the room\n• Active items: Their effects activate with every future use of Void\n• ↑ Passive items grant two random stat ups",
    "image": "/items/477.png"
  },
  {
    "id": 478,
    "name": "Pause",
    "description": "• Pauses all enemies in the room until Isaac shoots\n• Touching a paused enemy still deals damage to Isaac\n• Enemies unpause after 30 seconds",
    "image": "/items/478.png"
  },
  {
    "id": 479,
    "name": "Smelter",
    "description": "• Trinket Consumes Isaac's held trinkets and grants their effects permanently\n• Increases the spawn rate of trinkets",
    "image": "/items/479.png"
  },
  {
    "id": 480,
    "name": "Compost",
    "description": "• Converts pickups into blue flies or spiders\n• Doubles all blue flies and spiders\n• Spawns 1 blue fly or spider if Isaac has none",
    "image": "/items/480.png"
  },
  {
    "id": 481,
    "name": "Dataminer",
    "description": "• ↑ Random stat up\n• ↓ Random stat down\n• Timer Random tear effects for the room\n• Blank Corrupts all sprites and music in the room",
    "image": "/items/481.png"
  },
  {
    "id": 482,
    "name": "Clicker",
    "description": "• Changes your character to a random character\n• Removes the most recent item collected",
    "image": "/items/482.png"
  },
  {
    "id": 483,
    "name": "Mama Mega!",
    "description": "• Affects the whole floor\n• Explodes all objects\n• Deals 200 damage to all enemies\n• Opens secret rooms\n• Opens Boss Rush and Hush regardless of time",
    "image": "/items/483.png"
  },
  {
    "id": 484,
    "name": "Wait What?",
    "description": "• Upon use, pushes enemies away and spawns a rock wave around Isaac\n• The rock wave can open rooms and break rocks",
    "image": "/items/484.png"
  },
  {
    "id": 485,
    "name": "Crooked Penny",
    "description": "• 50% chance to double all items, pickups and chests in room\n• 50% chance to remove items / pickups in room and spawn 1 coin",
    "image": "/items/485.png"
  },
  {
    "id": 486,
    "name": "Dull Razor",
    "description": "• Hurts Isaac without removing health\n• Triggers any on-hit item effects",
    "image": "/items/486.png"
  },
  {
    "id": 487,
    "name": "Potato Peeler",
    "description": "• Empty Heart Removes 1 heart container for: \n• ↑ Damage +0.2 Damage\n• Collectible73 A Cube of Meat\n• Timer Receive for the room:\n• ↑ Range +1.5 Range\n• Collectible214 Leave a trail of blood creep",
    "image": "/items/487.png"
  },
  {
    "id": 488,
    "name": "Metronome",
    "description": "• Grants a random item effect for the room",
    "image": "/items/488.png"
  },
  {
    "id": 489,
    "name": "D Infinity",
    "description": "• Can be made to act as any die item (except Collectible723 Spindown Dice) with the drop button (Button R T)\n• Charge time varies based on the last die used and updates with every use",
    "image": "/items/489.png"
  },
  {
    "id": 490,
    "name": "Eden's Soul",
    "description": "• Spawns 2 random items depending on the current room's item pool\n• Starts with no charges",
    "image": "/items/490.png"
  },
  {
    "id": 491,
    "name": "Acid Baby",
    "description": "• Pill Spawns a random pill every 7 rooms\n• Poison Using a pill poisons all enemies in the room",
    "image": "/items/491.png"
  },
  {
    "id": 492,
    "name": "YO LISTEN!",
    "description": "• ↑ Luck +1 Luck\n• Highlights the location of Secret Room secret rooms, tinted rocks and Ladder Room crawlspaces",
    "image": "/items/492.png"
  },
  {
    "id": 493,
    "name": "Adrenaline",
    "description": "• ↑ Damage Damage up for every empty heart container\n• The more empty heart containers, the bigger the bonus for each new one",
    "image": "/items/493.png"
  },
  {
    "id": 494,
    "name": "Jacob's Ladder",
    "description": "• Tears spawn a spark of electricity on impact\n• Sparks deal half of Isaac's damage\n• Sparks can arc to up to 4 other enemies",
    "image": "/items/494.png"
  },
  {
    "id": 495,
    "name": "Ghost Pepper",
    "description": "• 8% chance to shoot a blue fire that blocks enemy shots and deals contact damage\n• Luck 50% chance at 10 luck\n• Fires shrink and disappear after 2 seconds",
    "image": "/items/495.png"
  },
  {
    "id": 496,
    "name": "Euthanasia",
    "description": "• 3.33% chance to shoot a needle\n• Luck 25% chance at 13 luck\n• Needles kill normal enemies instantly, bursting them into 10 tears\n• Damage Needles deal 3x Isaac's damage against bosses",
    "image": "/items/496.png"
  },
  {
    "id": 497,
    "name": "Camo Undies",
    "description": "• Confusion Entering a room camouflages Isaac and confuses all enemies until a tear is shot\n• ↑ Speed +0.5 Speed while cloaked\n• Uncloaking deals damage around Isaac and grants a very brief fire rate and damage up",
    "image": "/items/497.png"
  },
  {
    "id": 498,
    "name": "Duality",
    "description": "• Angel Devil Chance Spawns both a Devil and Angel Room if either would have spawned\n• Entering one makes the other disappear",
    "image": "/items/498.png"
  },
  {
    "id": 499,
    "name": "Eucharist",
    "description": "• Angel Chance 100% chance for Angel Rooms to spawn",
    "image": "/items/499.png"
  },
  {
    "id": 500,
    "name": "Sack of Sacks",
    "description": "• Spawns a sack every 7-8 rooms",
    "image": "/items/500.png"
  },
  {
    "id": 501,
    "name": "Greed's Gullet",
    "description": "• Heart +1 Heart container for every 25 coins Isaac has",
    "image": "/items/501.png"
  },
  {
    "id": 502,
    "name": "Large Zit",
    "description": "• Slow Firing occasionally shoots a white creep tear that deals double damage and slows enemies\n• Taking damage shoots a white creep tear",
    "image": "/items/502.png"
  },
  {
    "id": 503,
    "name": "Little Horn",
    "description": "• 5% chance to shoot a tear that summons a Big Horn hand\n• Luck 20% chance at 15 luck\n• The hand instantly kills enemies and deals 36 damage to bosses\n• Isaac deals 7 contact damage per second",
    "image": "/items/503.png"
  },
  {
    "id": 504,
    "name": "Brown Nugget",
    "description": "• Spawns a fly that shoots at enemies\n• Each shot deals 3.5 damage",
    "image": "/items/504.png"
  },
  {
    "id": 505,
    "name": "Poke Go",
    "description": "• Friendly Entering a hostile room has a 20% chance to spawn a friendly enemy",
    "image": "/items/505.png"
  },
  {
    "id": 506,
    "name": "Backstabber",
    "description": "• Bleeding Out Hitting an enemy in the back deals double damage and causes bleeding, which makes enemies leave creep and take damage when they move",
    "image": "/items/506.png"
  },
  {
    "id": 507,
    "name": "Sharp Straw",
    "description": "• Damage Deals Isaac's damage + 10% of the enemy's max health to all enemies\n• Half Heart Dealing damage with the Straw can spawn half hearts",
    "image": "/items/507.png"
  },
  {
    "id": 508,
    "name": "Mom's Razor",
    "description": "• Bleeding Out Orbital that causes bleeding, which makes enemies take damage when they move\n• Damage Deals 1.5x Isaac's damage per second",
    "image": "/items/508.png"
  },
  {
    "id": 509,
    "name": "Bloodshot Eye",
    "description": "• Orbital that shoots a tear every 0.33 seconds to nearby enemies\n• Deals 3.5 damage per tear\n• Deals 20 contact damage per second",
    "image": "/items/509.png"
  },
  {
    "id": 510,
    "name": "Delirious",
    "description": "• Friendly Spawns a friendly delirium version of a boss for the room",
    "image": "/items/510.png"
  },
  {
    "id": 511,
    "name": "Angry Fly",
    "description": "• Orbits a random enemy until that enemy dies\n• Deals 30 contact damage per second to other enemies",
    "image": "/items/511.png"
  },
  {
    "id": 512,
    "name": "Black Hole",
    "description": "• Throwable black hole, which sucks in everything\n• Deals 6 damage per second\n• Destroys nearby rocks\n• Lasts 6 seconds",
    "image": "/items/512.png"
  },
  {
    "id": 513,
    "name": "Bozo",
    "description": "• ↑ Damage +0.1 Damage\n• Soul Heart +1 Soul Heart\n• Charm Randomly charms/fears enemies\n• Taking damage has a 5% chance to spawn a Rainbow Poop",
    "image": "/items/513.png"
  },
  {
    "id": 514,
    "name": "Broken Modem",
    "description": "• Causes some enemies and projectiles to briefly pause at random intervals\n• Paused projectiles disappear\n• 25% chance to double room clear rewards",
    "image": "/items/514.png"
  },
  {
    "id": 515,
    "name": "Mystery Gift",
    "description": "• Spawns a random item from the current room's item pool\n• Chance to spawn Lump of Coal or The Poop instead",
    "image": "/items/515.png"
  },
  {
    "id": 516,
    "name": "Sprinkler",
    "description": "• Spawns a Sprinkler that shoots the same tears as Isaac in a circle around itself",
    "image": "/items/516.png"
  },
  {
    "id": 517,
    "name": "Fast Bombs",
    "description": "• Bomb +7 Bombs\n• Removes the delay between bomb placements\n• Bombs don't deal knockback to each other",
    "image": "/items/517.png"
  },
  {
    "id": 518,
    "name": "Buddy in a Box",
    "description": "• Familiar which looks like a random co-op baby\n• Has random tear effects\n• Effects change every floor",
    "image": "/items/518.png"
  },
  {
    "id": 519,
    "name": "Lil Delirium",
    "description": "• Transforms into a random familiar every 10 seconds",
    "image": "/items/519.png"
  },
  {
    "id": 520,
    "name": "Jumper Cables",
    "description": "• Killing 15 enemies adds 1 charge to the active item",
    "image": "/items/520.png"
  },
  {
    "id": 521,
    "name": "Coupon",
    "description": "• Makes one random item in the Shop Shop or Devil Room Devil Room free\n• Holding the item guarantees one Shop item is on sale",
    "image": "/items/521.png"
  },
  {
    "id": 522,
    "name": "Telekinesis",
    "description": "• Stops all enemy projectiles that come close to Isaac for 3 seconds and throws them away from him afterwards\n• Pushes close enemies away during the effect",
    "image": "/items/522.png"
  },
  {
    "id": 523,
    "name": "Moving Box",
    "description": "• Stores up to 10 pickups and items from the current room\n• Using the item again drops everything back on the floor\n• Allows Isaac to move things between rooms",
    "image": "/items/523.png"
  },
  {
    "id": 524,
    "name": "Technology Zero",
    "description": "• Isaac's tears are connected with beams of electricity\n• Electricity deals 4.5x Isaac's damage per second",
    "image": "/items/524.png"
  },
  {
    "id": 525,
    "name": "Leprosy",
    "description": "• Taking damage spawns a projectile blocking orbital\n• Caps at 3 orbitals\n• They deal 30 contact damage per second\n• Orbitals are destroyed if they take too much damage",
    "image": "/items/525.png"
  },
  {
    "id": 526,
    "name": "7 Seals",
    "description": "• Spawns a small horseman familiar that spawns locusts\n• The horseman and its locust changes every 10 seconds",
    "image": "/items/526.png"
  },
  {
    "id": 527,
    "name": "Mr. ME!",
    "description": "• Displays a movable cursor for a few seconds, then summons a ghost that will, depending on the cursor position:\n• Open doors or chests\n• Fetch an item\n• 50% chance to steal from the Shop / Devil\n• Attack an enemy until it dies\n• Explode walls, rocks, shopkeepers, angel statues, machines, beggars\n• Presses the button",
    "image": "/items/527.png"
  },
  {
    "id": 528,
    "name": "Angelic Prism",
    "description": "• Orbital prism\n• Friendly tears hitting it split into 4",
    "image": "/items/528.png"
  },
  {
    "id": 529,
    "name": "Pop!",
    "description": "• Isaac's tears bounce off each other and disappear when they stop moving",
    "image": "/items/529.png"
  },
  {
    "id": 530,
    "name": "Death's List",
    "description": "• Killing enemies in the order dictated by the mark Death Mark above them grants a random pickup or stat increase",
    "image": "/items/530.png"
  },
  {
    "id": 531,
    "name": "Haemolacria",
    "description": "• ↑ Damage +1 Damage\n• ↑ Damage x1.5 Damage multiplier\n• ↓ Tears x0.33 Fire rate multiplier\n• ↓ Range x0.8 Range multiplier\n• Isaac's tears fly in an arc and burst into smaller tears on impact",
    "image": "/items/531.png"
  },
  {
    "id": 532,
    "name": "Lachryphagy",
    "description": "• Isaac's tears progressively slow down, stop, then explode into 5-8 smaller tears\n• Tears can merge and become bigger",
    "image": "/items/532.png"
  },
  {
    "id": 533,
    "name": "Trisagion",
    "description": "• Replaces Isaac's tears with piercing beams of light\n• The beams deal 33% damage but can hit enemies multiple times",
    "image": "/items/533.png"
  },
  {
    "id": 534,
    "name": "Schoolbag",
    "description": "• Allows Isaac to hold 2 active items\n• The items can be swapped using the Drop button (Button R T)",
    "image": "/items/534.png"
  },
  {
    "id": 535,
    "name": "Blanket",
    "description": "• Healing Red Heals 1 heart\n• Soul Heart +1 Soul Heart\n• Holy Mantle Entering a boss room grants a Holy Mantle shield (prevents damage once)",
    "image": "/items/535.png"
  },
  {
    "id": 536,
    "name": "Sacrificial Altar",
    "description": "• Sacrifices up to 2 familiars and spawns a devil item for each sacrifice\n• Coin Turns blue spiders/flies into coins",
    "image": "/items/536.png"
  },
  {
    "id": 537,
    "name": "Lil Spewer",
    "description": "• Pill Spawns a random pill on pickup\n• Fires a line of creep\n• The type of creep changes with each pill use",
    "image": "/items/537.png"
  },
  {
    "id": 538,
    "name": "Marbles",
    "description": "• Trinket Spawns 3 random trinkets\n• Collectible479 Taking damage has a 10% chance to consume Isaac's held trinket and grant its effects permanently",
    "image": "/items/538.png"
  },
  {
    "id": 539,
    "name": "Mystery Egg",
    "description": "• Friendly Taking damage spawns a friendly enemy\n• Spawns stronger friends the more rooms are cleared without taking damage",
    "image": "/items/539.png"
  },
  {
    "id": 540,
    "name": "Flat Stone",
    "description": "• Isaac's tears bounce off the floor and cause splash damage on every bounce",
    "image": "/items/540.png"
  },
  {
    "id": 541,
    "name": "Marrow",
    "description": "• Heart Spawns 3 Red Hearts\n• Empty Bone Heart +1 Bone Heart",
    "image": "/items/541.png"
  },
  {
    "id": 542,
    "name": "Slipped Rib",
    "description": "• Orbital\n• Reflects enemy projectiles",
    "image": "/items/542.png"
  },
  {
    "id": 543,
    "name": "Hallowed Ground",
    "description": "• Taking damage spawns a white poop\n• While inside the poop's aura:\n• ↑ Tears x2.5 Fire rate multiplier\n• ↑ Damage x1.2 Damage multiplier\n• Homing tears\n• Chance to block damage",
    "image": "/items/543.png"
  },
  {
    "id": 544,
    "name": "Pointy Rib",
    "description": "• Levitates in front of Isaac\n• Deals 6x Isaac's damage per second",
    "image": "/items/544.png"
  },
  {
    "id": 545,
    "name": "Book of the Dead",
    "description": "• Friendly Spawns a bone orbital or friendly bony per enemy killed in the room (up to 8)",
    "image": "/items/545.png"
  },
  {
    "id": 546,
    "name": "Dad's Ring",
    "description": "• Petrify Grants an aura that petrifies enemies",
    "image": "/items/546.png"
  },
  {
    "id": 547,
    "name": "Divorce Papers",
    "description": "• ↑ Tears +0.7 Tears\n• Empty Bone Heart +1 Bone Heart\n• Trinket21 Spawns the Mysterious Paper trinket",
    "image": "/items/547.png"
  },
  {
    "id": 548,
    "name": "Jaw Bone",
    "description": "• Boomerang-like familiar\n• Deals 7 contact damage\n• Can grab and bring back pickups",
    "image": "/items/548.png"
  },
  {
    "id": 549,
    "name": "Brittle Bones",
    "description": "• Empty Bone Heart Replaces all of Isaac's Red Heart containers with 6 empty Bone Hearts\n• Upon losing a Bone Heart:\n• ↑ Tears +0.4 Fire rate\n• Shoots 8 bone tears in all directions",
    "image": "/items/549.png"
  },
  {
    "id": 550,
    "name": "Broken Shovel",
    "description": "• Mom's Foot constantly tries to stomp Isaac\n• Using the item stops the stomping for the room (or one Boss Rush wave)\n• Warning (Try to beat Boss Rush with it!)",
    "image": "/items/550.png"
  },
  {
    "id": 551,
    "name": "Broken Shovel",
    "description": "• Completes Mom's Shovel\n• Warning Use the shovel on the mound of dirt in the \"Dark Room\"",
    "image": "/items/551.png"
  },
  {
    "id": 552,
    "name": "Mom's Shovel",
    "description": "• Spawns a trapdoor to the next floor\n• Ladder Room Spawns a crawlspace if used on a decorative floor tile (grass, small rocks, papers, gems, etc.)\n• Warning Use the shovel on the mound of dirt in the \"Dark Room\"",
    "image": "/items/552.png"
  },
  {
    "id": 553,
    "name": "Mucormycosis",
    "description": "• 25% chance to shoot a sticky spore tear\n• Luck Not affected by luck\n• Poison Spores blow up after 2.5 seconds, dealing damage, poisoning nearby enemies and releasing more spores",
    "image": "/items/553.png"
  },
  {
    "id": 554,
    "name": "2Spooky",
    "description": "• Fear Fears enemies in a small radius around Isaac",
    "image": "/items/554.png"
  },
  {
    "id": 555,
    "name": "Golden Razor",
    "description": "• Coin +5 coins on pickup\n• Timer Pay 5 Coin coins and receive for the room:\n• ↑ Damage +1.2 Damage",
    "image": "/items/555.png"
  },
  {
    "id": 556,
    "name": "Sulfur",
    "description": "• Timer Collectible118 Brimstone for the room\n• Using it multiple times in one room grants increased damage and a larger beam",
    "image": "/items/556.png"
  },
  {
    "id": 557,
    "name": "Fortune Cookie",
    "description": "• Grants one of the following rewards:\n• A fortune\n• Soul Heart A Soul Heart\n• Rune A Rune or Soul Stone\n• Card A Tarot card\n• Trinket A Trinket",
    "image": "/items/557.png"
  },
  {
    "id": 558,
    "name": "Eye Sore",
    "description": "• Chance to shoot 1-3 extra tears in random directions\n• Luck Not affected by luck",
    "image": "/items/558.png"
  },
  {
    "id": 559,
    "name": "120 Volt",
    "description": "• Repeatedly zaps nearby enemies\n• Damage Electricity deals up to 3.75x Isaac's damage per second\n• Sparks can arc to up to 4 other enemies",
    "image": "/items/559.png"
  },
  {
    "id": 560,
    "name": "It Hurts",
    "description": "• Timer When taking damage, receive for the room:\n• ↑ Tears +1.2 Fire rate on the first hit\n• ↑ Tears +0.4 Fire rate for each additional hit\n• Releases a ring of 10 tears around Isaac",
    "image": "/items/560.png"
  },
  {
    "id": 561,
    "name": "Almond Milk",
    "description": "• ↑ Tears x4 Fire rate multiplier\n• ↓ Damage x0.3 Damage multiplier\n• ↓ Tearsize -0.16 Tear size\n• Tears gain random worm trinket effects and some item effects",
    "image": "/items/561.png"
  },
  {
    "id": 562,
    "name": "Rock Bottom",
    "description": "• ↑ Prevents stats from being lowered for the rest of the run",
    "image": "/items/562.png"
  },
  {
    "id": 563,
    "name": "Nancy Bombs",
    "description": "• Bomb +5 Bombs\n• Isaac's bombs explode with random effects",
    "image": "/items/563.png"
  },
  {
    "id": 564,
    "name": "A Bar of Soap",
    "description": "• ↑ Tears +0.5 Tears\n• ↑ Shotspeed +0.2 Shot speed",
    "image": "/items/564.png"
  },
  {
    "id": 565,
    "name": "Blood Puppy",
    "description": "• Chases enemies\n• After killing 15 enemies, it deals more damage, spawns a half Red Heart every 10 kills, but tries to hurt Isaac\n• After killing 40 enemies, it deals even more damage, spawns full Red Hearts, and can destroy rocks\n• Dealing enough damage to it returns it to its first phase",
    "image": "/items/565.png"
  },
  {
    "id": 566,
    "name": "Dream Catcher",
    "description": "• Half Soul Heart +1 half Soul Heart when entering a new floor\n• The stage transition nightmare reveals the next floor's boss fight and Treasure Room item",
    "image": "/items/566.png"
  },
  {
    "id": 567,
    "name": "Paschal Candle",
    "description": "• ↑ Tears Clearing a room without taking damage grants +0.4 Fire rate\n• Caps at +2 Fire rate Color Silver(5 rooms)C R",
    "image": "/items/567.png"
  },
  {
    "id": 568,
    "name": "Divine Intervention",
    "description": "• Double-tapping a fire key creates a shield\n• The shield lasts 1 second, pushes enemies away and reflects enemy projectiles and lasers",
    "image": "/items/568.png"
  },
  {
    "id": 569,
    "name": "Blood Oath",
    "description": "• Warning Entering a new floor drains all of Isaac's Red Hearts, but grants speed and damage bonuses for each heart lost\n• Each half heart lost counts as an individual hit for on-hit effects",
    "image": "/items/569.png"
  },
  {
    "id": 570,
    "name": "Playdough Cookie",
    "description": "• Each of Isaac's tears have a different color and status effect",
    "image": "/items/570.png"
  },
  {
    "id": 571,
    "name": "Orphan Socks",
    "description": "• ↑ Speed +0.3 Speed\n• Soul Heart +2 Soul Hearts\n• Immune to creep and floor spikes",
    "image": "/items/571.png"
  },
  {
    "id": 572,
    "name": "Eye of the Occult",
    "description": "• ↑ Damage +1 Damage\n• ↑ Range +2 Range\n• ↓ Shotspeed -0.16 Shot speed\n• Isaac's tears can be controlled in mid-air",
    "image": "/items/572.png"
  },
  {
    "id": 573,
    "name": "Immaculate Heart",
    "description": "• ↑ Heart +1 Health\n• ↑ Damage x1.2 Damage multiplier\n• Healing Red Full health\n• 20% chance to shoot an extra orbiting spectral tear",
    "image": "/items/573.png"
  },
  {
    "id": 574,
    "name": "Monstrance",
    "description": "• Isaac is surrounded by a damaging aura\n• The closer enemies are to Isaac, the more damage the aura deals to them",
    "image": "/items/574.png"
  },
  {
    "id": 575,
    "name": "The Intruder",
    "description": "• Slow Buries itself in Isaac's head and shoots 4 extra slowing tears that deal 1.5 damage\n• Taking damage can make the spider exit the head and chase enemies",
    "image": "/items/575.png"
  },
  {
    "id": 576,
    "name": "Dirty Mind",
    "description": "• All Dip (small poop) enemies are friendly\n• Destroying poop spawns 1-4 Dips\n• Dip type depends on the poop type\n• Rocks may be replaced with poop",
    "image": "/items/576.png"
  },
  {
    "id": 577,
    "name": "Damocles",
    "description": "• Hangs a sword above Isaac's head, which doubles all pedestal items\n• Does not double items that have a price or come from chests\n• Warning After taking any damage, the sword has an extremely low chance to instantly kill Isaac every frame\n• Invincibility effects can prevent the death",
    "image": "/items/577.png"
  },
  {
    "id": 578,
    "name": "Free Lemonade",
    "description": "• Creates a large pool of yellow creep\n• The creep deals 24 damage per second",
    "image": "/items/578.png"
  },
  {
    "id": 579,
    "name": "Spirit Sword",
    "description": "• Instead of shooting tears, swing a sword\n• Damage The sword deals 3x Isaac's damage +3.5 and swings as fast as the fire button is tapped\n• Chargeable Charging does a spin attack + projectile shot\n• Shoots projectiles with swings at full health",
    "image": "/items/579.png"
  },
  {
    "id": 580,
    "name": "Red Key",
    "description": "• Creates a red room adjacent to a regular room, indicated by a door outline\n• Red Rooms can be special rooms\n• Error Room Entering a room outside the 13x13 floor map teleports Isaac to the I AM ERROR room",
    "image": "/items/580.png"
  },
  {
    "id": 581,
    "name": "Psy Fly",
    "description": "• Chases and deflects enemy projectiles\n• Deals 15 contact damage per second",
    "image": "/items/581.png"
  },
  {
    "id": 582,
    "name": "Wavy Cap",
    "description": "• ↑ Tears +0.75 Fire rate\n• ↓ Speed -0.03 Speed\n• Distorts the screen\n• Takes longer to recharge each use\n• Leaving or clearing rooms reduces the effects",
    "image": "/items/582.png"
  },
  {
    "id": 583,
    "name": "Rocket in a Jar",
    "description": "• Bomb +5 Bombs\n• Placing a bomb while shooting fires a rocket in that direction instead",
    "image": "/items/583.png"
  },
  {
    "id": 584,
    "name": "Book of Virtues",
    "description": "• Angel Chance +12.5% Angel Room chance while held\n• Spawns an orbital wisp familiar that shoots spectral tears but can be destroyed\n• Can be combined with a second active item to create special wisps\n• Angel Room Turns the first Devil Room into an Angel Room\n• Angel Room Allows Angel Rooms to spawn after taking a Devil deal",
    "image": "/items/584.png"
  },
  {
    "id": 585,
    "name": "Alabaster Box",
    "description": "• Must be charged by picking up Soul Hearts, then spawns:\n• Soul Heart Three Soul Hearts\n• Angel Room Two Angel Room items\n• Devil Room Only spawns 2 Soul Hearts and 1 Angel item if a Devil deal was taken previously",
    "image": "/items/585.png"
  },
  {
    "id": 586,
    "name": "The Stairway",
    "description": "• Spawns a ladder in the first room of every floor that leads to a unique Angel Room Angel Room shop with items and pickups",
    "image": "/items/586.png"
  },
  {
    "id": 587,
    "name": "Item 587",
    "description": "Collectible item",
    "image": "/items/587.png"
  },
  {
    "id": 588,
    "name": "Sol",
    "description": "• Boss Room Reveals the location of the Boss Room\n• Timer When the floor boss is defeated, receive for the floor:\n• ↑ Damage +3 Damage\n• ↑ Luck +1 Luck\n• Card20 The Sun effect\n• Battery Fully recharges the active item\n• Curse Blind Removes any curses",
    "image": "/items/588.png"
  },
  {
    "id": 589,
    "name": "Luna",
    "description": "• Adds an extra Secret Room Secret Room and Super Secret Room Super Secret Room to each floor\n• Reveals one Secret Room each floor\n• Timer Secret Rooms contain a beam of light that grant for the floor:\n• ↑ Tears +0.5 Fire rate\n• ↑ Tears Additional +0.5 Fire rate from the first beam per floor\n• Half Soul Heart Half a Soul Heart",
    "image": "/items/589.png"
  },
  {
    "id": 590,
    "name": "Mercurius",
    "description": "• ↑ Speed +0.4 Speed\n• Most doors stay permanently open",
    "image": "/items/590.png"
  },
  {
    "id": 591,
    "name": "Venus",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart\n• Charm Charms nearby enemies",
    "image": "/items/591.png"
  },
  {
    "id": 592,
    "name": "Terra",
    "description": "• ↑ Damage +1 Damage\n• Replaces Isaac's tears with rocks\n• Rocks deal variable damage, can destroy obstacles and have increased knockback",
    "image": "/items/592.png"
  },
  {
    "id": 593,
    "name": "Mars",
    "description": "• Double-tapping a movement key makes Isaac dash\n• Damage During a dash, Isaac is invincible and deals 4x his damage +8\n• Timer 3 seconds cooldown",
    "image": "/items/593.png"
  },
  {
    "id": 594,
    "name": "Jupiter",
    "description": "• ↑ Empty Heart +2 Empty heart containers\n• ↓ Speed -0.3 Speed\n• Healing Red Heals half a heart\n• Speed Speed builds up to +0.5 while standing still\n• Poison Moving releases poison clouds\n• Poison Poison immunity",
    "image": "/items/594.png"
  },
  {
    "id": 595,
    "name": "Saturnus",
    "description": "• Entering a room causes 7 tears to orbit Isaac\n• Those tears last for 13 seconds and deal 1.5x Isaac's damage +5\n• Enemy projectiles have a chance to orbit Isaac",
    "image": "/items/595.png"
  },
  {
    "id": 596,
    "name": "Uranus",
    "description": "• Freezing Isaac shoots petrifying tears that freeze enemies on death\n• Touching a frozen enemy makes it slide away and explode into 10 ice shards",
    "image": "/items/596.png"
  },
  {
    "id": 597,
    "name": "Neptunus",
    "description": "• Tears Not shooting builds up a tear bonus over 3 seconds\n• The tear bonus decreases as Isaac shoots",
    "image": "/items/597.png"
  },
  {
    "id": 598,
    "name": "Pluto",
    "description": "• ↑ Tears +0.7 Tears\n• Significantly shrinks Isaac, allowing him to squeeze between objects\n• Projectiles can pass over him",
    "image": "/items/598.png"
  },
  {
    "id": 599,
    "name": "Voodoo Head",
    "description": "• Cursed Room Spawns an additional Curse Room each floor\n• Improves Curse Room layouts and rewards\n• Coin Spawns a coin in every Curse Room",
    "image": "/items/599.png"
  },
  {
    "id": 600,
    "name": "Eye Drops",
    "description": "• ↑ Tears x1.4 Fire rate multiplier for the left eye",
    "image": "/items/600.png"
  },
  {
    "id": 601,
    "name": "Act of Contrition",
    "description": "• ↑ Tears +0.7 Tears\n• Eternal Heart +1 Eternal Heart\n• Angel Chance Allows Angel Rooms to spawn even after taking a devil deal\n• Taking Red Heart damage doesn't reduce Devil/Angel Room chance as much",
    "image": "/items/601.png"
  },
  {
    "id": 602,
    "name": "Member Card",
    "description": "• Shop Opens a trapdoor in every Shop\n• The trapdoor leads to an underground shop that sells trinkets, runes, cards, special hearts and items from any pool",
    "image": "/items/602.png"
  },
  {
    "id": 603,
    "name": "Battery Pack",
    "description": "• Battery Spawns 2-4 batteries\n• Battery Fully recharges the active item",
    "image": "/items/603.png"
  },
  {
    "id": 604,
    "name": "Mom's Bracelet",
    "description": "• Allows Isaac to pick up and throw rocks, TNT, poops, friendly Dips, Hosts and other obstacles\n• Allows carrying them between rooms",
    "image": "/items/604.png"
  },
  {
    "id": 605,
    "name": "The Scooper",
    "description": "• ↑ Damage x1.35 Damage multiplier for the right eye\n• Timer Summons a Peeper familiar for the room, which leaves a trail of red creep and deals 36 contact damage per second",
    "image": "/items/605.png"
  },
  {
    "id": 606,
    "name": "Ocular Rift",
    "description": "• 5% chance to shoot tears that create rifts where they land\n• Luck 20% chance at 15 luck\n• Rifts do 3x Isaac's damage per second and pull in nearby enemies, pickups, and projectiles",
    "image": "/items/606.png"
  },
  {
    "id": 607,
    "name": "Boiled Baby",
    "description": "• Shoots chaotic bursts of tears in all directions\n• Deals 3.5 or 5.25 damage per tear",
    "image": "/items/607.png"
  },
  {
    "id": 608,
    "name": "Freezer Baby",
    "description": "• Petrify Shoots petrifying tears that deal 3.5 damage\n• Freezing Freezes enemies upon killing them",
    "image": "/items/608.png"
  },
  {
    "id": 609,
    "name": "Eternal D6",
    "description": "• Rerolls all pedestal items in the room\n• Has a 25% chance to delete items instead of rerolling them",
    "image": "/items/609.png"
  },
  {
    "id": 610,
    "name": "Bird Cage",
    "description": "• Leaps on the enemy that deals the first damage to Isaac in a room\n• Deals 45 damage and releases a rock wave\n• Chases enemies afterwards for 6.5 contact damage per second",
    "image": "/items/610.png"
  },
  {
    "id": 611,
    "name": "Larynx",
    "description": "• Isaac screams, damages and knocks back nearby enemies\n• The scream gets stronger the more charges the item has",
    "image": "/items/611.png"
  },
  {
    "id": 612,
    "name": "Lost Soul",
    "description": "• Dies in one hit and respawns at the start of the next floor\n• If it is brought alive to the next floor, it can spawn:\n• Soul Heart 3 Soul Hearts\n• Eternal Heart 2 Eternal Hearts\n• Treasure Room A Treasure Room item\n• Angel Room An Angel Room item",
    "image": "/items/612.png"
  },
  {
    "id": 613,
    "name": "Item 613",
    "description": "Collectible item",
    "image": "/items/613.png"
  },
  {
    "id": 614,
    "name": "Blood Bombs",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 4 hearts\n• Half Heart If Isaac has no bombs, one can be placed at the cost of half a heart\n• Isaac's bombs leave red creep",
    "image": "/items/614.png"
  },
  {
    "id": 615,
    "name": "Lil Dumpy",
    "description": "• Deflects an enemy or projectile right before Isaac would take damage from it\n• Chance to deflect projectiles near it\n• Needs to be touched after deflecting to be reactivated",
    "image": "/items/615.png"
  },
  {
    "id": 616,
    "name": "Bird's Eye",
    "description": "• 8% chance to shoot a red fire that blocks enemy shots and deals contact damage\n• Luck 50% chance at 10 luck\n• Fires disappear after blocking 4 shots, dealing damage 4 times or after 10 seconds",
    "image": "/items/616.png"
  },
  {
    "id": 617,
    "name": "Lodestone",
    "description": "• Magnetize 17% chance to shoot magnetizing tears\n• Luck 100% chance at 5 luck\n• Magnetized enemies attract nearby pickups, projectiles and enemies",
    "image": "/items/617.png"
  },
  {
    "id": 618,
    "name": "Rotten Tomato",
    "description": "• Bait 17% chance to shoot tears that mark enemies\n• Luck 100% chance at 5 luck\n• Marked enemies are targeted by other enemies",
    "image": "/items/618.png"
  },
  {
    "id": 619,
    "name": "Birthright",
    "description": "• Has a different effect for each character",
    "image": "/items/619.png"
  },
  {
    "id": 620,
    "name": "Item 620",
    "description": "Collectible item",
    "image": "/items/620.png"
  },
  {
    "id": 621,
    "name": "Red Stew",
    "description": "• ↑ Damage +21.6 Damage\n• Healing Red Full health\n• The damage up wears off over 3 minutes\n• Killing enemies while the effect is active extends it",
    "image": "/items/621.png"
  },
  {
    "id": 622,
    "name": "Genesis",
    "description": "• Removes all of Isaac's items and pickups\n• Teleports Isaac to a bedroom with pickups and chests\n• For every item removed, Isaac can choose between 3 items from the same pool\n• Leaving the bedroom takes Isaac to the next floor",
    "image": "/items/622.png"
  },
  {
    "id": 623,
    "name": "Sharp Key",
    "description": "• Key +5 Keys\n• Throws one of Isaac's keys in the direction he shoots\n• Thrown keys deal damage, destroy obstacles, and open doors\n• Enemies killed with keys can spawn the contents of a chest, including items",
    "image": "/items/623.png"
  },
  {
    "id": 624,
    "name": "Booster Pack",
    "description": "• Card Spawns 5 random cards",
    "image": "/items/624.png"
  },
  {
    "id": 625,
    "name": "Mega Mush",
    "description": "• Gigantifies Isaac and grants:\n• ↑ Damage x4 Damage multiplier\n• ↑ Range +2 Range\n• ↓ Tears -1.9 Tears\n• Invincibility\n• Ability to crush enemies and obstacles\n• Timer Lasts for 30 seconds and persists between rooms and floors",
    "image": "/items/625.png"
  },
  {
    "id": 626,
    "name": "Knife Piece 1",
    "description": "• Turns into a throwable knife that deals 25 damage when combined with Collectible627 Knife Piece 2\n• The knife can open a door made of flesh",
    "image": "/items/626.png"
  },
  {
    "id": 627,
    "name": "Knife Piece 2",
    "description": "• Turns into a throwable knife that deals 25 damage when combined with Collectible626 Knife Piece 1\n• The knife can open a door made of flesh",
    "image": "/items/627.png"
  },
  {
    "id": 628,
    "name": "Death Certificate",
    "description": "• Teleports Isaac to a floor that contains every item in the game\n• Choosing an item from this floor teleports Isaac back to the room he came from",
    "image": "/items/628.png"
  },
  {
    "id": 629,
    "name": "Bot Fly",
    "description": "• Shoots shielded tears to destroy enemy projectiles\n• Deals 3 contact damage per second",
    "image": "/items/629.png"
  },
  {
    "id": 630,
    "name": "Item 630",
    "description": "Collectible item",
    "image": "/items/630.png"
  },
  {
    "id": 631,
    "name": "Meat Cleaver",
    "description": "• Splits all enemies in the room into 2 smaller versions with 40% health\n• Enemies that naturally split (like Envy) take enough damage to split instead\n• Deals 25 damage to enemies that can't be split",
    "image": "/items/631.png"
  },
  {
    "id": 632,
    "name": "Evil Charm",
    "description": "• ↑ Luck +2 Luck\n• Immune to Burning burn, Confusion confusion, Fear fear, and Poison poison effects",
    "image": "/items/632.png"
  },
  {
    "id": 633,
    "name": "Dogma",
    "description": "• ↑ Speed +0.1 Speed\n• ↑ Damage +2 Damage\n• Flight and one-time Holy Mantle Small Holy Mantle shield\n• Heart Heals Isaac with Red and Soul Hearts if he has less than 6 hearts",
    "image": "/items/633.png"
  },
  {
    "id": 634,
    "name": "Purgatory",
    "description": "• Red cracks spawn on the ground in hostile rooms\n• Walking over the cracks summons homing exploding ghosts",
    "image": "/items/634.png"
  },
  {
    "id": 635,
    "name": "Stitches",
    "description": "• Spawns a familiar that moves in the direction Isaac shoots\n• On use, Isaac swaps places with the familiar and becomes briefly invincible\n• Teleporting onto things can damage or destroy them",
    "image": "/items/635.png"
  },
  {
    "id": 636,
    "name": "R Key",
    "description": "• Restarts the entire run\n• All items, trinkets, stats and pickups collected are kept\n• The timer does not reset",
    "image": "/items/636.png"
  },
  {
    "id": 637,
    "name": "Knockout Drops",
    "description": "• Confusion 10% chance to shoot a fist that inflicts confusion and extreme knockback\n• Luck 100% chance at 9 luck\n• Enemies take damage when they get knocked into a wall/obstacle",
    "image": "/items/637.png"
  },
  {
    "id": 638,
    "name": "Eraser",
    "description": "• Throws an eraser that instantly kills an enemy\n• Prevents the erased enemy from spawning for the rest of the run\n• Deals 15 damage to bosses\n• Can only be used once per floor",
    "image": "/items/638.png"
  },
  {
    "id": 639,
    "name": "Yuck Heart",
    "description": "• Rotten Heart +1 Rotten Heart",
    "image": "/items/639.png"
  },
  {
    "id": 640,
    "name": "Urn of Souls",
    "description": "• Spews a stream of flames\n• Killing an enemy adds a charge to the urn",
    "image": "/items/640.png"
  },
  {
    "id": 641,
    "name": "Akeldama",
    "description": "• Creates a chain of tears behind Isaac in hostile rooms\n• The tears deal 3.5 damage",
    "image": "/items/641.png"
  },
  {
    "id": 642,
    "name": "Magic Skin",
    "description": "• Spawns an item from the current room's item pool\n• Broken Heart Turns 1 heart container or 1 Bone Heart or 2 Soul Hearts into a Broken Heart\n• Warning Replaces future items if Isaac isn't holding it Color Silver(33% after 1 use, 50% after 2, 100% after 3)\n• Lower chance if Magic Skin is on a pedestal on the current floor",
    "image": "/items/642.png"
  },
  {
    "id": 643,
    "name": "Revelation",
    "description": "• Soul Heart +2 Soul Hearts\n• Flight\n• Chargeable Chargeable high damage holy beam\n• Does not replace Isaac's tears",
    "image": "/items/643.png"
  },
  {
    "id": 644,
    "name": "Consolation Prize",
    "description": "• ↑ Increases Isaac's lowest stat out of Speed, Fire rate, Damage, and Range\n• Spawns either 3 Coin coins, 1 Bomb bomb, or 1 Key key depending on what Isaac has the least of",
    "image": "/items/644.png"
  },
  {
    "id": 645,
    "name": "Tinytoma",
    "description": "• Large orbital that blocks shots\n• Deals 3.5 contact damage per second\n• Splits into smaller versions of itself upon taking 3 hits\n• The smaller versions break into blue spiders\n• Respawns 5 seconds after fully disappearing",
    "image": "/items/645.png"
  },
  {
    "id": 646,
    "name": "Brimstone Bombs",
    "description": "• Bomb +5 Bombs\n• Collectible118 Isaac's bombs release a 4-way blood beam\n• The beams don't hurt Isaac",
    "image": "/items/646.png"
  },
  {
    "id": 647,
    "name": "4.5 Volt",
    "description": "• Clearing rooms no longer charges active items\n• Dealing damage to enemies slowly fills up the charge bar\n• Damage needed per charge increases each floor",
    "image": "/items/647.png"
  },
  {
    "id": 648,
    "name": "Item 648",
    "description": "Collectible item",
    "image": "/items/648.png"
  },
  {
    "id": 649,
    "name": "Fruity Plum",
    "description": "• Propels herself diagonally around the room, firing tears in her path that deal 3 damage\n• Deals 6 contact damage per second",
    "image": "/items/649.png"
  },
  {
    "id": 650,
    "name": "Plum Flute",
    "description": "• Timer Summons a friendly Baby Plum in the room for 10 seconds",
    "image": "/items/650.png"
  },
  {
    "id": 651,
    "name": "Star of Bethlehem",
    "description": "• Slowly travels from the first room of the floor to the Boss Room Boss Room\n• Moves faster if you're ahead of it, and slower if you're behind it\n• Standing in its aura grants:\n• ↑ Tears x2.5 Tears multiplier\n• ↑ Damage x1.8 Damage multiplier\n• Homing tears\n• 50% chance to ignore damage",
    "image": "/items/651.png"
  },
  {
    "id": 652,
    "name": "Cube Baby",
    "description": "• Can be kicked around by walking into it\n• Slow Slows and deals up to 17.5 contact damage depending on speed\n• Freezing Freezes enemies it kills",
    "image": "/items/652.png"
  },
  {
    "id": 653,
    "name": "Vade Retro",
    "description": "• Holding the item causes non-ghost enemies to spawn small red ghosts on death\n• Using the item causes the ghosts to explode\n• Using the item also kills any ghost enemies (including bosses) that have less than 50% HP left",
    "image": "/items/653.png"
  },
  {
    "id": 654,
    "name": "False PHD",
    "description": "• Black Heart +1 Black Heart\n• Pill Identifies all pills\n• Converts all good pills into bad pills\n• ↑ Damage Eating a stat down pill grants +0.6 damage\n• Black Heart Eating other bad pills spawns a Black Heart",
    "image": "/items/654.png"
  },
  {
    "id": 655,
    "name": "Spin to Win",
    "description": "• Passively grants an orbital that blocks enemy shots and deals 10.5 contact damage per second\n• Using the item grants:\n• ↑ Speed +0.5 Speed\n• Increases speed and damage of orbitals",
    "image": "/items/655.png"
  },
  {
    "id": 656,
    "name": "Damocles",
    "description": "• Hangs a sword above Isaac's head, which doubles all pedestal items\n• Does not double items that have a price or come from chests\n• Warning After taking any damage, the sword has an extremely low chance to instantly kill Isaac every frame\n• Invincibility effects can prevent the death",
    "image": "/items/656.png"
  },
  {
    "id": 657,
    "name": "Vasculitis",
    "description": "• Enemies explode into tears upon death, which inherit the effects of Isaac's tears",
    "image": "/items/657.png"
  },
  {
    "id": 658,
    "name": "Giant Cell",
    "description": "• Taking damage spawns a Minisaac\n• Minisaacs chase and shoot at nearby enemies",
    "image": "/items/658.png"
  },
  {
    "id": 659,
    "name": "Tropicamide",
    "description": "• ↑ Range +2.5 Range\n• ↑ Tearsize +0.22 Tear size",
    "image": "/items/659.png"
  },
  {
    "id": 660,
    "name": "Card Reading",
    "description": "• Spawns two portals in the first room of each floor\n• Leaving the room despawns the portals\n• Blank Color RedRed: C RBoss Room Boss Room\n• Blank Color YellowYellow: C RTreasure Room Item Room\n• Blank Color BlueBlue: C RSecret Room Secret Room",
    "image": "/items/660.png"
  },
  {
    "id": 661,
    "name": "Quints",
    "description": "• Killing an enemy spawns a stationary familiar in its place\n• Caps at 5 familiars",
    "image": "/items/661.png"
  },
  {
    "id": 662,
    "name": "Item 662",
    "description": "Collectible item",
    "image": "/items/662.png"
  },
  {
    "id": 663,
    "name": "Tooth and Nail",
    "description": "• 1 second of invincibility every 6 seconds\n• Isaac flashes right before the effect triggers",
    "image": "/items/663.png"
  },
  {
    "id": 664,
    "name": "Binge Eater",
    "description": "• ↑ Heart +1 Health\n• Healing Red Full health\n• Item pedestals cycle between their item and a food item\n• Picking up a food item grants:\n• Healing Red Heal 2 hearts\n• ↑ Damage Temporary +3.6 damage\n• ↑ 2 permanent stat ups (depending on the food)\n• ↓ Speed -0.03 speed",
    "image": "/items/664.png"
  },
  {
    "id": 665,
    "name": "Guppy's Eye",
    "description": "• Reveals the contents of Chest chests, Grab Bag sacks, shopkeepers, and fireplaces before they're opened or destroyed",
    "image": "/items/665.png"
  },
  {
    "id": 666,
    "name": "Item 666",
    "description": "Collectible item",
    "image": "/items/666.png"
  },
  {
    "id": 667,
    "name": "Strawman",
    "description": "• Bomb +1 Bomb\n• Player14 Spawns Keeper as a second character\n• When he dies, spawns blue spiders and permanently removes Strawman and any item that he has picked up from the inventory\n• Devil Room Devil Room items cost coins while Strawman is alive\n• Warning Strawman can pick up story items",
    "image": "/items/667.png"
  },
  {
    "id": 668,
    "name": "Dad's Note",
    "description": "• Begins the Ascent\n• Trinkets left in previous Treasure Room Treasure or Boss Room Boss Rooms turn into Card78 Cracked Keys",
    "image": "/items/668.png"
  },
  {
    "id": 669,
    "name": "Sausage",
    "description": "• ↑ Heart +1 Health\n• ↑ Speed +0.2 Speed\n• ↑ Tears +0.5 Tears\n• ↑ Damage +0.5 Damage\n• ↑ Range +2.5 Range\n• ↑ Shotspeed +0.16 Shot speed\n• ↑ Luck +1 Luck\n• Healing Red Full health\n• ↑ Angel Devil Chance +6.9% Devil/Angel Room chance\n• ↑ Planetarium Chance +6.9% Planetarium chance",
    "image": "/items/669.png"
  },
  {
    "id": 670,
    "name": "Options?",
    "description": "• Allows Isaac to choose from two different room clear rewards",
    "image": "/items/670.png"
  },
  {
    "id": 671,
    "name": "Candy Heart",
    "description": "• ↑ Healing with Heart Red Hearts grants random permanent stat ups\n• Heart Spawns a Red Heart",
    "image": "/items/671.png"
  },
  {
    "id": 672,
    "name": "A Pound of Flesh",
    "description": "• Devil Room Devil Room items cost coins\n• Shop Shop items cost hearts\n• Consumables in Shops are surrounded by spikes",
    "image": "/items/672.png"
  },
  {
    "id": 673,
    "name": "Redemption",
    "description": "• Devil Room Entering a new floor after visiting a Devil Room and not taking any item/pickup grants:\n• ↑ Damage +1 Damage\n• Soul Heart +1 Soul Heart",
    "image": "/items/673.png"
  },
  {
    "id": 674,
    "name": "Spirit Shackles",
    "description": "• Taking fatal damage transforms Isaac into a ghost chained to his dead body and allows him to continue to fight with half a heart\n• If the ghost survives, Isaac revives after 10 seconds\n• Must be recharged by picking up a Soul Heart",
    "image": "/items/674.png"
  },
  {
    "id": 675,
    "name": "Cracked Orb",
    "description": "• Taking damage:\n• Unlocks all locked doors in the room\n• Reveals a random room on the map\n• Destroys all tinted and crawlspace rocks",
    "image": "/items/675.png"
  },
  {
    "id": 676,
    "name": "Empty Heart",
    "description": "• Empty Heart +1 Empty heart container when at 1 Red Heart or less at the start of a new floor",
    "image": "/items/676.png"
  },
  {
    "id": 677,
    "name": "Astral Projection",
    "description": "• Timer Taking damage in an uncleared room grants for the fight:\n• Spectral tears\n• Flight\n• Negates the next damage taken\n• Stops time for 2 seconds\n• Greatly increases speed and fire rate for 2 seconds",
    "image": "/items/677.png"
  },
  {
    "id": 678,
    "name": "C Section",
    "description": "• Chargeable Replaces Isaac's tears with a charge attack that shoots homing, spectral fetus tears\n• Damage Fetus tears deal about 2.8x Isaac's damage per second",
    "image": "/items/678.png"
  },
  {
    "id": 679,
    "name": "Lil Abaddon",
    "description": "• Collectible399 Familiar that charges and unleashes a Maw of the Void circle\n• It deals 52.5 damage over 1 second",
    "image": "/items/679.png"
  },
  {
    "id": 680,
    "name": "Montezuma's Revenge",
    "description": "• Chargeable Firing charges up a short-ranged high damage backwards beam\n• Does not replace Isaac's tears",
    "image": "/items/680.png"
  },
  {
    "id": 681,
    "name": "Lil Portal",
    "description": "• Deals contact damage and flies forward\n• Consumes pickups in its path\n• Each pickup consumed increases its size, damage, and spawns a blue fly\n• Consuming four pickups spawns a portal to an unexplored room",
    "image": "/items/681.png"
  },
  {
    "id": 682,
    "name": "Worm Friend",
    "description": "• Sometimes bursts out of the ground and grabs an enemy\n• Grabbed enemies take 8 damage per second, are slowed and cannot move",
    "image": "/items/682.png"
  },
  {
    "id": 683,
    "name": "Bone Spurs",
    "description": "• Enemies spawn bone shards on death\n• Bones block projectiles and deal contact damage",
    "image": "/items/683.png"
  },
  {
    "id": 684,
    "name": "Hungry Soul",
    "description": "• Killing an enemy has a chance to spawn a ghost\n• Ghosts chase enemies, deal contact damage and explode after 5 seconds\n• Isaac doesn't take damage from the explosion",
    "image": "/items/684.png"
  },
  {
    "id": 685,
    "name": "Jar of Wisps",
    "description": "• Spawns a random wisp\n• Spawns one additional wisp with each use, up to 12",
    "image": "/items/685.png"
  },
  {
    "id": 686,
    "name": "Soul Locket",
    "description": "• ↑ Picking up Soul Heart Soul Hearts grants random permanent stat ups\n• Soul Heart Spawns a Soul Heart",
    "image": "/items/686.png"
  },
  {
    "id": 687,
    "name": "Friend Finder",
    "description": "• Friendly Spawns a random friendly monster that mimics Isaac's movements and attacks",
    "image": "/items/687.png"
  },
  {
    "id": 688,
    "name": "Inner Child",
    "description": "• +1 Life\n• Upon death:\n• Respawns Isaac in the same room with half a heart\n• ↑ Speed +0.2 Speed\n• ↑ Massive size down",
    "image": "/items/688.png"
  },
  {
    "id": 689,
    "name": "Glitched Crown",
    "description": "• Item pedestals quickly cycle between 5 random items",
    "image": "/items/689.png"
  },
  {
    "id": 690,
    "name": "Belly Jelly",
    "description": "• Enemies bounce off of Isaac\n• 50% chance to negate contact damage\n• 50% chance to deflect enemy projectiles",
    "image": "/items/690.png"
  },
  {
    "id": 691,
    "name": "Sacred Orb",
    "description": "• Prevents Quality Quality0/Quality1 items from spawning\n• Quality Quality2 items have a 33% chance to be rerolled",
    "image": "/items/691.png"
  },
  {
    "id": 692,
    "name": "Sanguine Bond",
    "description": "• Spawns a set of spikes in the Devil Room Devil Room\n• Taking damage on the spikes grants:\n• 35%: Nothing\n• 33%: ↑ Damage +0.5 Damage\n• 15%: 6 Coin pennies\n• 10%: 2 Black Heart Black Hearts\n• 5%: Devil Room Random Devil item\n• 2%: Leviathan transformation",
    "image": "/items/692.png"
  },
  {
    "id": 693,
    "name": "The Swarm",
    "description": "• Grants 8 orbital flies\n• Clearing a room spawns a new fly\n• Flies turn into blue flies after blocking a shot",
    "image": "/items/693.png"
  },
  {
    "id": 694,
    "name": "Heartbreak",
    "description": "• ↑ Damage +0.25 Damage for each Broken Heart\n• Broken Heart +3 Broken Hearts\n• Broken Heart Every fatal hit grants +2 Broken Hearts\n• Isaac dies at 12 Broken Hearts",
    "image": "/items/694.png"
  },
  {
    "id": 695,
    "name": "Bloody Gust",
    "description": "• When taking damage, receive for the floor:\n• ↑ Speed Speed up\n• ↑ Tears Fire rate up\n• Caps at +1.02 speed and +3 fire rate",
    "image": "/items/695.png"
  },
  {
    "id": 696,
    "name": "Salvation",
    "description": "• Isaac is surrounded by a halo\n• Enemies that stand in the halo for too long are hit by a cross-shaped beam of light\n• Taking damage increases the size of the halo for the floor",
    "image": "/items/696.png"
  },
  {
    "id": 697,
    "name": "Vanishing Twin",
    "description": "• Entering a boss room spawns a clone of the boss\n• Defeating the clone spawns an extra item\n• The clone is slower and has 75% health",
    "image": "/items/697.png"
  },
  {
    "id": 698,
    "name": "Twisted Pair",
    "description": "• Two familiars that shoot tears with the same stats and effects as Isaac\n• Damage They deal 37.5% of Isaac's damage",
    "image": "/items/698.png"
  },
  {
    "id": 699,
    "name": "Azazel's Rage",
    "description": "• Collectible118 Clearing 4 rooms fires a large Brimstone beam upon entering the next room",
    "image": "/items/699.png"
  },
  {
    "id": 700,
    "name": "Echo Chamber",
    "description": "• Using a Rune rune, Card card or Pill pill also uses a copy of the last 3 runes/cards/pills used after picking up Echo Chamber",
    "image": "/items/700.png"
  },
  {
    "id": 701,
    "name": "Isaac's Tomb",
    "description": "• Spawns an Dirty Chest Old Chest at the start of every floor\n• Old Chests require a key to unlock and can contain Soul Heart Soul Hearts, Trinket trinkets or Mom, Dad and Angel items",
    "image": "/items/701.png"
  },
  {
    "id": 702,
    "name": "Vengeful Spirit",
    "description": "• Taking damage spawns an orbital wisp\n• Wisps shoot tears, do not block shots and disappear on the next floor\n• Caps at 6 wisps",
    "image": "/items/702.png"
  },
  {
    "id": 703,
    "name": "Esau Jr.",
    "description": "• Swaps between the current character and Esau Jr.\n• Esau Jr. has Black Heart 3 Black Hearts, Damage +2 Damage, flight, and random items equal to the number of items the player has the first time this item is used\n• Characters have independent items and health\n• Warning Dying as either character ends the run",
    "image": "/items/703.png"
  },
  {
    "id": 704,
    "name": "Berserk!",
    "description": "• Battery Charges with damage dealt\n• Timer Receive for 5 seconds:\n• ↑ Speed +0.4 Speed\n• ↓ Tears x0.5 Fire rate multiplier\n• ↑ Tears +2 Fire rate\n• ↑ Damage +3 Damage\n• Restricts attacks to a melee that reflects shots\n• Timer Each kill increases the duration by 1 second and grants brief invincibility",
    "image": "/items/704.png"
  },
  {
    "id": 705,
    "name": "Dark Arts",
    "description": "• Timer Receive for 1 second (or until shooting):↑ Speed +1 Speed\n• Isaac can pass through enemies/projectiles and paralyzes them\n• When the effect ends, damages paralyzed enemies, removes paralyzed projectiles and creates a blast at Isaac's location\n• The attacks and blast are more powerful the more enemies/projectiles have been hit",
    "image": "/items/705.png"
  },
  {
    "id": 706,
    "name": "Abyss",
    "description": "• Consumes all item pedestals in the room and spawns a locust familiar for each one\n• Locusts deal Isaac's damage 2-3 times an attack\n• Some items spawn a special locust when consumed",
    "image": "/items/706.png"
  },
  {
    "id": 707,
    "name": "Supper",
    "description": "• ↑ Heart +1 Health\n• Healing Red Heals 1 heart",
    "image": "/items/707.png"
  },
  {
    "id": 708,
    "name": "Stapler",
    "description": "• ↑ Damage +1 Damage\n• All of Isaac's tears are shot from the right eye",
    "image": "/items/708.png"
  },
  {
    "id": 709,
    "name": "Suplex!",
    "description": "• Isaac dashes in the direction he moves\n• Dashing into an enemy or boss picks it up and slams it into the ground\n• Slam deals damage and spawns rock waves based on Isaac's size\n• You're invincible during the dash and slam",
    "image": "/items/709.png"
  },
  {
    "id": 710,
    "name": "Bag of Crafting",
    "description": "• Collects up to 8 pickups which cannot be dropped\n• Using the item with 8 pickups in the bag crafts an item\n• Item quality is based on the quality of the pickups",
    "image": "/items/710.png"
  },
  {
    "id": 711,
    "name": "Flip",
    "description": "• Entering a room with item pedestals displays a ghostly second item on the pedestals\n• Using the item flips the real and ghostly item\n• Using Flip after taking the first item allows Isaac to pick up the other item\n• Warning Ghostly items alone on pedestals disappear after leaving the room",
    "image": "/items/711.png"
  },
  {
    "id": 712,
    "name": "Lemegeton",
    "description": "• Spawns an orbital that grants a random item's effect\n• The items have a 25% chance to be from the current room's item pool and 75% chance to be from the Treasure, Boss or Shop pools",
    "image": "/items/712.png"
  },
  {
    "id": 713,
    "name": "Sumptorium",
    "description": "• Removes half a heart and creates a clot\n• Clots copy Isaac's tears\n• Each type of heart generates a clot with different HP, damage and tear effect",
    "image": "/items/713.png"
  },
  {
    "id": 714,
    "name": "Recall",
    "description": "• Retrieves the Forgotten's body from any distance\n• The Soul is invincible while the Forgotten is returning",
    "image": "/items/714.png"
  },
  {
    "id": 715,
    "name": "Hold",
    "description": "• Using the item when empty stores the next poop inside\n• Using the item with a poop inside uses that poop",
    "image": "/items/715.png"
  },
  {
    "id": 716,
    "name": "Keeper's Sack",
    "description": "• Spawns 3 Coin coins and 1 Key key\n• Shop Spending 3 coins grants either:\n• ↑ Speed +0.03 Speed\n• ↑ Damage +0.5 Damage\n• ↑ Range +0.25 Range",
    "image": "/items/716.png"
  },
  {
    "id": 717,
    "name": "Keeper's Kin",
    "description": "• Rocks and other obstacles spawn 2 blue spiders when destroyed\n• Rocks can occasionally spawn blue spiders in hostile rooms",
    "image": "/items/717.png"
  },
  {
    "id": 718,
    "name": "Item 718",
    "description": "Collectible item",
    "image": "/items/718.png"
  },
  {
    "id": 719,
    "name": "Keeper's Box",
    "description": "• Shop Spawns a random Shop item/pickup to be purchased",
    "image": "/items/719.png"
  },
  {
    "id": 720,
    "name": "Everything Jar",
    "description": "• Spawns pickups based on the number of charges\n• Charge Rewards:\n• Blank 1:Poop Pickup 2:Coin 3:Bomb 4:Key\n• Blank 5:Heart 6:Pill 7:Card 8:Soul Heart\n• Blank 9:Golden Heart 10:Golden Key 11:Golden Bomb\n• Blank Triggers a powerful random effect at 12 charges",
    "image": "/items/720.png"
  },
  {
    "id": 721,
    "name": "TMTRAINER",
    "description": "• Causes all future items to be glitched\n• Glitched items have completely random effects",
    "image": "/items/721.png"
  },
  {
    "id": 722,
    "name": "Anima Sola",
    "description": "• Chained Chains down the nearest enemy for 5 seconds\n• Chained enemies cannot move or attack",
    "image": "/items/722.png"
  },
  {
    "id": 723,
    "name": "Spindown Dice",
    "description": "• Rerolls all items in the room by decreasing their internal ID by one",
    "image": "/items/723.png"
  },
  {
    "id": 724,
    "name": "Hypercoagulation",
    "description": "• Heart Taking damage drops a half or full Red Heart depending on how much Isaac lost\n• The hearts launch out and despawn after 1.5 seconds",
    "image": "/items/724.png"
  },
  {
    "id": 725,
    "name": "IBS",
    "description": "• Dealing enough damage causes Isaac to flash red\n• Releasing the fire button while Isaac is flashing either:\n• Throws a random poop\n• Creates buffing creep\n• Poison Farts a poison cloud\n• Spawns 5 live bombs",
    "image": "/items/725.png"
  },
  {
    "id": 726,
    "name": "Hemoptysis",
    "description": "• Double-tapping a fire button makes Isaac sneeze blood\n• The sneeze deals 1.5x Isaac's damage\n• 1 second cooldown\n• Brimstone Curse Affected enemies take extra damage from Brimstone beams",
    "image": "/items/726.png"
  },
  {
    "id": 727,
    "name": "Ghost Bombs",
    "description": "• Bomb +5 Bombs\n• Isaac's bombs spawn ghosts that chase enemies\n• Ghosts deal 2x Isaac's damage per second and explode after 10 seconds",
    "image": "/items/727.png"
  },
  {
    "id": 728,
    "name": "Gello",
    "description": "• A demon familiar bursts out of Isaac for the room\n• The demon shoots towards the nearest enemy, mimicing Isaac's tears, stats and effects\n• Damage Its tears deal 75% of Isaac's damage",
    "image": "/items/728.png"
  },
  {
    "id": 729,
    "name": "Decap Attack",
    "description": "• Throws Isaac's head in a direction\n• The head deals contact damage and shoots tears from where it lands\n• Using the item again or stepping on the head reattaches it",
    "image": "/items/729.png"
  },
  {
    "id": 730,
    "name": "Glass Eye",
    "description": "• ↑ Damage +0.75 Damage\n• ↑ Luck +1 Luck",
    "image": "/items/730.png"
  },
  {
    "id": 731,
    "name": "Stye",
    "description": "• ↑ Damage x1.28 Damage multiplier for the right eye\n• ↑ Range +6.5 Range for the right eye\n• ↓ Shotspeed -0.3 Shot speed for the right eye",
    "image": "/items/731.png"
  },
  {
    "id": 732,
    "name": "Mom's Ring",
    "description": "• ↑ Damage +1 Damage\n• Rune Spawns a random rune or soul stone",
    "image": "/items/732.png"
  }
];
export const trinkets = [
  {
    "id": 1,
    "name": "Swallowed Penny",
    "description": "• Coin Taking damage spawns 1 coin",
    "image": "/trinkets/1.png"
  },
  {
    "id": 2,
    "name": "Petrified Poop",
    "description": "• 50% chance to get drops from poop",
    "image": "/trinkets/2.png"
  },
  {
    "id": 3,
    "name": "AAA Battery",
    "description": "• Battery -1 Charge needed for active items",
    "image": "/trinkets/3.png"
  },
  {
    "id": 4,
    "name": "Broken Remote",
    "description": "• Collectible44 Using an active item teleports Isaac to a random room",
    "image": "/trinkets/4.png"
  },
  {
    "id": 5,
    "name": "Purple Heart",
    "description": "• 2x chance for champion enemies",
    "image": "/trinkets/5.png"
  },
  {
    "id": 6,
    "name": "Broken Magnet",
    "description": "• Coin Attracts coins to Isaac",
    "image": "/trinkets/6.png"
  },
  {
    "id": 7,
    "name": "Rosary Bead",
    "description": "• Angel Chance 50% higher Angel Room chance\n• Collectible33 Higher chance to find The Bible in Shop Shops and Library Libraries",
    "image": "/trinkets/7.png"
  },
  {
    "id": 8,
    "name": "Cartridge",
    "description": "• Timer 5% chance upon taking damage to receive for 6.5 seconds:\n• Invincibility\n• Isaac can't shoot but deals 40 contact damage per second\n• Healing Red Killing 2 enemies heals half a heart\n• Fear Fears all enemies in the room",
    "image": "/trinkets/8.png"
  },
  {
    "id": 9,
    "name": "Pulse Worm",
    "description": "• Isaac's tears pulsate\n• Affects tear hitbox",
    "image": "/trinkets/9.png"
  },
  {
    "id": 10,
    "name": "Wiggle Worm",
    "description": "• ↑ Tears +0.4 Tears\n• Spectral tears\n• Isaac's tears move in waves",
    "image": "/trinkets/10.png"
  },
  {
    "id": 11,
    "name": "Ring Worm",
    "description": "• ↑ Tears +0.47 Tears\n• Spectral tears\n• Isaac's tears move in spirals with high speed",
    "image": "/trinkets/11.png"
  },
  {
    "id": 12,
    "name": "Flat Worm",
    "description": "• 50% wider tears\n• Increases knockback",
    "image": "/trinkets/12.png"
  },
  {
    "id": 13,
    "name": "Store Credit",
    "description": "• Shop Allows Isaac to take 1 Shop item for free",
    "image": "/trinkets/13.png"
  },
  {
    "id": 14,
    "name": "Callus",
    "description": "• Immune to creep and floor spikes",
    "image": "/trinkets/14.png"
  },
  {
    "id": 15,
    "name": "Lucky Rock",
    "description": "• Coin Destroying rocks has a 33% chance to spawn a coin",
    "image": "/trinkets/15.png"
  },
  {
    "id": 16,
    "name": "Mom's Toenail",
    "description": "• Mom's Foot stomps a random spot in the room every 20 seconds",
    "image": "/trinkets/16.png"
  },
  {
    "id": 17,
    "name": "Black Lipstick",
    "description": "• Black Heart +10% chance for random Soul Hearts to spawn as Black Hearts",
    "image": "/trinkets/17.png"
  },
  {
    "id": 18,
    "name": "Bible Tract",
    "description": "• Eternal Heart +3% chance for Eternal Hearts",
    "image": "/trinkets/18.png"
  },
  {
    "id": 19,
    "name": "Paper Clip",
    "description": "• Golden Chest Gold chests can be opened for free",
    "image": "/trinkets/19.png"
  },
  {
    "id": 20,
    "name": "Monkey Paw",
    "description": "• Black Heart Spawns 1 Black Heart when Isaac's health is damaged down to half a heart\n• Warning Disappears after spawning 3 Black Hearts",
    "image": "/trinkets/20.png"
  },
  {
    "id": 21,
    "name": "Mysterious Paper",
    "description": "• Randomly grants the effect of: \n• Collectible327 The Polaroid\n• Collectible328 The Negative\n• Trinket48 A Missing Page\n• Trinket23 Missing Poster",
    "image": "/trinkets/21.png"
  },
  {
    "id": 22,
    "name": "Daemon's Tail",
    "description": "• Heart Decreases spawn rate of hearts to 20%\n• Black Heart All Heart pickups turn into Black Hearts\n• Key Increases the drop chance of keys",
    "image": "/trinkets/22.png"
  },
  {
    "id": 23,
    "name": "Missing Poster",
    "description": "• Player10 Respawn as The Lost on death",
    "image": "/trinkets/23.png"
  },
  {
    "id": 24,
    "name": "Butt Penny",
    "description": "• Coin 20% higher chance for coins to spawn from poop\n• Poison Picking up coins makes Isaac fart, which poisons and knocks back enemies and projectiles",
    "image": "/trinkets/24.png"
  },
  {
    "id": 25,
    "name": "Mysterious Candy",
    "description": "• Isaac farts or spawns poop every 30 seconds",
    "image": "/trinkets/25.png"
  },
  {
    "id": 26,
    "name": "Hook Worm",
    "description": "• ↑ Tears +0.4 Tears\n• ↑ Range +1.5 Range\n• Spectral tears\n• Isaac's tears move in angular patterns",
    "image": "/trinkets/26.png"
  },
  {
    "id": 27,
    "name": "Whip Worm",
    "description": "• ↑ Shotspeed +0.5 Shot speed",
    "image": "/trinkets/27.png"
  },
  {
    "id": 28,
    "name": "Broken Ankh",
    "description": "• Player4 22% chance to respawn as ??? (Blue Baby) on death",
    "image": "/trinkets/28.png"
  },
  {
    "id": 29,
    "name": "Fish Head",
    "description": "• Taking damage spawns 1 blue fly",
    "image": "/trinkets/29.png"
  },
  {
    "id": 30,
    "name": "Pinky Eye",
    "description": "• Poison 10% chance to shoot poison tears\n• Luck 100% chance at 18 luck",
    "image": "/trinkets/30.png"
  },
  {
    "id": 31,
    "name": "Push Pin",
    "description": "• 10% chance to shoot piercing + spectral tears\n• Luck 100% chance at 18 luck",
    "image": "/trinkets/31.png"
  },
  {
    "id": 32,
    "name": "Liberty Cap",
    "description": "• 25% chance for a random mushroom effect per room",
    "image": "/trinkets/32.png"
  },
  {
    "id": 33,
    "name": "Umbilical Cord",
    "description": "• Half Heart Having half a Red Heart or less grants Collectible100 Little Steven\n• Collectible318 Taking damage has a high chance to spawn a Gemini familiar for the room",
    "image": "/trinkets/33.png"
  },
  {
    "id": 34,
    "name": "Child's Heart",
    "description": "• Unknown Heart 10% chance for the room clear reward to be a random heart\n• Heart 33% chance for a bonus heart from chests, tinted rocks, and destroyed machines",
    "image": "/trinkets/34.png"
  },
  {
    "id": 35,
    "name": "Curved Horn",
    "description": "• ↑ Damage +2 Damage",
    "image": "/trinkets/35.png"
  },
  {
    "id": 36,
    "name": "Rusted Key",
    "description": "• Key 10% chance for the room clear reward to be a key\n• Key 33% chance for a bonus key from chests, tinted rocks, and destroyed machines",
    "image": "/trinkets/36.png"
  },
  {
    "id": 37,
    "name": "Goat Hoof",
    "description": "• ↑ Speed +0.15 Speed",
    "image": "/trinkets/37.png"
  },
  {
    "id": 38,
    "name": "Mom's Pearl",
    "description": "• +10% chance for heart drops to be Soul Heart Soul Hearts, Black Heart Black Hearts or Empty Bone Heart Bone Hearts",
    "image": "/trinkets/38.png"
  },
  {
    "id": 39,
    "name": "Cancer",
    "description": "• ↑ Tears +1 Fire rate",
    "image": "/trinkets/39.png"
  },
  {
    "id": 40,
    "name": "Red Patch",
    "description": "• Timer Taking damage has a 20% chance to grant ↑ Damage +1.8 damage for the room\n• Luck 100% chance at 8 luck",
    "image": "/trinkets/40.png"
  },
  {
    "id": 41,
    "name": "Match Stick",
    "description": "• Bomb 10% chance for the room clear reward to be a bomb\n• Bomb 33% chance for a bonus bomb from chests, tinted rocks, and destroyed machines\n• Warning Removes Trinket53 Tick",
    "image": "/trinkets/41.png"
  },
  {
    "id": 42,
    "name": "Lucky Toe",
    "description": "• ↑ Luck +1 Luck\n• +8% room clear reward chance\n• 33% chance for an extra pickup from chests, tinted rocks, and destroyed machines",
    "image": "/trinkets/42.png"
  },
  {
    "id": 43,
    "name": "Cursed Skull",
    "description": "• When damaged down to half a heart or less, Isaac is teleported to a random room",
    "image": "/trinkets/43.png"
  },
  {
    "id": 44,
    "name": "Safety Cap",
    "description": "• Pill 10% chance for the room clear reward to be a pill\n• Pill 33% chance for a bonus pill from chests, tinted rocks, and destroyed machines",
    "image": "/trinkets/44.png"
  },
  {
    "id": 45,
    "name": "Ace of Spades",
    "description": "• Card 10% chance for the room clear reward to be a card\n• Card 33% chance for a bonus card from chests, tinted rocks, and destroyed machines",
    "image": "/trinkets/45.png"
  },
  {
    "id": 46,
    "name": "Isaac's Fork",
    "description": "• Healing Red Clearing a room has a 10% chance to heal half a heart\n• Luck 100% chance at 18 luck",
    "image": "/trinkets/46.png"
  },
  {
    "id": 47,
    "name": "Trinket 47",
    "description": "Trinket item",
    "image": "/trinkets/47.png"
  },
  {
    "id": 48,
    "name": "A Missing Page",
    "description": "• Taking damage has a 5% chance to deal 80 damage to all enemies in the room\n• Collectible35 Black Hearts and Necronomicon-like effects deal double damage",
    "image": "/trinkets/48.png"
  },
  {
    "id": 49,
    "name": "Bloody Penny",
    "description": "• Half Heart Picking up a coin has a 25% chance to spawn a half Red Heart\n• Higher chance from nickels and dimes",
    "image": "/trinkets/49.png"
  },
  {
    "id": 50,
    "name": "Burnt Penny",
    "description": "• Bomb Picking up a coin has a 25% chance to spawn a bomb\n• Higher chance from nickels and dimes",
    "image": "/trinkets/50.png"
  },
  {
    "id": 51,
    "name": "Flat Penny",
    "description": "• Key Picking up a coin has a 25% chance to spawn a key\n• Higher chance from nickels and dimes",
    "image": "/trinkets/51.png"
  },
  {
    "id": 52,
    "name": "Counterfeit Penny",
    "description": "• Coin Picking up a coin has a 50% chance to add another coin to the counter",
    "image": "/trinkets/52.png"
  },
  {
    "id": 53,
    "name": "Tick",
    "description": "• Healing Red Heals 1 heart when entering a Boss Room Boss Room\n• -15% boss health\n• Warning Once picked up, it can't be removed\n• Only removeable with Trinket41 Match Stick or gulping",
    "image": "/trinkets/53.png"
  },
  {
    "id": 54,
    "name": "Isaac's Head",
    "description": "• Familiar with piercing tears\n• Deals 3.5 damage per tear",
    "image": "/trinkets/54.png"
  },
  {
    "id": 55,
    "name": "Maggy's Faith",
    "description": "• Eternal Heart Entering a new floor grants +1 Eternal Heart",
    "image": "/trinkets/55.png"
  },
  {
    "id": 56,
    "name": "Judas' Tongue",
    "description": "• Devil Room Reduces all devil deal prices to 1 heart container\n• Doesn't reduce 3 Soul Heart prices",
    "image": "/trinkets/56.png"
  },
  {
    "id": 57,
    "name": "???'s Soul",
    "description": "• Familiar that bounces around the room\n• Shoots in the same direction as Isaac\n• Deals 3.5 damage per tear",
    "image": "/trinkets/57.png"
  },
  {
    "id": 58,
    "name": "Samson's Lock",
    "description": "• Timer Killing an enemy has a 6.66% chance to grant ↑ Damage +0.5 damage for the room\n• Luck 100% chance at 10 luck",
    "image": "/trinkets/58.png"
  },
  {
    "id": 59,
    "name": "Cain's Eye",
    "description": "• Entering a new floor has a 25% chance to reveal map icons\n• Luck 100% chance at 3 luck",
    "image": "/trinkets/59.png"
  },
  {
    "id": 60,
    "name": "Eve's Bird Foot",
    "description": "• Collectible117 Killing an enemy has a 5% chance to spawn a Dead Bird\n• Luck 100% chance at 8 luck",
    "image": "/trinkets/60.png"
  },
  {
    "id": 61,
    "name": "The Left Hand",
    "description": "• Red Chest Turns all chests into Red Chests",
    "image": "/trinkets/61.png"
  },
  {
    "id": 62,
    "name": "Shiny Rock",
    "description": "• Crawlspace rocks and tinted rocks blink every 10 seconds",
    "image": "/trinkets/62.png"
  },
  {
    "id": 63,
    "name": "Safety Scissors",
    "description": "• Bomb Turns Troll Bombs into bomb pickups",
    "image": "/trinkets/63.png"
  },
  {
    "id": 64,
    "name": "Rainbow Worm",
    "description": "• Grants a random worm effect every 3 seconds",
    "image": "/trinkets/64.png"
  },
  {
    "id": 65,
    "name": "Tape Worm",
    "description": "• ↑ Range +3 Range",
    "image": "/trinkets/65.png"
  },
  {
    "id": 66,
    "name": "Lazy Worm",
    "description": "• ↓ Shotspeed -0.5 Shot speed",
    "image": "/trinkets/66.png"
  },
  {
    "id": 67,
    "name": "Cracked Dice",
    "description": "• Taking damage has a 50% chance to trigger one of these effects:\n• Collectible105 D6\n• Collectible406 D8\n• Collectible285 D10\n• Collectible386 D12\n• Collectible166 D20",
    "image": "/trinkets/67.png"
  },
  {
    "id": 68,
    "name": "Super Magnet",
    "description": "• Isaac attracts pickups and enemies",
    "image": "/trinkets/68.png"
  },
  {
    "id": 69,
    "name": "Faded Polaroid",
    "description": "• Randomly camouflages Isaac\n• Confusion Confuses enemies\n• Can be used to open the \"Strange Door\" in \"Depths II\"",
    "image": "/trinkets/69.png"
  },
  {
    "id": 70,
    "name": "Louse",
    "description": "• Occasionally spawns a blue spider in hostile rooms",
    "image": "/trinkets/70.png"
  },
  {
    "id": 71,
    "name": "Bob's Bladder",
    "description": "• Isaac's bombs leave damaging creep",
    "image": "/trinkets/71.png"
  },
  {
    "id": 72,
    "name": "Watch Battery",
    "description": "• Battery 6.66% chance for the room clear reward to be a battery\n• Battery +10% chance for random pickups to be a battery\n• Battery 5% chance to add 1 charge to held active item when clearing a room",
    "image": "/trinkets/72.png"
  },
  {
    "id": 73,
    "name": "Blasting Cap",
    "description": "• Bomb 10% chance for exploding bombs to drop a bomb pickup",
    "image": "/trinkets/73.png"
  },
  {
    "id": 74,
    "name": "Stud Finder",
    "description": "• Ladder Room 0.5% chance to reveal a crawlspace when breaking a rock",
    "image": "/trinkets/74.png"
  },
  {
    "id": 75,
    "name": "Error",
    "description": "• Grants a random trinket effect every room",
    "image": "/trinkets/75.png"
  },
  {
    "id": 76,
    "name": "Poker Chip",
    "description": "• ↑ 50% chance for chests to spawn extra pickups\n• ↓ 50% chance for chests to contain a single fly",
    "image": "/trinkets/76.png"
  },
  {
    "id": 77,
    "name": "Blister",
    "description": "• Increases knockback",
    "image": "/trinkets/77.png"
  },
  {
    "id": 78,
    "name": "Second Hand",
    "description": "• Status effects applied to enemies last twice as long",
    "image": "/trinkets/78.png"
  },
  {
    "id": 79,
    "name": "Endless Nameless",
    "description": "• Using a Rune rune, Card card or Pill pill has a 25% chance to spawn a copy of that rune, card or pill",
    "image": "/trinkets/79.png"
  },
  {
    "id": 80,
    "name": "Black Feather",
    "description": "• ↑ Damage +0.5 Damage for each \"Evil up\" item held",
    "image": "/trinkets/80.png"
  },
  {
    "id": 81,
    "name": "Blind Rage",
    "description": "• Invincibility frames after taking damage last twice as long",
    "image": "/trinkets/81.png"
  },
  {
    "id": 82,
    "name": "Golden Horse Shoe",
    "description": "• Treasure Room Future Treasure Rooms have +15% chance to let Isaac choose between two items",
    "image": "/trinkets/82.png"
  },
  {
    "id": 83,
    "name": "Store Key",
    "description": "• Shop Lets Isaac open Shops for free",
    "image": "/trinkets/83.png"
  },
  {
    "id": 84,
    "name": "Rib of Greed",
    "description": "• Coin 5% more coins and fewer hearts from room clear rewards\n• Greed and Super Greed no longer appear in Shop Shops or Secret Room Secret Rooms",
    "image": "/trinkets/84.png"
  },
  {
    "id": 85,
    "name": "Karma",
    "description": "• Donation Machine Using a Donation Machine has a 33% chance to:\n• Healing Red Heal 1 heart (40%)\n• Coin Give 1 coin (40%)\n• Luck Grant +1 luck (15%)\n• Beggar Spawn a Beggar (5%)",
    "image": "/trinkets/85.png"
  },
  {
    "id": 86,
    "name": "Lil Larva",
    "description": "• Destroying poop spawns 1 blue fly",
    "image": "/trinkets/86.png"
  },
  {
    "id": 87,
    "name": "Mom's Locket",
    "description": "• Healing Red Using a key heals half a heart\n• Heart Turns half hearts into full hearts",
    "image": "/trinkets/87.png"
  },
  {
    "id": 88,
    "name": "NO!",
    "description": "• Prevents active items from spawning",
    "image": "/trinkets/88.png"
  },
  {
    "id": 89,
    "name": "Child Leash",
    "description": "• Familiars stay closer to Isaac",
    "image": "/trinkets/89.png"
  },
  {
    "id": 90,
    "name": "Brown Cap",
    "description": "• Poop explodes for 100 damage when destroyed",
    "image": "/trinkets/90.png"
  },
  {
    "id": 91,
    "name": "Meconium",
    "description": "• 33% chance for Black Poops to spawn\n• Black Heart Destroying Black Poop has a 5% chance to spawn a Black Heart",
    "image": "/trinkets/91.png"
  },
  {
    "id": 92,
    "name": "Cracked Crown",
    "description": "• ↑ x1.33 Stat multiplier (except fire rate) for the stats that are above 1 Speed speed, 2.73 Tears tears, 3.5 Damage damage, 6.5 Range range, 1 Shotspeed shot speed",
    "image": "/trinkets/92.png"
  },
  {
    "id": 93,
    "name": "Used Diaper",
    "description": "• 15% chance per room for all fly enemies to become friendly",
    "image": "/trinkets/93.png"
  },
  {
    "id": 94,
    "name": "Fish Tail",
    "description": "• Doubles all blue fly / spider spawns",
    "image": "/trinkets/94.png"
  },
  {
    "id": 95,
    "name": "Black Tooth",
    "description": "• Poison 3% chance to shoot poison tooth tears\n• The tooth deals 2x Isaac's damage",
    "image": "/trinkets/95.png"
  },
  {
    "id": 96,
    "name": "Ouroboros Worm",
    "description": "• ↑ +0.4 Tears\n• ↑ Range +1.5 Range\n• Spectral tears\n• Chance for homing tears\n• Luck 100% chance at 9 luck\n• Isaac's tears move quickly in a spiral pattern",
    "image": "/trinkets/96.png"
  },
  {
    "id": 97,
    "name": "Tonsil",
    "description": "• Taking damage 12-20 times spawns a projectile blocking familiar\n• Disappears after spawning 2 familiars",
    "image": "/trinkets/97.png"
  },
  {
    "id": 98,
    "name": "Nose Goblin",
    "description": "• 10% chance to shoot a sticky tear\n• 50% chance for it to be homing\n• Damage Boogers deal Isaac's damage once per second\n• Boogers stick for 10 seconds",
    "image": "/trinkets/98.png"
  },
  {
    "id": 99,
    "name": "Super Ball",
    "description": "• 10% chance to shoot bouncing tears",
    "image": "/trinkets/99.png"
  },
  {
    "id": 100,
    "name": "Vibrant Bulb",
    "description": "• Holding a fully charged active item grants:\n• ↑ Speed +0.25 Speed\n• ↑ Tears +0.2 Tears\n• ↑ Damage +0.5 Damage\n• ↑ Range +0.75 Range\n• ↑ Shotspeed +0.1 Shot speed\n• ↑ Luck +1 Luck",
    "image": "/trinkets/100.png"
  },
  {
    "id": 101,
    "name": "Dim Bulb",
    "description": "• Holding a completely uncharged active item grants:\n• ↑ Speed +0.5 Speed\n• ↑ Tears +0.5 Tears\n• ↑ Damage +1.5 Damage\n• ↑ Range +1.5 Range\n• ↑ Shotspeed +0.3 Shot speed\n• ↑ Luck +2 Luck",
    "image": "/trinkets/101.png"
  },
  {
    "id": 102,
    "name": "Fragmented Card",
    "description": "• Secret Room +1 extra Secret Room per floor while held",
    "image": "/trinkets/102.png"
  },
  {
    "id": 103,
    "name": "Equality!",
    "description": "• Turns single pickups into double pickups when Isaac's Coin coin, Bomb bomb and Key key counts are equal",
    "image": "/trinkets/103.png"
  },
  {
    "id": 104,
    "name": "Wish Bone",
    "description": "• 2% chance to get destroyed and spawn a pedestal item when hit",
    "image": "/trinkets/104.png"
  },
  {
    "id": 105,
    "name": "Bag Lunch",
    "description": "• Collectible22 2% chance to get destroyed and spawn Lunch when hit",
    "image": "/trinkets/105.png"
  },
  {
    "id": 106,
    "name": "Lost Cork",
    "description": "• Increases the radius of friendly creep",
    "image": "/trinkets/106.png"
  },
  {
    "id": 107,
    "name": "Crow Heart",
    "description": "• Taking damage depletes Red Hearts before Soul/Black Hearts\n• Warning Taking Red Heart damage will reduce Devil/Angel Room chance",
    "image": "/trinkets/107.png"
  },
  {
    "id": 108,
    "name": "Walnut",
    "description": "• Getting hit by 1-9 explosions destroys the trinket and drops a random Unknown Heart heart, Coin coin, Key key and Trinket trinket\n• Taking damage isn't required",
    "image": "/trinkets/108.png"
  },
  {
    "id": 109,
    "name": "Duct Tape",
    "description": "• Familiars are stuck in place relative to Isaac's position",
    "image": "/trinkets/109.png"
  },
  {
    "id": 110,
    "name": "Silver Dollar",
    "description": "• Shop Shops appear in the Womb and Corpse",
    "image": "/trinkets/110.png"
  },
  {
    "id": 111,
    "name": "Bloody Crown",
    "description": "• Treasure Room Treasure Rooms appear in the Womb and Corpse",
    "image": "/trinkets/111.png"
  },
  {
    "id": 112,
    "name": "Pay To Win",
    "description": "• Restock Machine Restock boxes always spawn in Treasure Room Treasure Rooms",
    "image": "/trinkets/112.png"
  },
  {
    "id": 113,
    "name": "Locust of War",
    "description": "• Entering a hostile room spawns an exploding attack fly \n• The fly deals 2x Isaac's damage + explosion damage",
    "image": "/trinkets/113.png"
  },
  {
    "id": 114,
    "name": "Locust of Pestilence",
    "description": "• Poison Entering a hostile room spawns a poison attack fly\n• The fly deals 2x Isaac's damage",
    "image": "/trinkets/114.png"
  },
  {
    "id": 115,
    "name": "Locust of Famine",
    "description": "• Slow Entering a hostile room spawns a slowing attack fly\n• The fly deals 2x Isaac's damage",
    "image": "/trinkets/115.png"
  },
  {
    "id": 116,
    "name": "Locust of Death",
    "description": "• Entering a hostile room spawns an attack fly\n• The fly deals 4x Isaac's damage",
    "image": "/trinkets/116.png"
  },
  {
    "id": 117,
    "name": "Locust of Conquest",
    "description": "• Entering a hostile room spawns 1-4 attack flies\n• Each fly deals 2x Isaac's damage",
    "image": "/trinkets/117.png"
  },
  {
    "id": 118,
    "name": "Bat Wing",
    "description": "• Timer Killing an enemy has a 5% chance to grant flight for the room",
    "image": "/trinkets/118.png"
  },
  {
    "id": 119,
    "name": "Stem Cell",
    "description": "• Healing Red Entering a new floor heals half of Isaac's empty Red/Bone Hearts\n• Healing Red Heals half a heart minimum",
    "image": "/trinkets/119.png"
  },
  {
    "id": 120,
    "name": "Hairpin",
    "description": "• Battery Entering an uncleared boss room fully recharges active items",
    "image": "/trinkets/120.png"
  },
  {
    "id": 121,
    "name": "Wooden Cross",
    "description": "• Collectible313 Grants a Holy shield that prevents damage once per floor",
    "image": "/trinkets/121.png"
  },
  {
    "id": 122,
    "name": "Butter!",
    "description": "• Using an active item drops it on a pedestal on the ground\n• Taking damage has a 2% chance to drop one of Isaac's passive items",
    "image": "/trinkets/122.png"
  },
  {
    "id": 123,
    "name": "Filigree Feather",
    "description": "• Angel bosses drop angel items instead of Key Pieces",
    "image": "/trinkets/123.png"
  },
  {
    "id": 124,
    "name": "Door Stop",
    "description": "• The last door used stays open",
    "image": "/trinkets/124.png"
  },
  {
    "id": 125,
    "name": "Extension Cord",
    "description": "• Connects all familiars with beams of electricity\n• The beams deal 6 damage",
    "image": "/trinkets/125.png"
  },
  {
    "id": 126,
    "name": "Rotten Penny",
    "description": "• Picking up a coin spawns a blue fly",
    "image": "/trinkets/126.png"
  },
  {
    "id": 127,
    "name": "Baby-Bender",
    "description": "• Grants all familiars homing shots",
    "image": "/trinkets/127.png"
  },
  {
    "id": 128,
    "name": "Finger Bone",
    "description": "• Empty Bone Heart Taking damage has a 4% chance to grant a Bone Heart",
    "image": "/trinkets/128.png"
  },
  {
    "id": 129,
    "name": "Jawbreaker",
    "description": "• Damage 10% chance to shoot teeth that deal 3.2x Isaac's damage\n• Luck 100% chance at 9 luck",
    "image": "/trinkets/129.png"
  },
  {
    "id": 130,
    "name": "Chewed Pen",
    "description": "• Slow 10% chance to shoot slowing tears\n• Luck 100% chance at 18 luck",
    "image": "/trinkets/130.png"
  },
  {
    "id": 131,
    "name": "Blessed Penny",
    "description": "• Half Soul Heart Picking up a coin has a 17% chance to spawn a half Soul Heart\n• Higher chance from nickels and dimes",
    "image": "/trinkets/131.png"
  },
  {
    "id": 132,
    "name": "Broken Syringe",
    "description": "• 25% chance to get a random syringe effect each room",
    "image": "/trinkets/132.png"
  },
  {
    "id": 133,
    "name": "Short Fuse",
    "description": "• Isaac's bombs explode faster",
    "image": "/trinkets/133.png"
  },
  {
    "id": 134,
    "name": "Gigante Bean",
    "description": "• Increases fart size",
    "image": "/trinkets/134.png"
  },
  {
    "id": 135,
    "name": "A Lighter",
    "description": "• Burning Entering a room has a 20% chance to burn random enemies",
    "image": "/trinkets/135.png"
  },
  {
    "id": 136,
    "name": "Broken Padlock",
    "description": "• Doors, key blocks and golden chests can be opened with explosions\n• Explosions can also open the \"Strange Door\" in \"Depths II\"",
    "image": "/trinkets/136.png"
  },
  {
    "id": 137,
    "name": "Myosotis",
    "description": "• Entering a new floor spawns up to 4 uncollected pickups from the previous floor in the starting room",
    "image": "/trinkets/137.png"
  },
  {
    "id": 138,
    "name": "'M",
    "description": "• Using an active item rerolls it",
    "image": "/trinkets/138.png"
  },
  {
    "id": 139,
    "name": "Teardrop Charm",
    "description": "• Luck +4 Luck towards luck-based tear effects",
    "image": "/trinkets/139.png"
  },
  {
    "id": 140,
    "name": "Apple of Sodom",
    "description": "• Picking up Red Hearts can convert them into blue spiders\n• Works even while at full health\n• Effect may consume hearts needed for healing",
    "image": "/trinkets/140.png"
  },
  {
    "id": 141,
    "name": "Forgotten Lullaby",
    "description": "• 2x Fire rate for familiars",
    "image": "/trinkets/141.png"
  },
  {
    "id": 142,
    "name": "Beth's Faith",
    "description": "• Collectible584 Entering a new floor spawns 4 Book of Virtues wisps",
    "image": "/trinkets/142.png"
  },
  {
    "id": 143,
    "name": "Old Capacitor",
    "description": "• Battery Prevents active item from charging by clearing a room\n• Battery Clearing a room has a 20% chance to spawn a battery\n• Luck 33% chance at 5 luck",
    "image": "/trinkets/143.png"
  },
  {
    "id": 144,
    "name": "Brain Worm",
    "description": "• Tears turn 90 degrees to target enemies that they may have missed",
    "image": "/trinkets/144.png"
  },
  {
    "id": 145,
    "name": "Perfection",
    "description": "• ↑ Luck +10 Luck up\n• Taking damage destroys the trinket",
    "image": "/trinkets/145.png"
  },
  {
    "id": 146,
    "name": "Devil's Crown",
    "description": "• Red Treasure Room Treasure Room items are replaced with devil deals",
    "image": "/trinkets/146.png"
  },
  {
    "id": 147,
    "name": "Charged Penny",
    "description": "• Battery Picking up a coin has a 17% chance to add 1 charge to the active item\n• Higher chance from nickels and dimes",
    "image": "/trinkets/147.png"
  },
  {
    "id": 148,
    "name": "Friendship Necklace",
    "description": "• All familiars orbit around Isaac",
    "image": "/trinkets/148.png"
  },
  {
    "id": 149,
    "name": "Panic Button",
    "description": "• Right before taking damage, uses the active item if it is charged",
    "image": "/trinkets/149.png"
  },
  {
    "id": 150,
    "name": "Blue Key",
    "description": "• Locked doors can be opened for free, but Isaac has to clear a room from the Hush floor before accessing the room behind them",
    "image": "/trinkets/150.png"
  },
  {
    "id": 151,
    "name": "Flat File",
    "description": "• Retracts most spikes, rendering them harmless\n• Also affects Cursed Room Curse Room doors, mimics and any spike obstacle",
    "image": "/trinkets/151.png"
  },
  {
    "id": 152,
    "name": "Telescope Lens",
    "description": "• Planetarium Chance +9% Planetarium chance\n• Additional +15% chance if a Planetarium hasn't been entered yet\n• Planetariums can spawn in the Womb and Corpse",
    "image": "/trinkets/152.png"
  },
  {
    "id": 153,
    "name": "Mom's Lock",
    "description": "• 25% chance for a random Mom item effect each room",
    "image": "/trinkets/153.png"
  },
  {
    "id": 154,
    "name": "Dice Bag",
    "description": "• 50% chance per new room to grant a single use die consumable item\n• The die disappears when leaving\n• The die does not take up a pill/card slot",
    "image": "/trinkets/154.png"
  },
  {
    "id": 155,
    "name": "Holy Crown",
    "description": "• Spawns a Treasure Room Treasure Room and Shop Shop in Cathedral",
    "image": "/trinkets/155.png"
  },
  {
    "id": 156,
    "name": "Mother's Kiss",
    "description": "• Heart +1 Heart container while held",
    "image": "/trinkets/156.png"
  },
  {
    "id": 157,
    "name": "Torn Card",
    "description": "• Every 15 shots, Isaac shoots an Collectible149 Ipecac + Collectible5 My Reflection tear with a very high range value",
    "image": "/trinkets/157.png"
  },
  {
    "id": 158,
    "name": "Torn Pocket",
    "description": "• Taking damage makes Isaac drop 2 of his coins, keys or bombs\n• The pickups can be replaced with other variants, such as golden keys, nickels, dimes, etc.",
    "image": "/trinkets/158.png"
  },
  {
    "id": 159,
    "name": "Gilded Key",
    "description": "• Key +1 Key on pickup\n• Golden Chest Replaces all chests (except Old/Mega) with golden chests\n• Golden Chest Golden chests can contain extra cards, pills or trinkets",
    "image": "/trinkets/159.png"
  },
  {
    "id": 160,
    "name": "Lucky Sack",
    "description": "• Grab Bag Entering a new floor spawns a sack",
    "image": "/trinkets/160.png"
  },
  {
    "id": 161,
    "name": "Wicked Crown",
    "description": "• Spawns a Treasure Room Treasure Room and Shop Shop in Sheol",
    "image": "/trinkets/161.png"
  },
  {
    "id": 162,
    "name": "Azazel's Stump",
    "description": "• Player7 Clearing a room has a 33% chance to turn the player into Azazel\n• Timer Effect lasts until clearing and leaving another room",
    "image": "/trinkets/162.png"
  },
  {
    "id": 163,
    "name": "Dingle Berry",
    "description": "• All Dip (small poop) enemies are friendly\n• Clearing a room spawns 1 random Dip",
    "image": "/trinkets/163.png"
  },
  {
    "id": 164,
    "name": "Ring Cap",
    "description": "• Bomb Spawns 1 extra bomb for each bomb placed",
    "image": "/trinkets/164.png"
  },
  {
    "id": 165,
    "name": "Nuh Uh!",
    "description": "• On Womb and beyond, replaces all coin and key spawns with a bomb, heart, pill, card, trinket, battery, or enemy fly",
    "image": "/trinkets/165.png"
  },
  {
    "id": 166,
    "name": "Modeling Clay",
    "description": "• 50% chance to grant the effect of a random passive item each room",
    "image": "/trinkets/166.png"
  },
  {
    "id": 167,
    "name": "Polished Bone",
    "description": "• Friendly Clearing a room has a 25% chance to spawn a friendly Bony",
    "image": "/trinkets/167.png"
  },
  {
    "id": 168,
    "name": "Hollow Heart",
    "description": "• Empty Bone Heart Entering a new floor grants +1 Bone Heart",
    "image": "/trinkets/168.png"
  },
  {
    "id": 169,
    "name": "Kid's Drawing",
    "description": "• Guppy Counts as 1 item towards the Guppy transformation while held",
    "image": "/trinkets/169.png"
  },
  {
    "id": 170,
    "name": "Crystal Key",
    "description": "• Collectible580 Clearing a room has a 33% chance to create a Red Key room\n• Lower chance to occur when in a red room",
    "image": "/trinkets/170.png"
  },
  {
    "id": 171,
    "name": "Keeper's Bargain",
    "description": "• Devil Room 50% chance for devil deals to cost coins instead of hearts",
    "image": "/trinkets/171.png"
  },
  {
    "id": 172,
    "name": "Cursed Penny",
    "description": "• Picking up a coin teleports Isaac to a random room\n• Can teleport to secret rooms",
    "image": "/trinkets/172.png"
  },
  {
    "id": 173,
    "name": "Your Soul",
    "description": "• Devil Room Allows Isaac to take 1 Devil Room item for free\n• Warning The free Devil deal still affects Angel Room chance",
    "image": "/trinkets/173.png"
  },
  {
    "id": 174,
    "name": "Number Magnet",
    "description": "• Devil Chance +10% Devil Room chance\n• Prevents Krampus from appearing in Devil Rooms\n• Devil Rooms are special variants with more deals, Black Hearts and enemies",
    "image": "/trinkets/174.png"
  },
  {
    "id": 175,
    "name": "Strange Key",
    "description": "• Opens the door to the Hush floor regardless of the timer\n• Using Collectible297 Pandora's Box consumes the key and spawns 6 items from random pools",
    "image": "/trinkets/175.png"
  },
  {
    "id": 176,
    "name": "Lil Clot",
    "description": "• Spawns a blood clot that mimics Isaac's movement\n• Copies Isaac's stats, tear effects and 35% of his damage\n• Respawns each room",
    "image": "/trinkets/176.png"
  },
  {
    "id": 177,
    "name": "Temporary Tattoo",
    "description": "• Chest Clearing a Challenge Room Challenge Room spawns a chest\n• Clearing a Boss Rush Room Boss Challenge Room spawns an item",
    "image": "/trinkets/177.png"
  },
  {
    "id": 178,
    "name": "Swallowed M80",
    "description": "• Taking damage has a 50% chance for Isaac to explode\n• Doesn't destroy Blood Donation Machines or Confessionals, while spawning pickups as if it did",
    "image": "/trinkets/178.png"
  },
  {
    "id": 179,
    "name": "RC Remote",
    "description": "• Familiars mimic Isaac's movement\n• Hold the drop button (Button R T) to keep the familiars in place",
    "image": "/trinkets/179.png"
  },
  {
    "id": 180,
    "name": "Found Soul",
    "description": "• Follows Isaac's movement and shoots spectral tears\n• Copies Isaac's stats, tear effects and 50% of his damage\n• Uses most active items when Isaac does\n• Dies in one hit\n• Respawns each floor",
    "image": "/trinkets/180.png"
  },
  {
    "id": 181,
    "name": "Expansion Pack",
    "description": "• Using an active item triggers the effect of an additional 1-2 charge active item",
    "image": "/trinkets/181.png"
  },
  {
    "id": 182,
    "name": "Beth's Essence",
    "description": "• Entering an Angel Room Angel Room spawns 5 wisps\n• Donating to Beggars has a 25% chance to spawn a wisp",
    "image": "/trinkets/182.png"
  },
  {
    "id": 183,
    "name": "The Twins",
    "description": "• 50% chance to duplicate a familiar each room\n• Grants Collectible8 Brother Bobby or Collectible67 Sister Maggy if Isaac has no familiars",
    "image": "/trinkets/183.png"
  },
  {
    "id": 184,
    "name": "Adoption Papers",
    "description": "• Shop Shops sell familiars for 10 coins",
    "image": "/trinkets/184.png"
  },
  {
    "id": 185,
    "name": "Cricket Leg",
    "description": "• Killing an enemy has a 17% chance to spawn a random locust",
    "image": "/trinkets/185.png"
  },
  {
    "id": 186,
    "name": "Apollyon's Best Friend",
    "description": "• Collectible706 Grants 1 Abyss locust",
    "image": "/trinkets/186.png"
  },
  {
    "id": 187,
    "name": "Broken Glasses",
    "description": "• Treasure Room 50% chance of adding an extra blind item in Treasure Rooms\n• 50% chance to reveal the blind item in alt path Treasure Rooms",
    "image": "/trinkets/187.png"
  },
  {
    "id": 188,
    "name": "Ice Cube",
    "description": "• Petrify Entering a room has a 20% chance to petrify random enemies\n• Freezing Killing a petrified enemy freezes it",
    "image": "/trinkets/188.png"
  },
  {
    "id": 189,
    "name": "Sigil of Baphomet",
    "description": "• Killing an enemy makes Isaac invincible for 1 second\n• Invincibility stacks with successive enemy kills",
    "image": "/trinkets/189.png"
  }
];

async function main() {
  console.log('Seeding items table in PostgreSQL database...');
  for (const item of items) {
    await prisma.item.upsert({
      where: { id: item.id },
      update: {
        name: item.name,
        description: item.description,
        image: item.image,
      },
      create: item,
    });
  }
  console.log(`Successfully seeded ${items.length} items with complete EID descriptions into DB!`);

  console.log('Seeding trinkets table in PostgreSQL database...');
  for (const trinket of trinkets) {
    await prisma.trinket.upsert({
      where: { id: trinket.id },
      update: {
        name: trinket.name,
        description: trinket.description,
        image: trinket.image,
      },
      create: trinket,
    });
  }
  console.log(`Successfully seeded ${trinkets.length} trinkets with complete EID descriptions into DB!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
