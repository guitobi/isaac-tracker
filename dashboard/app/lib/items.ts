export interface ItemInfo {
  name: string;
  description: string;
  image: string; // URL або шлях до картинки
}

export const ITEM_DATABASE: Record<number, ItemInfo> = {
  101: {
    name: "The Halo",
    description: "All stats up",
    image: "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/fd/Collectible_The_Halo_icon.png"
  },
  105: {
    name: "The D6",
    description: "Reroll your destiny",
    image: "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/3/30/Collectible_The_D6_icon.png"
  },
  227: {
    name: "Piggy Bank",
    description: "My life savings",
    image: "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/c/c2/Collectible_Piggy_Bank_icon.png"
  },
  506: {
    name: "Backstabber",
    description: "Watch your back",
    image: "https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f6/Collectible_Backstabber_icon.png"
  }
};

export function getItemInfo(id: number): ItemInfo {
  // Якщо предмет є в базі, повертаємо його. Інакше — дефолтну заглушку.
  return ITEM_DATABASE[id] || {
    name: `Item #${id}`,
    description: "Unknown Item",
    image: `https://via.placeholder.com/64/1a1a1a/FFFFFF/?text=${id}`
  };
}
