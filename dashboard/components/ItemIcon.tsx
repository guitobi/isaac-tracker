import Image from 'next/image';
import { ItemInfo } from '../types';

interface ItemIconProps {
  item: ItemInfo;
}

export function ItemIcon({ item }: ItemIconProps) {
  return (
    <div className="relative group/item z-0 hover:z-50">
      <div className="isaac-item-box w-10 h-10 flex items-center justify-center relative cursor-help">
        <Image 
          src={item.image} 
          alt={item.name} 
          width={32} 
          height={32} 
          className="w-8 h-8 object-contain" 
          unoptimized={true}
        />
      </div>
      
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 tooltip-isaac opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none">
        <p className="font-hand text-xl mb-1 text-[#c39832]">{item.name}</p>
        <p className="font-pixel text-lg leading-tight">{item.description}</p>
      </div>
    </div>
  );
}
