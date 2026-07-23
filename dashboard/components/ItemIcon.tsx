import Image from 'next/image';
import { ItemInfo } from '../types';
import { formatItemName, getItemDescription } from '../app/lib/items';

interface ItemIconProps {
  item: ItemInfo;
}

export function ItemIcon({ item }: ItemIconProps) {
  const name = formatItemName(item.id, item.name);
  const description = getItemDescription(item.id, item.description);

  return (
    <div className="relative group/item z-0 hover:z-50">
      <div className="isaac-item-box w-10 h-10 flex items-center justify-center relative cursor-help">
        <Image 
          src={item.image} 
          alt={name} 
          width={32} 
          height={32} 
          className="w-8 h-8 object-contain" 
          unoptimized={true}
        />
      </div>
      
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 tooltip-isaac opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
        <p className="font-hand text-xl mb-1 text-[#c39832] font-bold">{name}</p>
        <p className="font-pixel text-sm leading-snug text-white whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}
