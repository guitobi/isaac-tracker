import { useState } from "react";
import Image from "next/image";
import { ItemInfo } from "../types";
import {
  formatItemName,
  getItemDescription,
  getItemQuality,
  isQuality4Item,
} from "../app/lib/items";

interface ItemIconProps {
  item: ItemInfo;
}

export function ItemIcon({ item }: ItemIconProps) {
  const name = formatItemName(item.id, item.name);
  const description = getItemDescription(item.id, item.description);
  const quality = getItemQuality(item.id, item.quality);
  const isQ4 = isQuality4Item(item.id, item.quality);
  const [imgSrc, setImgSrc] = useState(item.image || `/items/${item.id}.png`);

  return (
    <div className="relative group/item z-0 hover:z-50">
      <div
        className={`isaac-item-box w-10 h-10 flex items-center justify-center relative cursor-help transition-all ${
          isQ4
            ? "border-2 border-isaac-gold shadow-[0_0_12px_rgba(195,152,50,0.9)] bg-isaac-gold/20"
            : ""
        }`}
      >
        <Image
          src={imgSrc}
          alt={name}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          onError={() => setImgSrc(`/items/1.png`)}
        />
      </div>

      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 tooltip-isaac opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
        <div className="flex justify-between items-start mb-1 gap-2">
          <p className="font-pixel text-base text-isaac-gold font-bold leading-tight">
            {name}
          </p>
          <span
            className={`font-pixel text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${
              isQ4
                ? "bg-isaac-gold text-black font-bold border-black shadow-[0_0_6px_rgba(195,152,50,1)]"
                : "bg-black/60 text-gray-300 border-white/20"
            }`}
          >
            {isQ4 ? "⭐ Q4" : `Q${quality}`}
          </span>
        </div>
        <p className="font-pixel text-sm leading-snug text-white whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
