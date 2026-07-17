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

const items = [
  {
    "id": 1,
    "name": "#THE_SAD_ONION_NAME",
    "description": "#THE_SAD_ONION_DESCRIPTION",
    "image": "/items/1.png"
  },
  {
    "id": 2,
    "name": "#THE_INNER_EYE_NAME",
    "description": "#THE_INNER_EYE_DESCRIPTION",
    "image": "/items/2.png"
  },
  {
    "id": 3,
    "name": "#SPOON_BENDER_NAME",
    "description": "#SPOON_BENDER_DESCRIPTION",
    "image": "/items/3.png"
  },
  {
    "id": 4,
    "name": "#CRICKETS_HEAD_NAME",
    "description": "#CRICKETS_HEAD_DESCRIPTION",
    "image": "/items/4.png"
  },
  {
    "id": 5,
    "name": "#MY_REFLECTION_NAME",
    "description": "#MY_REFLECTION_DESCRIPTION",
    "image": "/items/5.png"
  },
  {
    "id": 6,
    "name": "#NUMBER_ONE_NAME",
    "description": "#NUMBER_ONE_DESCRIPTION",
    "image": "/items/6.png"
  },
  {
    "id": 7,
    "name": "#BLOOD_OF_THE_MARTYR_NAME",
    "description": "#BLOOD_OF_THE_MARTYR_DESCRIPTION",
    "image": "/items/7.png"
  },
  {
    "id": 8,
    "name": "#BROTHER_BOBBY_NAME",
    "description": "#BROTHER_BOBBY_DESCRIPTION",
    "image": "/items/8.png"
  },
  {
    "id": 9,
    "name": "#SKATOLE_NAME",
    "description": "#SKATOLE_DESCRIPTION",
    "image": "/items/9.png"
  },
  {
    "id": 10,
    "name": "#HALO_OF_FLIES_NAME",
    "description": "#HALO_OF_FLIES_DESCRIPTION",
    "image": "/items/10.png"
  },
  {
    "id": 11,
    "name": "#1UP_NAME",
    "description": "#1UP_DESCRIPTION",
    "image": "/items/11.png"
  },
  {
    "id": 12,
    "name": "#MAGIC_MUSHROOM_NAME",
    "description": "#MAGIC_MUSHROOM_DESCRIPTION",
    "image": "/items/12.png"
  },
  {
    "id": 13,
    "name": "#THE_VIRUS_NAME",
    "description": "#THE_VIRUS_DESCRIPTION",
    "image": "/items/13.png"
  },
  {
    "id": 14,
    "name": "#ROID_RAGE_NAME",
    "description": "#ROID_RAGE_DESCRIPTION",
    "image": "/items/14.png"
  },
  {
    "id": 15,
    "name": "#HEART_NAME",
    "description": "#HEART_DESCRIPTION",
    "image": "/items/15.png"
  },
  {
    "id": 16,
    "name": "#RAW_LIVER_NAME",
    "description": "#RAW_LIVER_DESCRIPTION",
    "image": "/items/16.png"
  },
  {
    "id": 17,
    "name": "#SKELETON_KEY_NAME",
    "description": "#SKELETON_KEY_DESCRIPTION",
    "image": "/items/17.png"
  },
  {
    "id": 18,
    "name": "#A_DOLLAR_NAME",
    "description": "#A_DOLLAR_DESCRIPTION",
    "image": "/items/18.png"
  },
  {
    "id": 19,
    "name": "#BOOM_NAME",
    "description": "#BOOM_DESCRIPTION",
    "image": "/items/19.png"
  },
  {
    "id": 20,
    "name": "#TRANSCENDENCE_NAME",
    "description": "#TRANSCENDENCE_DESCRIPTION",
    "image": "/items/20.png"
  },
  {
    "id": 21,
    "name": "#THE_COMPASS_NAME",
    "description": "#THE_COMPASS_DESCRIPTION",
    "image": "/items/21.png"
  },
  {
    "id": 22,
    "name": "#LUNCH_NAME",
    "description": "#LUNCH_DESCRIPTION",
    "image": "/items/22.png"
  },
  {
    "id": 23,
    "name": "#DINNER_NAME",
    "description": "#DINNER_DESCRIPTION",
    "image": "/items/23.png"
  },
  {
    "id": 24,
    "name": "#DESSERT_NAME",
    "description": "#DESSERT_DESCRIPTION",
    "image": "/items/24.png"
  },
  {
    "id": 25,
    "name": "#BREAKFAST_NAME",
    "description": "#BREAKFAST_DESCRIPTION",
    "image": "/items/25.png"
  },
  {
    "id": 26,
    "name": "#ROTTEN_MEAT_NAME",
    "description": "#ROTTEN_MEAT_DESCRIPTION",
    "image": "/items/26.png"
  },
  {
    "id": 27,
    "name": "#WOODEN_SPOON_NAME",
    "description": "#WOODEN_SPOON_DESCRIPTION",
    "image": "/items/27.png"
  },
  {
    "id": 28,
    "name": "#THE_BELT_NAME",
    "description": "#THE_BELT_DESCRIPTION",
    "image": "/items/28.png"
  },
  {
    "id": 29,
    "name": "#MOMS_UNDERWEAR_NAME",
    "description": "#MOMS_UNDERWEAR_DESCRIPTION",
    "image": "/items/29.png"
  },
  {
    "id": 30,
    "name": "#MOMS_HEELS_NAME",
    "description": "#MOMS_HEELS_DESCRIPTION",
    "image": "/items/30.png"
  },
  {
    "id": 31,
    "name": "#MOMS_LIPSTICK_NAME",
    "description": "#MOMS_LIPSTICK_DESCRIPTION",
    "image": "/items/31.png"
  },
  {
    "id": 32,
    "name": "#WIRE_COAT_HANGER_NAME",
    "description": "#WIRE_COAT_HANGER_DESCRIPTION",
    "image": "/items/32.png"
  },
  {
    "id": 33,
    "name": "#THE_BIBLE_NAME",
    "description": "#THE_BIBLE_DESCRIPTION",
    "image": "/items/33.png"
  },
  {
    "id": 34,
    "name": "#THE_BOOK_OF_BELIAL_NAME",
    "description": "#THE_BOOK_OF_BELIAL_DESCRIPTION",
    "image": "/items/34.png"
  },
  {
    "id": 35,
    "name": "#THE_NECRONOMICON_NAME",
    "description": "#THE_NECRONOMICON_DESCRIPTION",
    "image": "/items/35.png"
  },
  {
    "id": 36,
    "name": "#THE_POOP_NAME",
    "description": "#THE_POOP_DESCRIPTION",
    "image": "/items/36.png"
  },
  {
    "id": 37,
    "name": "#MR_BOOM_NAME",
    "description": "#MR_BOOM_DESCRIPTION",
    "image": "/items/37.png"
  },
  {
    "id": 38,
    "name": "#TAMMYS_HEAD_NAME",
    "description": "#TAMMYS_HEAD_DESCRIPTION",
    "image": "/items/38.png"
  },
  {
    "id": 39,
    "name": "#MOMS_BRA_NAME",
    "description": "#MOMS_BRA_DESCRIPTION",
    "image": "/items/39.png"
  },
  {
    "id": 40,
    "name": "#KAMIKAZE_NAME",
    "description": "#KAMIKAZE_DESCRIPTION",
    "image": "/items/40.png"
  },
  {
    "id": 41,
    "name": "#MOMS_PAD_NAME",
    "description": "#MOMS_PAD_DESCRIPTION",
    "image": "/items/41.png"
  },
  {
    "id": 42,
    "name": "#BOBS_ROTTEN_HEAD_NAME",
    "description": "#BOBS_ROTTEN_HEAD_DESCRIPTION",
    "image": "/items/42.png"
  },
  {
    "id": 44,
    "name": "#TELEPORT_NAME",
    "description": "#TELEPORT_DESCRIPTION",
    "image": "/items/44.png"
  },
  {
    "id": 45,
    "name": "#YUM_HEART_NAME",
    "description": "#YUM_HEART_DESCRIPTION",
    "image": "/items/45.png"
  },
  {
    "id": 46,
    "name": "#LUCKY_FOOT_NAME",
    "description": "#LUCKY_FOOT_DESCRIPTION",
    "image": "/items/46.png"
  },
  {
    "id": 47,
    "name": "#DOCTORS_REMOTE_NAME",
    "description": "#DOCTORS_REMOTE_DESCRIPTION",
    "image": "/items/47.png"
  },
  {
    "id": 48,
    "name": "#CUPIDS_ARROW_NAME",
    "description": "#CUPIDS_ARROW_DESCRIPTION",
    "image": "/items/48.png"
  },
  {
    "id": 49,
    "name": "#SHOOP_DA_WHOOP_NAME",
    "description": "#SHOOP_DA_WHOOP_DESCRIPTION",
    "image": "/items/49.png"
  },
  {
    "id": 50,
    "name": "#STEVEN_NAME",
    "description": "#STEVEN_DESCRIPTION",
    "image": "/items/50.png"
  },
  {
    "id": 51,
    "name": "#PENTAGRAM_NAME",
    "description": "#PENTAGRAM_DESCRIPTION",
    "image": "/items/51.png"
  },
  {
    "id": 52,
    "name": "#DR_FETUS_NAME",
    "description": "#DR_FETUS_DESCRIPTION",
    "image": "/items/52.png"
  },
  {
    "id": 53,
    "name": "#MAGNETO_NAME",
    "description": "#MAGNETO_DESCRIPTION",
    "image": "/items/53.png"
  },
  {
    "id": 54,
    "name": "#TREASURE_MAP_NAME",
    "description": "#TREASURE_MAP_DESCRIPTION",
    "image": "/items/54.png"
  },
  {
    "id": 55,
    "name": "#MOMS_EYE_NAME",
    "description": "#MOMS_EYE_DESCRIPTION",
    "image": "/items/55.png"
  },
  {
    "id": 56,
    "name": "#LEMON_MISHAP_NAME",
    "description": "#LEMON_MISHAP_DESCRIPTION",
    "image": "/items/56.png"
  },
  {
    "id": 57,
    "name": "#DISTANT_ADMIRATION_NAME",
    "description": "#DISTANT_ADMIRATION_DESCRIPTION",
    "image": "/items/57.png"
  },
  {
    "id": 58,
    "name": "#BOOK_OF_SHADOWS_NAME",
    "description": "#BOOK_OF_SHADOWS_DESCRIPTION",
    "image": "/items/58.png"
  },
  {
    "id": 59,
    "name": "#THE_BOOK_OF_BELIAL_NAME",
    "description": "#THE_BOOK_OF_BELIAL_DESCRIPTION",
    "image": "/items/59.png"
  },
  {
    "id": 60,
    "name": "#THE_LADDER_NAME",
    "description": "#THE_LADDER_DESCRIPTION",
    "image": "/items/60.png"
  },
  {
    "id": 62,
    "name": "#CHARM_OF_THE_VAMPIRE_NAME",
    "description": "#CHARM_OF_THE_VAMPIRE_DESCRIPTION",
    "image": "/items/62.png"
  },
  {
    "id": 63,
    "name": "#THE_BATTERY_NAME",
    "description": "#THE_BATTERY_DESCRIPTION",
    "image": "/items/63.png"
  },
  {
    "id": 64,
    "name": "#STEAM_SALE_NAME",
    "description": "#STEAM_SALE_DESCRIPTION",
    "image": "/items/64.png"
  },
  {
    "id": 65,
    "name": "#ANARCHIST_COOKBOOK_NAME",
    "description": "#ANARCHIST_COOKBOOK_DESCRIPTION",
    "image": "/items/65.png"
  },
  {
    "id": 66,
    "name": "#THE_HOURGLASS_NAME",
    "description": "#THE_HOURGLASS_DESCRIPTION",
    "image": "/items/66.png"
  },
  {
    "id": 67,
    "name": "#SISTER_MAGGY_NAME",
    "description": "#SISTER_MAGGY_DESCRIPTION",
    "image": "/items/67.png"
  },
  {
    "id": 68,
    "name": "#TECHNOLOGY_NAME",
    "description": "#TECHNOLOGY_DESCRIPTION",
    "image": "/items/68.png"
  },
  {
    "id": 69,
    "name": "#CHOCOLATE_MILK_NAME",
    "description": "#CHOCOLATE_MILK_DESCRIPTION",
    "image": "/items/69.png"
  },
  {
    "id": 70,
    "name": "#GROWTH_HORMONES_NAME",
    "description": "#GROWTH_HORMONES_DESCRIPTION",
    "image": "/items/70.png"
  },
  {
    "id": 71,
    "name": "#MINI_MUSH_NAME",
    "description": "#MINI_MUSH_DESCRIPTION",
    "image": "/items/71.png"
  },
  {
    "id": 72,
    "name": "#ROSARY_NAME",
    "description": "#ROSARY_DESCRIPTION",
    "image": "/items/72.png"
  },
  {
    "id": 73,
    "name": "#CUBE_OF_MEAT_NAME",
    "description": "#CUBE_OF_MEAT_DESCRIPTION",
    "image": "/items/73.png"
  },
  {
    "id": 74,
    "name": "#A_QUARTER_NAME",
    "description": "#A_QUARTER_DESCRIPTION",
    "image": "/items/74.png"
  },
  {
    "id": 75,
    "name": "#PHD_NAME",
    "description": "#PHD_DESCRIPTION",
    "image": "/items/75.png"
  },
  {
    "id": 76,
    "name": "#XRAY_VISION_NAME",
    "description": "#XRAY_VISION_DESCRIPTION",
    "image": "/items/76.png"
  },
  {
    "id": 77,
    "name": "#MY_LITTLE_UNICORN_NAME",
    "description": "#MY_LITTLE_UNICORN_DESCRIPTION",
    "image": "/items/77.png"
  },
  {
    "id": 78,
    "name": "#BOOK_OF_REVELATIONS_NAME",
    "description": "#BOOK_OF_REVELATIONS_DESCRIPTION",
    "image": "/items/78.png"
  },
  {
    "id": 79,
    "name": "#THE_MARK_NAME",
    "description": "#THE_MARK_DESCRIPTION",
    "image": "/items/79.png"
  },
  {
    "id": 80,
    "name": "#THE_PACT_NAME",
    "description": "#THE_PACT_DESCRIPTION",
    "image": "/items/80.png"
  },
  {
    "id": 81,
    "name": "#DEAD_CAT_NAME",
    "description": "#DEAD_CAT_DESCRIPTION",
    "image": "/items/81.png"
  },
  {
    "id": 82,
    "name": "#LORD_OF_THE_PIT_NAME",
    "description": "#LORD_OF_THE_PIT_DESCRIPTION",
    "image": "/items/82.png"
  },
  {
    "id": 83,
    "name": "#THE_NAIL_NAME",
    "description": "#THE_NAIL_DESCRIPTION",
    "image": "/items/83.png"
  },
  {
    "id": 84,
    "name": "#WE_NEED_TO_GO_DEEPER_NAME",
    "description": "#WE_NEED_TO_GO_DEEPER_DESCRIPTION",
    "image": "/items/84.png"
  },
  {
    "id": 85,
    "name": "#DECK_OF_CARDS_NAME",
    "description": "#DECK_OF_CARDS_DESCRIPTION",
    "image": "/items/85.png"
  },
  {
    "id": 86,
    "name": "#MONSTROS_TOOTH_NAME",
    "description": "#MONSTROS_TOOTH_DESCRIPTION",
    "image": "/items/86.png"
  },
  {
    "id": 87,
    "name": "#LOKIS_HORNS_NAME",
    "description": "#LOKIS_HORNS_DESCRIPTION",
    "image": "/items/87.png"
  },
  {
    "id": 88,
    "name": "#LITTLE_CHUBBY_NAME",
    "description": "#LITTLE_CHUBBY_DESCRIPTION",
    "image": "/items/88.png"
  },
  {
    "id": 89,
    "name": "#SPIDER_BITE_NAME",
    "description": "#SPIDER_BITE_DESCRIPTION",
    "image": "/items/89.png"
  },
  {
    "id": 90,
    "name": "#THE_SMALL_ROCK_NAME",
    "description": "#THE_SMALL_ROCK_DESCRIPTION",
    "image": "/items/90.png"
  },
  {
    "id": 91,
    "name": "#SPELUNKER_HAT_NAME",
    "description": "#SPELUNKER_HAT_DESCRIPTION",
    "image": "/items/91.png"
  },
  {
    "id": 92,
    "name": "#SUPER_BANDAGE_NAME",
    "description": "#SUPER_BANDAGE_DESCRIPTION",
    "image": "/items/92.png"
  },
  {
    "id": 93,
    "name": "#THE_GAMEKID_NAME",
    "description": "#THE_GAMEKID_DESCRIPTION",
    "image": "/items/93.png"
  },
  {
    "id": 94,
    "name": "#SACK_OF_PENNIES_NAME",
    "description": "#SACK_OF_PENNIES_DESCRIPTION",
    "image": "/items/94.png"
  },
  {
    "id": 95,
    "name": "#ROBOBABY_NAME",
    "description": "#ROBOBABY_DESCRIPTION",
    "image": "/items/95.png"
  },
  {
    "id": 96,
    "name": "#LITTLE_CHAD_NAME",
    "description": "#LITTLE_CHAD_DESCRIPTION",
    "image": "/items/96.png"
  },
  {
    "id": 97,
    "name": "#THE_BOOK_OF_SIN_NAME",
    "description": "#THE_BOOK_OF_SIN_DESCRIPTION",
    "image": "/items/97.png"
  },
  {
    "id": 98,
    "name": "#THE_RELIC_NAME",
    "description": "#THE_RELIC_DESCRIPTION",
    "image": "/items/98.png"
  },
  {
    "id": 99,
    "name": "#LITTLE_GISH_NAME",
    "description": "#LITTLE_GISH_DESCRIPTION",
    "image": "/items/99.png"
  },
  {
    "id": 100,
    "name": "#LITTLE_STEVEN_NAME",
    "description": "#LITTLE_STEVEN_DESCRIPTION",
    "image": "/items/100.png"
  },
  {
    "id": 101,
    "name": "#THE_HALO_NAME",
    "description": "#THE_HALO_DESCRIPTION",
    "image": "/items/101.png"
  },
  {
    "id": 102,
    "name": "#MOMS_BOTTLE_OF_PILLS_NAME",
    "description": "#MOMS_BOTTLE_OF_PILLS_DESCRIPTION",
    "image": "/items/102.png"
  },
  {
    "id": 103,
    "name": "#THE_COMMON_COLD_NAME",
    "description": "#THE_COMMON_COLD_DESCRIPTION",
    "image": "/items/103.png"
  },
  {
    "id": 104,
    "name": "#THE_PARASITE_NAME",
    "description": "#THE_PARASITE_DESCRIPTION",
    "image": "/items/104.png"
  },
  {
    "id": 105,
    "name": "#THE_D6_NAME",
    "description": "#THE_D6_DESCRIPTION",
    "image": "/items/105.png"
  },
  {
    "id": 106,
    "name": "#MR_MEGA_NAME",
    "description": "#MR_MEGA_DESCRIPTION",
    "image": "/items/106.png"
  },
  {
    "id": 107,
    "name": "#THE_PINKING_SHEARS_NAME",
    "description": "#THE_PINKING_SHEARS_DESCRIPTION",
    "image": "/items/107.png"
  },
  {
    "id": 108,
    "name": "#THE_WAFER_NAME",
    "description": "#THE_WAFER_DESCRIPTION",
    "image": "/items/108.png"
  },
  {
    "id": 109,
    "name": "#MONEY__POWER_NAME",
    "description": "#MONEY__POWER_DESCRIPTION",
    "image": "/items/109.png"
  },
  {
    "id": 110,
    "name": "#MOMS_CONTACTS_NAME",
    "description": "#MOMS_CONTACTS_DESCRIPTION",
    "image": "/items/110.png"
  },
  {
    "id": 111,
    "name": "#THE_BEAN_NAME",
    "description": "#THE_BEAN_DESCRIPTION",
    "image": "/items/111.png"
  },
  {
    "id": 112,
    "name": "#GUARDIAN_ANGEL_NAME",
    "description": "#GUARDIAN_ANGEL_DESCRIPTION",
    "image": "/items/112.png"
  },
  {
    "id": 113,
    "name": "#DEMON_BABY_NAME",
    "description": "#DEMON_BABY_DESCRIPTION",
    "image": "/items/113.png"
  },
  {
    "id": 114,
    "name": "#MOMS_KNIFE_NAME",
    "description": "#MOMS_KNIFE_DESCRIPTION",
    "image": "/items/114.png"
  },
  {
    "id": 115,
    "name": "#OUIJA_BOARD_NAME",
    "description": "#OUIJA_BOARD_DESCRIPTION",
    "image": "/items/115.png"
  },
  {
    "id": 116,
    "name": "#9_VOLT_NAME",
    "description": "#9_VOLT_DESCRIPTION",
    "image": "/items/116.png"
  },
  {
    "id": 117,
    "name": "#DEAD_BIRD_NAME",
    "description": "#DEAD_BIRD_DESCRIPTION",
    "image": "/items/117.png"
  },
  {
    "id": 118,
    "name": "#BRIMSTONE_NAME",
    "description": "#BRIMSTONE_DESCRIPTION",
    "image": "/items/118.png"
  },
  {
    "id": 119,
    "name": "#BLOOD_BAG_NAME",
    "description": "#BLOOD_BAG_DESCRIPTION",
    "image": "/items/119.png"
  },
  {
    "id": 120,
    "name": "#ODD_MUSHROOM_THIN_NAME",
    "description": "#ODD_MUSHROOM_THIN_DESCRIPTION",
    "image": "/items/120.png"
  },
  {
    "id": 121,
    "name": "#ODD_MUSHROOM_LARGE_NAME",
    "description": "#ODD_MUSHROOM_LARGE_DESCRIPTION",
    "image": "/items/121.png"
  },
  {
    "id": 122,
    "name": "#WHORE_OF_BABYLON_NAME",
    "description": "#WHORE_OF_BABYLON_DESCRIPTION",
    "image": "/items/122.png"
  },
  {
    "id": 123,
    "name": "#MONSTER_MANUAL_NAME",
    "description": "#MONSTER_MANUAL_DESCRIPTION",
    "image": "/items/123.png"
  },
  {
    "id": 124,
    "name": "#DEAD_SEA_SCROLLS_NAME",
    "description": "#DEAD_SEA_SCROLLS_DESCRIPTION",
    "image": "/items/124.png"
  },
  {
    "id": 125,
    "name": "#BOBBYBOMB_NAME",
    "description": "#BOBBYBOMB_DESCRIPTION",
    "image": "/items/125.png"
  },
  {
    "id": 126,
    "name": "#RAZOR_BLADE_NAME",
    "description": "#RAZOR_BLADE_DESCRIPTION",
    "image": "/items/126.png"
  },
  {
    "id": 127,
    "name": "#FORGET_ME_NOW_NAME",
    "description": "#FORGET_ME_NOW_DESCRIPTION",
    "image": "/items/127.png"
  },
  {
    "id": 128,
    "name": "#FOREVER_ALONE_NAME",
    "description": "#FOREVER_ALONE_DESCRIPTION",
    "image": "/items/128.png"
  },
  {
    "id": 129,
    "name": "#BUCKET_OF_LARD_NAME",
    "description": "#BUCKET_OF_LARD_DESCRIPTION",
    "image": "/items/129.png"
  },
  {
    "id": 130,
    "name": "#A_PONY_NAME",
    "description": "#A_PONY_DESCRIPTION",
    "image": "/items/130.png"
  },
  {
    "id": 131,
    "name": "#BOMB_BAG_NAME",
    "description": "#BOMB_BAG_DESCRIPTION",
    "image": "/items/131.png"
  },
  {
    "id": 132,
    "name": "#A_LUMP_OF_COAL_NAME",
    "description": "#A_LUMP_OF_COAL_DESCRIPTION",
    "image": "/items/132.png"
  },
  {
    "id": 133,
    "name": "#GUPPYS_PAW_NAME",
    "description": "#GUPPYS_PAW_DESCRIPTION",
    "image": "/items/133.png"
  },
  {
    "id": 134,
    "name": "#GUPPYS_TAIL_NAME",
    "description": "#GUPPYS_TAIL_DESCRIPTION",
    "image": "/items/134.png"
  },
  {
    "id": 135,
    "name": "#IV_BAG_NAME",
    "description": "#IV_BAG_DESCRIPTION",
    "image": "/items/135.png"
  },
  {
    "id": 136,
    "name": "#BEST_FRIEND_NAME",
    "description": "#BEST_FRIEND_DESCRIPTION",
    "image": "/items/136.png"
  },
  {
    "id": 137,
    "name": "#REMOTE_DETONATOR_NAME",
    "description": "#REMOTE_DETONATOR_DESCRIPTION",
    "image": "/items/137.png"
  },
  {
    "id": 138,
    "name": "#STIGMATA_NAME",
    "description": "#STIGMATA_DESCRIPTION",
    "image": "/items/138.png"
  },
  {
    "id": 139,
    "name": "#MOMS_PURSE_NAME",
    "description": "#MOMS_PURSE_DESCRIPTION",
    "image": "/items/139.png"
  },
  {
    "id": 140,
    "name": "#BOBS_CURSE_NAME",
    "description": "#BOBS_CURSE_DESCRIPTION",
    "image": "/items/140.png"
  },
  {
    "id": 141,
    "name": "#PAGEANT_BOY_NAME",
    "description": "#PAGEANT_BOY_DESCRIPTION",
    "image": "/items/141.png"
  },
  {
    "id": 142,
    "name": "#SCAPULAR_NAME",
    "description": "#SCAPULAR_DESCRIPTION",
    "image": "/items/142.png"
  },
  {
    "id": 143,
    "name": "#SPEED_BALL_NAME",
    "description": "#SPEED_BALL_DESCRIPTION",
    "image": "/items/143.png"
  },
  {
    "id": 144,
    "name": "#BUM_FRIEND_NAME",
    "description": "#BUM_FRIEND_DESCRIPTION",
    "image": "/items/144.png"
  },
  {
    "id": 145,
    "name": "#GUPPYS_HEAD_NAME",
    "description": "#GUPPYS_HEAD_DESCRIPTION",
    "image": "/items/145.png"
  },
  {
    "id": 146,
    "name": "#PRAYER_CARD_NAME",
    "description": "#PRAYER_CARD_DESCRIPTION",
    "image": "/items/146.png"
  },
  {
    "id": 147,
    "name": "#NOTCHED_AXE_NAME",
    "description": "#NOTCHED_AXE_DESCRIPTION",
    "image": "/items/147.png"
  },
  {
    "id": 148,
    "name": "#INFESTATION_NAME",
    "description": "#INFESTATION_DESCRIPTION",
    "image": "/items/148.png"
  },
  {
    "id": 149,
    "name": "#IPECAC_NAME",
    "description": "#IPECAC_DESCRIPTION",
    "image": "/items/149.png"
  },
  {
    "id": 150,
    "name": "#TOUGH_LOVE_NAME",
    "description": "#TOUGH_LOVE_DESCRIPTION",
    "image": "/items/150.png"
  },
  {
    "id": 151,
    "name": "#THE_MULLIGAN_NAME",
    "description": "#THE_MULLIGAN_DESCRIPTION",
    "image": "/items/151.png"
  },
  {
    "id": 152,
    "name": "#TECHNOLOGY_2_NAME",
    "description": "#TECHNOLOGY_2_DESCRIPTION",
    "image": "/items/152.png"
  },
  {
    "id": 153,
    "name": "#MUTANT_SPIDER_NAME",
    "description": "#MUTANT_SPIDER_DESCRIPTION",
    "image": "/items/153.png"
  },
  {
    "id": 154,
    "name": "#CHEMICAL_PEEL_NAME",
    "description": "#CHEMICAL_PEEL_DESCRIPTION",
    "image": "/items/154.png"
  },
  {
    "id": 155,
    "name": "#THE_PEEPER_NAME",
    "description": "#THE_PEEPER_DESCRIPTION",
    "image": "/items/155.png"
  },
  {
    "id": 156,
    "name": "#HABIT_NAME",
    "description": "#HABIT_DESCRIPTION",
    "image": "/items/156.png"
  },
  {
    "id": 157,
    "name": "#BLOODY_LUST_NAME",
    "description": "#BLOODY_LUST_DESCRIPTION",
    "image": "/items/157.png"
  },
  {
    "id": 158,
    "name": "#CRYSTAL_BALL_NAME",
    "description": "#CRYSTAL_BALL_DESCRIPTION",
    "image": "/items/158.png"
  },
  {
    "id": 159,
    "name": "#SPIRIT_OF_THE_NIGHT_NAME",
    "description": "#SPIRIT_OF_THE_NIGHT_DESCRIPTION",
    "image": "/items/159.png"
  },
  {
    "id": 160,
    "name": "#CRACK_THE_SKY_NAME",
    "description": "#CRACK_THE_SKY_DESCRIPTION",
    "image": "/items/160.png"
  },
  {
    "id": 161,
    "name": "#ANKH_NAME",
    "description": "#ANKH_DESCRIPTION",
    "image": "/items/161.png"
  },
  {
    "id": 162,
    "name": "#CELTIC_CROSS_NAME",
    "description": "#CELTIC_CROSS_DESCRIPTION",
    "image": "/items/162.png"
  },
  {
    "id": 163,
    "name": "#GHOST_BABY_NAME",
    "description": "#GHOST_BABY_DESCRIPTION",
    "image": "/items/163.png"
  },
  {
    "id": 164,
    "name": "#THE_CANDLE_NAME",
    "description": "#THE_CANDLE_DESCRIPTION",
    "image": "/items/164.png"
  },
  {
    "id": 165,
    "name": "#CATONINETAILS_NAME",
    "description": "#CATONINETAILS_DESCRIPTION",
    "image": "/items/165.png"
  },
  {
    "id": 166,
    "name": "#D20_NAME",
    "description": "#D20_DESCRIPTION",
    "image": "/items/166.png"
  },
  {
    "id": 167,
    "name": "#HARLEQUIN_BABY_NAME",
    "description": "#HARLEQUIN_BABY_DESCRIPTION",
    "image": "/items/167.png"
  },
  {
    "id": 168,
    "name": "#EPIC_FETUS_NAME",
    "description": "#EPIC_FETUS_DESCRIPTION",
    "image": "/items/168.png"
  },
  {
    "id": 169,
    "name": "#POLYPHEMUS_NAME",
    "description": "#POLYPHEMUS_DESCRIPTION",
    "image": "/items/169.png"
  },
  {
    "id": 170,
    "name": "#DADDY_LONGLEGS_NAME",
    "description": "#DADDY_LONGLEGS_DESCRIPTION",
    "image": "/items/170.png"
  },
  {
    "id": 171,
    "name": "#SPIDER_BUTT_NAME",
    "description": "#SPIDER_BUTT_DESCRIPTION",
    "image": "/items/171.png"
  },
  {
    "id": 172,
    "name": "#SACRIFICIAL_DAGGER_NAME",
    "description": "#SACRIFICIAL_DAGGER_DESCRIPTION",
    "image": "/items/172.png"
  },
  {
    "id": 173,
    "name": "#MITRE_NAME",
    "description": "#MITRE_DESCRIPTION",
    "image": "/items/173.png"
  },
  {
    "id": 174,
    "name": "#RAINBOW_BABY_NAME",
    "description": "#RAINBOW_BABY_DESCRIPTION",
    "image": "/items/174.png"
  },
  {
    "id": 175,
    "name": "#DADS_KEY_NAME",
    "description": "#DADS_KEY_DESCRIPTION",
    "image": "/items/175.png"
  },
  {
    "id": 176,
    "name": "#STEM_CELLS_NAME",
    "description": "#STEM_CELLS_DESCRIPTION",
    "image": "/items/176.png"
  },
  {
    "id": 177,
    "name": "#PORTABLE_SLOT_NAME",
    "description": "#PORTABLE_SLOT_DESCRIPTION",
    "image": "/items/177.png"
  },
  {
    "id": 178,
    "name": "#HOLY_WATER_NAME",
    "description": "#HOLY_WATER_DESCRIPTION",
    "image": "/items/178.png"
  },
  {
    "id": 179,
    "name": "#FATE_NAME",
    "description": "#FATE_DESCRIPTION",
    "image": "/items/179.png"
  },
  {
    "id": 180,
    "name": "#THE_BLACK_BEAN_NAME",
    "description": "#THE_BLACK_BEAN_DESCRIPTION",
    "image": "/items/180.png"
  },
  {
    "id": 181,
    "name": "#WHITE_PONY_NAME",
    "description": "#WHITE_PONY_DESCRIPTION",
    "image": "/items/181.png"
  },
  {
    "id": 182,
    "name": "#SACRED_HEART_NAME",
    "description": "#SACRED_HEART_DESCRIPTION",
    "image": "/items/182.png"
  },
  {
    "id": 183,
    "name": "#TOOTH_PICKS_NAME",
    "description": "#TOOTH_PICKS_DESCRIPTION",
    "image": "/items/183.png"
  },
  {
    "id": 184,
    "name": "#HOLY_GRAIL_NAME",
    "description": "#HOLY_GRAIL_DESCRIPTION",
    "image": "/items/184.png"
  },
  {
    "id": 185,
    "name": "#DEAD_DOVE_NAME",
    "description": "#DEAD_DOVE_DESCRIPTION",
    "image": "/items/185.png"
  },
  {
    "id": 186,
    "name": "#BLOOD_RIGHTS_NAME",
    "description": "#BLOOD_RIGHTS_DESCRIPTION",
    "image": "/items/186.png"
  },
  {
    "id": 187,
    "name": "#GUPPYS_HAIRBALL_NAME",
    "description": "#GUPPYS_HAIRBALL_DESCRIPTION",
    "image": "/items/187.png"
  },
  {
    "id": 188,
    "name": "#ABEL_NAME",
    "description": "#ABEL_DESCRIPTION",
    "image": "/items/188.png"
  },
  {
    "id": 189,
    "name": "#SMB_SUPER_FAN_NAME",
    "description": "#SMB_SUPER_FAN_DESCRIPTION",
    "image": "/items/189.png"
  },
  {
    "id": 190,
    "name": "#PYRO_NAME",
    "description": "#PYRO_DESCRIPTION",
    "image": "/items/190.png"
  },
  {
    "id": 191,
    "name": "#3_DOLLAR_BILL_NAME",
    "description": "#3_DOLLAR_BILL_DESCRIPTION",
    "image": "/items/191.png"
  },
  {
    "id": 192,
    "name": "#TELEPATHY_FOR_DUMMIES_NAME",
    "description": "#TELEPATHY_FOR_DUMMIES_DESCRIPTION",
    "image": "/items/192.png"
  },
  {
    "id": 193,
    "name": "#MEAT_NAME",
    "description": "#MEAT_DESCRIPTION",
    "image": "/items/193.png"
  },
  {
    "id": 194,
    "name": "#MAGIC_8_BALL_NAME",
    "description": "#MAGIC_8_BALL_DESCRIPTION",
    "image": "/items/194.png"
  },
  {
    "id": 195,
    "name": "#MOMS_COIN_PURSE_NAME",
    "description": "#MOMS_COIN_PURSE_DESCRIPTION",
    "image": "/items/195.png"
  },
  {
    "id": 196,
    "name": "#SQUEEZY_NAME",
    "description": "#SQUEEZY_DESCRIPTION",
    "image": "/items/196.png"
  },
  {
    "id": 197,
    "name": "#JESUS_JUICE_NAME",
    "description": "#JESUS_JUICE_DESCRIPTION",
    "image": "/items/197.png"
  },
  {
    "id": 198,
    "name": "#BOX_NAME",
    "description": "#BOX_DESCRIPTION",
    "image": "/items/198.png"
  },
  {
    "id": 199,
    "name": "#MOMS_KEY_NAME",
    "description": "#MOMS_KEY_DESCRIPTION",
    "image": "/items/199.png"
  },
  {
    "id": 200,
    "name": "#MOMS_EYESHADOW_NAME",
    "description": "#MOMS_EYESHADOW_DESCRIPTION",
    "image": "/items/200.png"
  },
  {
    "id": 201,
    "name": "#IRON_BAR_NAME",
    "description": "#IRON_BAR_DESCRIPTION",
    "image": "/items/201.png"
  },
  {
    "id": 202,
    "name": "#MIDAS_TOUCH_NAME",
    "description": "#MIDAS_TOUCH_DESCRIPTION",
    "image": "/items/202.png"
  },
  {
    "id": 203,
    "name": "#HUMBLEING_BUNDLE_NAME",
    "description": "#HUMBLEING_BUNDLE_DESCRIPTION",
    "image": "/items/203.png"
  },
  {
    "id": 204,
    "name": "#FANNY_PACK_NAME",
    "description": "#FANNY_PACK_DESCRIPTION",
    "image": "/items/204.png"
  },
  {
    "id": 205,
    "name": "#SHARP_PLUG_NAME",
    "description": "#SHARP_PLUG_DESCRIPTION",
    "image": "/items/205.png"
  },
  {
    "id": 206,
    "name": "#GUILLOTINE_NAME",
    "description": "#GUILLOTINE_DESCRIPTION",
    "image": "/items/206.png"
  },
  {
    "id": 207,
    "name": "#BALL_OF_BANDAGES_NAME",
    "description": "#BALL_OF_BANDAGES_DESCRIPTION",
    "image": "/items/207.png"
  },
  {
    "id": 208,
    "name": "#CHAMPION_BELT_NAME",
    "description": "#CHAMPION_BELT_DESCRIPTION",
    "image": "/items/208.png"
  },
  {
    "id": 209,
    "name": "#BUTT_BOMBS_NAME",
    "description": "#BUTT_BOMBS_DESCRIPTION",
    "image": "/items/209.png"
  },
  {
    "id": 210,
    "name": "#GNAWED_LEAF_NAME",
    "description": "#GNAWED_LEAF_DESCRIPTION",
    "image": "/items/210.png"
  },
  {
    "id": 211,
    "name": "#SPIDERBABY_NAME",
    "description": "#SPIDERBABY_DESCRIPTION",
    "image": "/items/211.png"
  },
  {
    "id": 212,
    "name": "#GUPPYS_COLLAR_NAME",
    "description": "#GUPPYS_COLLAR_DESCRIPTION",
    "image": "/items/212.png"
  },
  {
    "id": 213,
    "name": "#LOST_CONTACT_NAME",
    "description": "#LOST_CONTACT_DESCRIPTION",
    "image": "/items/213.png"
  },
  {
    "id": 214,
    "name": "#ANEMIC_NAME",
    "description": "#ANEMIC_DESCRIPTION",
    "image": "/items/214.png"
  },
  {
    "id": 215,
    "name": "#GOAT_HEAD_NAME",
    "description": "#GOAT_HEAD_DESCRIPTION",
    "image": "/items/215.png"
  },
  {
    "id": 216,
    "name": "#CEREMONIAL_ROBES_NAME",
    "description": "#CEREMONIAL_ROBES_DESCRIPTION",
    "image": "/items/216.png"
  },
  {
    "id": 217,
    "name": "#MOMS_WIG_NAME",
    "description": "#MOMS_WIG_DESCRIPTION",
    "image": "/items/217.png"
  },
  {
    "id": 218,
    "name": "#PLACENTA_NAME",
    "description": "#PLACENTA_DESCRIPTION",
    "image": "/items/218.png"
  },
  {
    "id": 219,
    "name": "#OLD_BANDAGE_NAME",
    "description": "#OLD_BANDAGE_DESCRIPTION",
    "image": "/items/219.png"
  },
  {
    "id": 220,
    "name": "#SAD_BOMBS_NAME",
    "description": "#SAD_BOMBS_DESCRIPTION",
    "image": "/items/220.png"
  },
  {
    "id": 221,
    "name": "#RUBBER_CEMENT_NAME",
    "description": "#RUBBER_CEMENT_DESCRIPTION",
    "image": "/items/221.png"
  },
  {
    "id": 222,
    "name": "#ANTIGRAVITY_NAME",
    "description": "#ANTIGRAVITY_DESCRIPTION",
    "image": "/items/222.png"
  },
  {
    "id": 223,
    "name": "#PYROMANIAC_NAME",
    "description": "#PYROMANIAC_DESCRIPTION",
    "image": "/items/223.png"
  },
  {
    "id": 224,
    "name": "#CRICKETS_BODY_NAME",
    "description": "#CRICKETS_BODY_DESCRIPTION",
    "image": "/items/224.png"
  },
  {
    "id": 225,
    "name": "#GIMPY_NAME",
    "description": "#GIMPY_DESCRIPTION",
    "image": "/items/225.png"
  },
  {
    "id": 226,
    "name": "#BLACK_LOTUS_NAME",
    "description": "#BLACK_LOTUS_DESCRIPTION",
    "image": "/items/226.png"
  },
  {
    "id": 227,
    "name": "#PIGGY_BANK_NAME",
    "description": "#PIGGY_BANK_DESCRIPTION",
    "image": "/items/227.png"
  },
  {
    "id": 228,
    "name": "#MOMS_PERFUME_NAME",
    "description": "#MOMS_PERFUME_DESCRIPTION",
    "image": "/items/228.png"
  },
  {
    "id": 229,
    "name": "#MONSTROS_LUNG_NAME",
    "description": "#MONSTROS_LUNG_DESCRIPTION",
    "image": "/items/229.png"
  },
  {
    "id": 230,
    "name": "#ABADDON_NAME",
    "description": "#ABADDON_DESCRIPTION",
    "image": "/items/230.png"
  },
  {
    "id": 231,
    "name": "#BALL_OF_TAR_NAME",
    "description": "#BALL_OF_TAR_DESCRIPTION",
    "image": "/items/231.png"
  },
  {
    "id": 232,
    "name": "#STOP_WATCH_NAME",
    "description": "#STOP_WATCH_DESCRIPTION",
    "image": "/items/232.png"
  },
  {
    "id": 233,
    "name": "#TINY_PLANET_NAME",
    "description": "#TINY_PLANET_DESCRIPTION",
    "image": "/items/233.png"
  },
  {
    "id": 234,
    "name": "#INFESTATION_2_NAME",
    "description": "#INFESTATION_2_DESCRIPTION",
    "image": "/items/234.png"
  },
  {
    "id": 236,
    "name": "#E_COLI_NAME",
    "description": "#E_COLI_DESCRIPTION",
    "image": "/items/236.png"
  },
  {
    "id": 237,
    "name": "#DEATHS_TOUCH_NAME",
    "description": "#DEATHS_TOUCH_DESCRIPTION",
    "image": "/items/237.png"
  },
  {
    "id": 238,
    "name": "#KEY_PIECE_1_NAME",
    "description": "#KEY_PIECE_1_DESCRIPTION",
    "image": "/items/238.png"
  },
  {
    "id": 239,
    "name": "#KEY_PIECE_2_NAME",
    "description": "#KEY_PIECE_2_DESCRIPTION",
    "image": "/items/239.png"
  },
  {
    "id": 240,
    "name": "#EXPERIMENTAL_TREATMENT_NAME",
    "description": "#EXPERIMENTAL_TREATMENT_DESCRIPTION",
    "image": "/items/240.png"
  },
  {
    "id": 241,
    "name": "#CONTRACT_FROM_BELOW_NAME",
    "description": "#CONTRACT_FROM_BELOW_DESCRIPTION",
    "image": "/items/241.png"
  },
  {
    "id": 242,
    "name": "#INFAMY_NAME",
    "description": "#INFAMY_DESCRIPTION",
    "image": "/items/242.png"
  },
  {
    "id": 243,
    "name": "#TRINITY_SHIELD_NAME",
    "description": "#TRINITY_SHIELD_DESCRIPTION",
    "image": "/items/243.png"
  },
  {
    "id": 244,
    "name": "#TECH5_NAME",
    "description": "#TECH5_DESCRIPTION",
    "image": "/items/244.png"
  },
  {
    "id": 245,
    "name": "#2020_NAME",
    "description": "#2020_DESCRIPTION",
    "image": "/items/245.png"
  },
  {
    "id": 246,
    "name": "#BLUE_MAP_NAME",
    "description": "#BLUE_MAP_DESCRIPTION",
    "image": "/items/246.png"
  },
  {
    "id": 247,
    "name": "#BFFS_NAME",
    "description": "#BFFS_DESCRIPTION",
    "image": "/items/247.png"
  },
  {
    "id": 248,
    "name": "#HIVE_MIND_NAME",
    "description": "#HIVE_MIND_DESCRIPTION",
    "image": "/items/248.png"
  },
  {
    "id": 249,
    "name": "#THERES_OPTIONS_NAME",
    "description": "#THERES_OPTIONS_DESCRIPTION",
    "image": "/items/249.png"
  },
  {
    "id": 250,
    "name": "#BOGO_BOMBS_NAME",
    "description": "#BOGO_BOMBS_DESCRIPTION",
    "image": "/items/250.png"
  },
  {
    "id": 251,
    "name": "#STARTER_DECK_NAME",
    "description": "#STARTER_DECK_DESCRIPTION",
    "image": "/items/251.png"
  },
  {
    "id": 252,
    "name": "#LITTLE_BAGGY_NAME",
    "description": "#LITTLE_BAGGY_DESCRIPTION",
    "image": "/items/252.png"
  },
  {
    "id": 253,
    "name": "#MAGIC_SCAB_NAME",
    "description": "#MAGIC_SCAB_DESCRIPTION",
    "image": "/items/253.png"
  },
  {
    "id": 254,
    "name": "#BLOOD_CLOT_NAME",
    "description": "#BLOOD_CLOT_DESCRIPTION",
    "image": "/items/254.png"
  },
  {
    "id": 255,
    "name": "#SCREW_NAME",
    "description": "#SCREW_DESCRIPTION",
    "image": "/items/255.png"
  },
  {
    "id": 256,
    "name": "#HOT_BOMBS_NAME",
    "description": "#HOT_BOMBS_DESCRIPTION",
    "image": "/items/256.png"
  },
  {
    "id": 257,
    "name": "#FIRE_MIND_NAME",
    "description": "#FIRE_MIND_DESCRIPTION",
    "image": "/items/257.png"
  },
  {
    "id": 258,
    "name": "#MISSING_NO_NAME",
    "description": "#MISSING_NO_DESCRIPTION",
    "image": "/items/258.png"
  },
  {
    "id": 259,
    "name": "#DARK_MATTER_NAME",
    "description": "#DARK_MATTER_DESCRIPTION",
    "image": "/items/259.png"
  },
  {
    "id": 260,
    "name": "#BLACK_CANDLE_NAME",
    "description": "#BLACK_CANDLE_DESCRIPTION",
    "image": "/items/260.png"
  },
  {
    "id": 261,
    "name": "#PROPTOSIS_NAME",
    "description": "#PROPTOSIS_DESCRIPTION",
    "image": "/items/261.png"
  },
  {
    "id": 262,
    "name": "#MISSING_PAGE_2_NAME",
    "description": "#MISSING_PAGE_2_DESCRIPTION",
    "image": "/items/262.png"
  },
  {
    "id": 263,
    "name": "#CLEAR_RUNE_NAME",
    "description": "#CLEAR_RUNE_DESCRIPTION",
    "image": "/items/263.png"
  },
  {
    "id": 264,
    "name": "#SMART_FLY_NAME",
    "description": "#SMART_FLY_DESCRIPTION",
    "image": "/items/264.png"
  },
  {
    "id": 265,
    "name": "#DRY_BABY_NAME",
    "description": "#DRY_BABY_DESCRIPTION",
    "image": "/items/265.png"
  },
  {
    "id": 266,
    "name": "#JUICY_SACK_NAME",
    "description": "#JUICY_SACK_DESCRIPTION",
    "image": "/items/266.png"
  },
  {
    "id": 267,
    "name": "#ROBOBABY_20_NAME",
    "description": "#ROBOBABY_20_DESCRIPTION",
    "image": "/items/267.png"
  },
  {
    "id": 268,
    "name": "#ROTTEN_BABY_NAME",
    "description": "#ROTTEN_BABY_DESCRIPTION",
    "image": "/items/268.png"
  },
  {
    "id": 269,
    "name": "#HEADLESS_BABY_NAME",
    "description": "#HEADLESS_BABY_DESCRIPTION",
    "image": "/items/269.png"
  },
  {
    "id": 270,
    "name": "#LEECH_NAME",
    "description": "#LEECH_DESCRIPTION",
    "image": "/items/270.png"
  },
  {
    "id": 271,
    "name": "#MYSTERY_SACK_NAME",
    "description": "#MYSTERY_SACK_DESCRIPTION",
    "image": "/items/271.png"
  },
  {
    "id": 272,
    "name": "#BBF_NAME",
    "description": "#BBF_DESCRIPTION",
    "image": "/items/272.png"
  },
  {
    "id": 273,
    "name": "#BOBS_BRAIN_NAME",
    "description": "#BOBS_BRAIN_DESCRIPTION",
    "image": "/items/273.png"
  },
  {
    "id": 274,
    "name": "#BEST_BUD_NAME",
    "description": "#BEST_BUD_DESCRIPTION",
    "image": "/items/274.png"
  },
  {
    "id": 275,
    "name": "#LIL_BRIMSTONE_NAME",
    "description": "#LIL_BRIMSTONE_DESCRIPTION",
    "image": "/items/275.png"
  },
  {
    "id": 276,
    "name": "#ISAACS_HEART_NAME",
    "description": "#ISAACS_HEART_DESCRIPTION",
    "image": "/items/276.png"
  },
  {
    "id": 277,
    "name": "#LIL_HAUNT_NAME",
    "description": "#LIL_HAUNT_DESCRIPTION",
    "image": "/items/277.png"
  },
  {
    "id": 278,
    "name": "#DARK_BUM_NAME",
    "description": "#DARK_BUM_DESCRIPTION",
    "image": "/items/278.png"
  },
  {
    "id": 279,
    "name": "#BIG_FAN_NAME",
    "description": "#BIG_FAN_DESCRIPTION",
    "image": "/items/279.png"
  },
  {
    "id": 280,
    "name": "#SISSY_LONGLEGS_NAME",
    "description": "#SISSY_LONGLEGS_DESCRIPTION",
    "image": "/items/280.png"
  },
  {
    "id": 281,
    "name": "#PUNCHING_BAG_NAME",
    "description": "#PUNCHING_BAG_DESCRIPTION",
    "image": "/items/281.png"
  },
  {
    "id": 282,
    "name": "#HOW_TO_JUMP_NAME",
    "description": "#HOW_TO_JUMP_DESCRIPTION",
    "image": "/items/282.png"
  },
  {
    "id": 283,
    "name": "#D100_NAME",
    "description": "#D100_DESCRIPTION",
    "image": "/items/283.png"
  },
  {
    "id": 284,
    "name": "#D4_NAME",
    "description": "#D4_DESCRIPTION",
    "image": "/items/284.png"
  },
  {
    "id": 285,
    "name": "#D10_NAME",
    "description": "#D10_DESCRIPTION",
    "image": "/items/285.png"
  },
  {
    "id": 286,
    "name": "#BLANK_CARD_NAME",
    "description": "#BLANK_CARD_DESCRIPTION",
    "image": "/items/286.png"
  },
  {
    "id": 287,
    "name": "#BOOK_OF_SECRETS_NAME",
    "description": "#BOOK_OF_SECRETS_DESCRIPTION",
    "image": "/items/287.png"
  },
  {
    "id": 288,
    "name": "#BOX_OF_SPIDERS_NAME",
    "description": "#BOX_OF_SPIDERS_DESCRIPTION",
    "image": "/items/288.png"
  },
  {
    "id": 289,
    "name": "#RED_CANDLE_NAME",
    "description": "#RED_CANDLE_DESCRIPTION",
    "image": "/items/289.png"
  },
  {
    "id": 290,
    "name": "#THE_JAR_NAME",
    "description": "#THE_JAR_DESCRIPTION",
    "image": "/items/290.png"
  },
  {
    "id": 291,
    "name": "#FLUSH_NAME",
    "description": "#FLUSH_DESCRIPTION",
    "image": "/items/291.png"
  },
  {
    "id": 292,
    "name": "#SATANIC_BIBLE_NAME",
    "description": "#SATANIC_BIBLE_DESCRIPTION",
    "image": "/items/292.png"
  },
  {
    "id": 293,
    "name": "#HEAD_OF_KRAMPUS_NAME",
    "description": "#HEAD_OF_KRAMPUS_DESCRIPTION",
    "image": "/items/293.png"
  },
  {
    "id": 294,
    "name": "#BUTTER_BEAN_NAME",
    "description": "#BUTTER_BEAN_DESCRIPTION",
    "image": "/items/294.png"
  },
  {
    "id": 295,
    "name": "#MAGIC_FINGERS_NAME",
    "description": "#MAGIC_FINGERS_DESCRIPTION",
    "image": "/items/295.png"
  },
  {
    "id": 296,
    "name": "#CONVERTER_NAME",
    "description": "#CONVERTER_DESCRIPTION",
    "image": "/items/296.png"
  },
  {
    "id": 297,
    "name": "#PANDORAS_BOX_NAME",
    "description": "#PANDORAS_BOX_DESCRIPTION",
    "image": "/items/297.png"
  },
  {
    "id": 298,
    "name": "#UNICORN_STUMP_NAME",
    "description": "#UNICORN_STUMP_DESCRIPTION",
    "image": "/items/298.png"
  },
  {
    "id": 299,
    "name": "#TAURUS_NAME",
    "description": "#TAURUS_DESCRIPTION",
    "image": "/items/299.png"
  },
  {
    "id": 300,
    "name": "#ARIES_NAME",
    "description": "#ARIES_DESCRIPTION",
    "image": "/items/300.png"
  },
  {
    "id": 301,
    "name": "#CANCER_NAME",
    "description": "#CANCER_DESCRIPTION",
    "image": "/items/301.png"
  },
  {
    "id": 302,
    "name": "#LEO_NAME",
    "description": "#LEO_DESCRIPTION",
    "image": "/items/302.png"
  },
  {
    "id": 303,
    "name": "#VIRGO_NAME",
    "description": "#VIRGO_DESCRIPTION",
    "image": "/items/303.png"
  },
  {
    "id": 304,
    "name": "#LIBRA_NAME",
    "description": "#LIBRA_DESCRIPTION",
    "image": "/items/304.png"
  },
  {
    "id": 305,
    "name": "#SCORPIO_NAME",
    "description": "#SCORPIO_DESCRIPTION",
    "image": "/items/305.png"
  },
  {
    "id": 306,
    "name": "#SAGITTARIUS_NAME",
    "description": "#SAGITTARIUS_DESCRIPTION",
    "image": "/items/306.png"
  },
  {
    "id": 307,
    "name": "#CAPRICORN_NAME",
    "description": "#CAPRICORN_DESCRIPTION",
    "image": "/items/307.png"
  },
  {
    "id": 308,
    "name": "#AQUARIUS_NAME",
    "description": "#AQUARIUS_DESCRIPTION",
    "image": "/items/308.png"
  },
  {
    "id": 309,
    "name": "#PISCES_NAME",
    "description": "#PISCES_DESCRIPTION",
    "image": "/items/309.png"
  },
  {
    "id": 310,
    "name": "#EVES_MASCARA_NAME",
    "description": "#EVES_MASCARA_DESCRIPTION",
    "image": "/items/310.png"
  },
  {
    "id": 311,
    "name": "#JUDAS_SHADOW_NAME",
    "description": "#JUDAS_SHADOW_DESCRIPTION",
    "image": "/items/311.png"
  },
  {
    "id": 312,
    "name": "#MAGGYS_BOW_NAME",
    "description": "#MAGGYS_BOW_DESCRIPTION",
    "image": "/items/312.png"
  },
  {
    "id": 313,
    "name": "#HOLY_MANTLE_NAME",
    "description": "#HOLY_MANTLE_DESCRIPTION",
    "image": "/items/313.png"
  },
  {
    "id": 314,
    "name": "#THUNDER_THIGHS_NAME",
    "description": "#THUNDER_THIGHS_DESCRIPTION",
    "image": "/items/314.png"
  },
  {
    "id": 315,
    "name": "#STRANGE_ATTRACTOR_NAME",
    "description": "#STRANGE_ATTRACTOR_DESCRIPTION",
    "image": "/items/315.png"
  },
  {
    "id": 316,
    "name": "#CURSED_EYE_NAME",
    "description": "#CURSED_EYE_DESCRIPTION",
    "image": "/items/316.png"
  },
  {
    "id": 317,
    "name": "#MYSTERIOUS_LIQUID_NAME",
    "description": "#MYSTERIOUS_LIQUID_DESCRIPTION",
    "image": "/items/317.png"
  },
  {
    "id": 318,
    "name": "#GEMINI_NAME",
    "description": "#GEMINI_DESCRIPTION",
    "image": "/items/318.png"
  },
  {
    "id": 319,
    "name": "#CAINS_OTHER_EYE_NAME",
    "description": "#CAINS_OTHER_EYE_DESCRIPTION",
    "image": "/items/319.png"
  },
  {
    "id": 320,
    "name": "#S_ONLY_FRIEND_NAME",
    "description": "#S_ONLY_FRIEND_DESCRIPTION",
    "image": "/items/320.png"
  },
  {
    "id": 321,
    "name": "#SAMSONS_CHAINS_NAME",
    "description": "#SAMSONS_CHAINS_DESCRIPTION",
    "image": "/items/321.png"
  },
  {
    "id": 322,
    "name": "#MONGO_BABY_NAME",
    "description": "#MONGO_BABY_DESCRIPTION",
    "image": "/items/322.png"
  },
  {
    "id": 323,
    "name": "#ISAACS_TEARS_NAME",
    "description": "#ISAACS_TEARS_DESCRIPTION",
    "image": "/items/323.png"
  },
  {
    "id": 324,
    "name": "#UNDEFINED_NAME",
    "description": "#UNDEFINED_DESCRIPTION",
    "image": "/items/324.png"
  },
  {
    "id": 325,
    "name": "#SCISSORS_NAME",
    "description": "#SCISSORS_DESCRIPTION",
    "image": "/items/325.png"
  },
  {
    "id": 326,
    "name": "#BREATH_OF_LIFE_NAME",
    "description": "#BREATH_OF_LIFE_DESCRIPTION",
    "image": "/items/326.png"
  },
  {
    "id": 327,
    "name": "#THE_POLAROID_NAME",
    "description": "#THE_POLAROID_DESCRIPTION",
    "image": "/items/327.png"
  },
  {
    "id": 328,
    "name": "#THE_NEGATIVE_NAME",
    "description": "#THE_NEGATIVE_DESCRIPTION",
    "image": "/items/328.png"
  },
  {
    "id": 329,
    "name": "#THE_LUDOVICO_TECHNIQUE_NAME",
    "description": "#THE_LUDOVICO_TECHNIQUE_DESCRIPTION",
    "image": "/items/329.png"
  },
  {
    "id": 330,
    "name": "#SOY_MILK_NAME",
    "description": "#SOY_MILK_DESCRIPTION",
    "image": "/items/330.png"
  },
  {
    "id": 331,
    "name": "#GODHEAD_NAME",
    "description": "#GODHEAD_DESCRIPTION",
    "image": "/items/331.png"
  },
  {
    "id": 332,
    "name": "#LAZARUS_RAGS_NAME",
    "description": "#LAZARUS_RAGS_DESCRIPTION",
    "image": "/items/332.png"
  },
  {
    "id": 333,
    "name": "#THE_MIND_NAME",
    "description": "#THE_MIND_DESCRIPTION",
    "image": "/items/333.png"
  },
  {
    "id": 334,
    "name": "#THE_BODY_NAME",
    "description": "#THE_BODY_DESCRIPTION",
    "image": "/items/334.png"
  },
  {
    "id": 335,
    "name": "#THE_SOUL_NAME",
    "description": "#THE_SOUL_DESCRIPTION",
    "image": "/items/335.png"
  },
  {
    "id": 336,
    "name": "#DEAD_ONION_NAME",
    "description": "#DEAD_ONION_DESCRIPTION",
    "image": "/items/336.png"
  },
  {
    "id": 337,
    "name": "#BROKEN_WATCH_NAME",
    "description": "#BROKEN_WATCH_DESCRIPTION",
    "image": "/items/337.png"
  },
  {
    "id": 338,
    "name": "#THE_BOOMERANG_NAME",
    "description": "#THE_BOOMERANG_DESCRIPTION",
    "image": "/items/338.png"
  },
  {
    "id": 339,
    "name": "#SAFETY_PIN_NAME",
    "description": "#SAFETY_PIN_DESCRIPTION",
    "image": "/items/339.png"
  },
  {
    "id": 340,
    "name": "#CAFFEINE_PILL_NAME",
    "description": "#CAFFEINE_PILL_DESCRIPTION",
    "image": "/items/340.png"
  },
  {
    "id": 341,
    "name": "#TORN_PHOTO_NAME",
    "description": "#TORN_PHOTO_DESCRIPTION",
    "image": "/items/341.png"
  },
  {
    "id": 342,
    "name": "#BLUE_CAP_NAME",
    "description": "#BLUE_CAP_DESCRIPTION",
    "image": "/items/342.png"
  },
  {
    "id": 343,
    "name": "#LATCH_KEY_NAME",
    "description": "#LATCH_KEY_DESCRIPTION",
    "image": "/items/343.png"
  },
  {
    "id": 344,
    "name": "#MATCH_BOOK_NAME",
    "description": "#MATCH_BOOK_DESCRIPTION",
    "image": "/items/344.png"
  },
  {
    "id": 345,
    "name": "#SYNTHOIL_NAME",
    "description": "#SYNTHOIL_DESCRIPTION",
    "image": "/items/345.png"
  },
  {
    "id": 346,
    "name": "#A_SNACK_NAME",
    "description": "#A_SNACK_DESCRIPTION",
    "image": "/items/346.png"
  },
  {
    "id": 347,
    "name": "#DIPLOPIA_NAME",
    "description": "#DIPLOPIA_DESCRIPTION",
    "image": "/items/347.png"
  },
  {
    "id": 348,
    "name": "#PLACEBO_NAME",
    "description": "#PLACEBO_DESCRIPTION",
    "image": "/items/348.png"
  },
  {
    "id": 349,
    "name": "#WOODEN_NICKEL_NAME",
    "description": "#WOODEN_NICKEL_DESCRIPTION",
    "image": "/items/349.png"
  },
  {
    "id": 350,
    "name": "#TOXIC_SHOCK_NAME",
    "description": "#TOXIC_SHOCK_DESCRIPTION",
    "image": "/items/350.png"
  },
  {
    "id": 351,
    "name": "#MEGA_BEAN_NAME",
    "description": "#MEGA_BEAN_DESCRIPTION",
    "image": "/items/351.png"
  },
  {
    "id": 352,
    "name": "#GLASS_CANNON_NAME",
    "description": "#GLASS_CANNON_DESCRIPTION",
    "image": "/items/352.png"
  },
  {
    "id": 353,
    "name": "#BOMBER_BOY_NAME",
    "description": "#BOMBER_BOY_DESCRIPTION",
    "image": "/items/353.png"
  },
  {
    "id": 354,
    "name": "#CRACK_JACKS_NAME",
    "description": "#CRACK_JACKS_DESCRIPTION",
    "image": "/items/354.png"
  },
  {
    "id": 355,
    "name": "#MOMS_PEARLS_NAME",
    "description": "#MOMS_PEARLS_DESCRIPTION",
    "image": "/items/355.png"
  },
  {
    "id": 356,
    "name": "#CAR_BATTERY_NAME",
    "description": "#CAR_BATTERY_DESCRIPTION",
    "image": "/items/356.png"
  },
  {
    "id": 357,
    "name": "#BOX_OF_FRIENDS_NAME",
    "description": "#BOX_OF_FRIENDS_DESCRIPTION",
    "image": "/items/357.png"
  },
  {
    "id": 358,
    "name": "#THE_WIZ_NAME",
    "description": "#THE_WIZ_DESCRIPTION",
    "image": "/items/358.png"
  },
  {
    "id": 359,
    "name": "#8_INCH_NAILS_NAME",
    "description": "#8_INCH_NAILS_DESCRIPTION",
    "image": "/items/359.png"
  },
  {
    "id": 360,
    "name": "#INCUBUS_NAME",
    "description": "#INCUBUS_DESCRIPTION",
    "image": "/items/360.png"
  },
  {
    "id": 361,
    "name": "#FATES_REWARD_NAME",
    "description": "#FATES_REWARD_DESCRIPTION",
    "image": "/items/361.png"
  },
  {
    "id": 362,
    "name": "#LIL_CHEST_NAME",
    "description": "#LIL_CHEST_DESCRIPTION",
    "image": "/items/362.png"
  },
  {
    "id": 363,
    "name": "#SWORN_PROTECTOR_NAME",
    "description": "#SWORN_PROTECTOR_DESCRIPTION",
    "image": "/items/363.png"
  },
  {
    "id": 364,
    "name": "#FRIEND_ZONE_NAME",
    "description": "#FRIEND_ZONE_DESCRIPTION",
    "image": "/items/364.png"
  },
  {
    "id": 365,
    "name": "#LOST_FLY_NAME",
    "description": "#LOST_FLY_DESCRIPTION",
    "image": "/items/365.png"
  },
  {
    "id": 366,
    "name": "#SCATTER_BOMBS_NAME",
    "description": "#SCATTER_BOMBS_DESCRIPTION",
    "image": "/items/366.png"
  },
  {
    "id": 367,
    "name": "#STICKY_BOMBS_NAME",
    "description": "#STICKY_BOMBS_DESCRIPTION",
    "image": "/items/367.png"
  },
  {
    "id": 368,
    "name": "#EPIPHORA_NAME",
    "description": "#EPIPHORA_DESCRIPTION",
    "image": "/items/368.png"
  },
  {
    "id": 369,
    "name": "#CONTINUUM_NAME",
    "description": "#CONTINUUM_DESCRIPTION",
    "image": "/items/369.png"
  },
  {
    "id": 370,
    "name": "#MR_DOLLY_NAME",
    "description": "#MR_DOLLY_DESCRIPTION",
    "image": "/items/370.png"
  },
  {
    "id": 371,
    "name": "#CURSE_OF_THE_TOWER_NAME",
    "description": "#CURSE_OF_THE_TOWER_DESCRIPTION",
    "image": "/items/371.png"
  },
  {
    "id": 372,
    "name": "#CHARGED_BABY_NAME",
    "description": "#CHARGED_BABY_DESCRIPTION",
    "image": "/items/372.png"
  },
  {
    "id": 373,
    "name": "#DEAD_EYE_NAME",
    "description": "#DEAD_EYE_DESCRIPTION",
    "image": "/items/373.png"
  },
  {
    "id": 374,
    "name": "#HOLY_LIGHT_NAME",
    "description": "#HOLY_LIGHT_DESCRIPTION",
    "image": "/items/374.png"
  },
  {
    "id": 375,
    "name": "#HOST_HAT_NAME",
    "description": "#HOST_HAT_DESCRIPTION",
    "image": "/items/375.png"
  },
  {
    "id": 376,
    "name": "#RESTOCK_NAME",
    "description": "#RESTOCK_DESCRIPTION",
    "image": "/items/376.png"
  },
  {
    "id": 377,
    "name": "#BURSTING_SACK_NAME",
    "description": "#BURSTING_SACK_DESCRIPTION",
    "image": "/items/377.png"
  },
  {
    "id": 378,
    "name": "#NUMBER_TWO_NAME",
    "description": "#NUMBER_TWO_DESCRIPTION",
    "image": "/items/378.png"
  },
  {
    "id": 379,
    "name": "#PUPULA_DUPLEX_NAME",
    "description": "#PUPULA_DUPLEX_DESCRIPTION",
    "image": "/items/379.png"
  },
  {
    "id": 380,
    "name": "#PAY_TO_PLAY_NAME",
    "description": "#PAY_TO_PLAY_DESCRIPTION",
    "image": "/items/380.png"
  },
  {
    "id": 381,
    "name": "#EDENS_BLESSING_NAME",
    "description": "#EDENS_BLESSING_DESCRIPTION",
    "image": "/items/381.png"
  },
  {
    "id": 382,
    "name": "#FRIENDLY_BALL_NAME",
    "description": "#FRIENDLY_BALL_DESCRIPTION",
    "image": "/items/382.png"
  },
  {
    "id": 383,
    "name": "#TEAR_DETONATOR_NAME",
    "description": "#TEAR_DETONATOR_DESCRIPTION",
    "image": "/items/383.png"
  },
  {
    "id": 384,
    "name": "#LIL_GURDY_NAME",
    "description": "#LIL_GURDY_DESCRIPTION",
    "image": "/items/384.png"
  },
  {
    "id": 385,
    "name": "#BUMBO_NAME",
    "description": "#BUMBO_DESCRIPTION",
    "image": "/items/385.png"
  },
  {
    "id": 386,
    "name": "#D12_NAME",
    "description": "#D12_DESCRIPTION",
    "image": "/items/386.png"
  },
  {
    "id": 387,
    "name": "#CENSER_NAME",
    "description": "#CENSER_DESCRIPTION",
    "image": "/items/387.png"
  },
  {
    "id": 388,
    "name": "#KEY_BUM_NAME",
    "description": "#KEY_BUM_DESCRIPTION",
    "image": "/items/388.png"
  },
  {
    "id": 389,
    "name": "#RUNE_BAG_NAME",
    "description": "#RUNE_BAG_DESCRIPTION",
    "image": "/items/389.png"
  },
  {
    "id": 390,
    "name": "#SERAPHIM_NAME",
    "description": "#SERAPHIM_DESCRIPTION",
    "image": "/items/390.png"
  },
  {
    "id": 391,
    "name": "#BETRAYAL_NAME",
    "description": "#BETRAYAL_DESCRIPTION",
    "image": "/items/391.png"
  },
  {
    "id": 392,
    "name": "#ZODIAC_NAME",
    "description": "#ZODIAC_DESCRIPTION",
    "image": "/items/392.png"
  },
  {
    "id": 393,
    "name": "#SERPENTS_KISS_NAME",
    "description": "#SERPENTS_KISS_DESCRIPTION",
    "image": "/items/393.png"
  },
  {
    "id": 394,
    "name": "#MARKED_NAME",
    "description": "#MARKED_DESCRIPTION",
    "image": "/items/394.png"
  },
  {
    "id": 395,
    "name": "#TECH_X_NAME",
    "description": "#TECH_X_DESCRIPTION",
    "image": "/items/395.png"
  },
  {
    "id": 396,
    "name": "#VENTRICLE_RAZOR_NAME",
    "description": "#VENTRICLE_RAZOR_DESCRIPTION",
    "image": "/items/396.png"
  },
  {
    "id": 397,
    "name": "#TRACTOR_BEAM_NAME",
    "description": "#TRACTOR_BEAM_DESCRIPTION",
    "image": "/items/397.png"
  },
  {
    "id": 398,
    "name": "#GODS_FLESH_NAME",
    "description": "#GODS_FLESH_DESCRIPTION",
    "image": "/items/398.png"
  },
  {
    "id": 399,
    "name": "#MAW_OF_THE_VOID_NAME",
    "description": "#MAW_OF_THE_VOID_DESCRIPTION",
    "image": "/items/399.png"
  },
  {
    "id": 400,
    "name": "#SPEAR_OF_DESTINY_NAME",
    "description": "#SPEAR_OF_DESTINY_DESCRIPTION",
    "image": "/items/400.png"
  },
  {
    "id": 401,
    "name": "#EXPLOSIVO_NAME",
    "description": "#EXPLOSIVO_DESCRIPTION",
    "image": "/items/401.png"
  },
  {
    "id": 402,
    "name": "#CHAOS_NAME",
    "description": "#CHAOS_DESCRIPTION",
    "image": "/items/402.png"
  },
  {
    "id": 403,
    "name": "#SPIDER_MOD_NAME",
    "description": "#SPIDER_MOD_DESCRIPTION",
    "image": "/items/403.png"
  },
  {
    "id": 404,
    "name": "#FARTING_BABY_NAME",
    "description": "#FARTING_BABY_DESCRIPTION",
    "image": "/items/404.png"
  },
  {
    "id": 405,
    "name": "#GB_BUG_NAME",
    "description": "#GB_BUG_DESCRIPTION",
    "image": "/items/405.png"
  },
  {
    "id": 406,
    "name": "#D8_NAME",
    "description": "#D8_DESCRIPTION",
    "image": "/items/406.png"
  },
  {
    "id": 407,
    "name": "#PURITY_NAME",
    "description": "#PURITY_DESCRIPTION",
    "image": "/items/407.png"
  },
  {
    "id": 408,
    "name": "#ATHAME_NAME",
    "description": "#ATHAME_DESCRIPTION",
    "image": "/items/408.png"
  },
  {
    "id": 409,
    "name": "#EMPTY_VESSEL_NAME",
    "description": "#EMPTY_VESSEL_DESCRIPTION",
    "image": "/items/409.png"
  },
  {
    "id": 410,
    "name": "#EVIL_EYE_NAME",
    "description": "#EVIL_EYE_DESCRIPTION",
    "image": "/items/410.png"
  },
  {
    "id": 411,
    "name": "#LUSTY_BLOOD_NAME",
    "description": "#LUSTY_BLOOD_DESCRIPTION",
    "image": "/items/411.png"
  },
  {
    "id": 412,
    "name": "#CAMBION_CONCEPTION_NAME",
    "description": "#CAMBION_CONCEPTION_DESCRIPTION",
    "image": "/items/412.png"
  },
  {
    "id": 413,
    "name": "#IMMACULATE_CONCEPTION_NAME",
    "description": "#IMMACULATE_CONCEPTION_DESCRIPTION",
    "image": "/items/413.png"
  },
  {
    "id": 414,
    "name": "#MORE_OPTIONS_NAME",
    "description": "#MORE_OPTIONS_DESCRIPTION",
    "image": "/items/414.png"
  },
  {
    "id": 415,
    "name": "#CROWN_OF_LIGHT_NAME",
    "description": "#CROWN_OF_LIGHT_DESCRIPTION",
    "image": "/items/415.png"
  },
  {
    "id": 416,
    "name": "#DEEP_POCKETS_NAME",
    "description": "#DEEP_POCKETS_DESCRIPTION",
    "image": "/items/416.png"
  },
  {
    "id": 417,
    "name": "#SUCCUBUS_NAME",
    "description": "#SUCCUBUS_DESCRIPTION",
    "image": "/items/417.png"
  },
  {
    "id": 418,
    "name": "#FRUIT_CAKE_NAME",
    "description": "#FRUIT_CAKE_DESCRIPTION",
    "image": "/items/418.png"
  },
  {
    "id": 419,
    "name": "#TELEPORT_20_NAME",
    "description": "#TELEPORT_20_DESCRIPTION",
    "image": "/items/419.png"
  },
  {
    "id": 420,
    "name": "#BLACK_POWDER_NAME",
    "description": "#BLACK_POWDER_DESCRIPTION",
    "image": "/items/420.png"
  },
  {
    "id": 421,
    "name": "#KIDNEY_BEAN_NAME",
    "description": "#KIDNEY_BEAN_DESCRIPTION",
    "image": "/items/421.png"
  },
  {
    "id": 422,
    "name": "#GLOWING_HOUR_GLASS_NAME",
    "description": "#GLOWING_HOUR_GLASS_DESCRIPTION",
    "image": "/items/422.png"
  },
  {
    "id": 423,
    "name": "#CIRCLE_OF_PROTECTION_NAME",
    "description": "#CIRCLE_OF_PROTECTION_DESCRIPTION",
    "image": "/items/423.png"
  },
  {
    "id": 424,
    "name": "#SACK_HEAD_NAME",
    "description": "#SACK_HEAD_DESCRIPTION",
    "image": "/items/424.png"
  },
  {
    "id": 425,
    "name": "#NIGHT_LIGHT_NAME",
    "description": "#NIGHT_LIGHT_DESCRIPTION",
    "image": "/items/425.png"
  },
  {
    "id": 426,
    "name": "#OBSESSED_FAN_NAME",
    "description": "#OBSESSED_FAN_DESCRIPTION",
    "image": "/items/426.png"
  },
  {
    "id": 427,
    "name": "#MINE_CRAFTER_NAME",
    "description": "#MINE_CRAFTER_DESCRIPTION",
    "image": "/items/427.png"
  },
  {
    "id": 428,
    "name": "#PJS_NAME",
    "description": "#PJS_DESCRIPTION",
    "image": "/items/428.png"
  },
  {
    "id": 429,
    "name": "#HEAD_OF_THE_KEEPER_NAME",
    "description": "#HEAD_OF_THE_KEEPER_DESCRIPTION",
    "image": "/items/429.png"
  },
  {
    "id": 430,
    "name": "#PAPA_FLY_NAME",
    "description": "#PAPA_FLY_DESCRIPTION",
    "image": "/items/430.png"
  },
  {
    "id": 431,
    "name": "#MULTIDIMENSIONAL_BABY_NAME",
    "description": "#MULTIDIMENSIONAL_BABY_DESCRIPTION",
    "image": "/items/431.png"
  },
  {
    "id": 432,
    "name": "#GLITTER_BOMBS_NAME",
    "description": "#GLITTER_BOMBS_DESCRIPTION",
    "image": "/items/432.png"
  },
  {
    "id": 433,
    "name": "#MY_SHADOW_NAME",
    "description": "#MY_SHADOW_DESCRIPTION",
    "image": "/items/433.png"
  },
  {
    "id": 434,
    "name": "#JAR_OF_FLIES_NAME",
    "description": "#JAR_OF_FLIES_DESCRIPTION",
    "image": "/items/434.png"
  },
  {
    "id": 435,
    "name": "#LIL_LOKI_NAME",
    "description": "#LIL_LOKI_DESCRIPTION",
    "image": "/items/435.png"
  },
  {
    "id": 436,
    "name": "#MILK_NAME",
    "description": "#MILK_DESCRIPTION",
    "image": "/items/436.png"
  },
  {
    "id": 437,
    "name": "#D7_NAME",
    "description": "#D7_DESCRIPTION",
    "image": "/items/437.png"
  },
  {
    "id": 438,
    "name": "#BINKY_NAME",
    "description": "#BINKY_DESCRIPTION",
    "image": "/items/438.png"
  },
  {
    "id": 439,
    "name": "#MOMS_BOX_NAME",
    "description": "#MOMS_BOX_DESCRIPTION",
    "image": "/items/439.png"
  },
  {
    "id": 440,
    "name": "#KIDNEY_STONE_NAME",
    "description": "#KIDNEY_STONE_DESCRIPTION",
    "image": "/items/440.png"
  },
  {
    "id": 441,
    "name": "#MEGA_BLAST_NAME",
    "description": "#MEGA_BLAST_DESCRIPTION",
    "image": "/items/441.png"
  },
  {
    "id": 442,
    "name": "#DARK_PRINCES_CROWN_NAME",
    "description": "#DARK_PRINCES_CROWN_DESCRIPTION",
    "image": "/items/442.png"
  },
  {
    "id": 443,
    "name": "#APPLE_NAME",
    "description": "#APPLE_DESCRIPTION",
    "image": "/items/443.png"
  },
  {
    "id": 444,
    "name": "#LEAD_PENCIL_NAME",
    "description": "#LEAD_PENCIL_DESCRIPTION",
    "image": "/items/444.png"
  },
  {
    "id": 445,
    "name": "#DOG_TOOTH_NAME",
    "description": "#DOG_TOOTH_DESCRIPTION",
    "image": "/items/445.png"
  },
  {
    "id": 446,
    "name": "#DEAD_TOOTH_NAME",
    "description": "#DEAD_TOOTH_DESCRIPTION",
    "image": "/items/446.png"
  },
  {
    "id": 447,
    "name": "#LINGER_BEAN_NAME",
    "description": "#LINGER_BEAN_DESCRIPTION",
    "image": "/items/447.png"
  },
  {
    "id": 448,
    "name": "#SHARD_OF_GLASS_NAME",
    "description": "#SHARD_OF_GLASS_DESCRIPTION",
    "image": "/items/448.png"
  },
  {
    "id": 449,
    "name": "#METAL_PLATE_NAME",
    "description": "#METAL_PLATE_DESCRIPTION",
    "image": "/items/449.png"
  },
  {
    "id": 450,
    "name": "#EYE_OF_GREED_NAME",
    "description": "#EYE_OF_GREED_DESCRIPTION",
    "image": "/items/450.png"
  },
  {
    "id": 451,
    "name": "#TAROT_CLOTH_NAME",
    "description": "#TAROT_CLOTH_DESCRIPTION",
    "image": "/items/451.png"
  },
  {
    "id": 452,
    "name": "#VARICOSE_VEINS_NAME",
    "description": "#VARICOSE_VEINS_DESCRIPTION",
    "image": "/items/452.png"
  },
  {
    "id": 453,
    "name": "#COMPOUND_FRACTURE_NAME",
    "description": "#COMPOUND_FRACTURE_DESCRIPTION",
    "image": "/items/453.png"
  },
  {
    "id": 454,
    "name": "#POLYDACTYLY_NAME",
    "description": "#POLYDACTYLY_DESCRIPTION",
    "image": "/items/454.png"
  },
  {
    "id": 455,
    "name": "#DADS_LOST_COIN_NAME",
    "description": "#DADS_LOST_COIN_DESCRIPTION",
    "image": "/items/455.png"
  },
  {
    "id": 456,
    "name": "#MIDNIGHT_SNACK_NAME",
    "description": "#MIDNIGHT_SNACK_DESCRIPTION",
    "image": "/items/456.png"
  },
  {
    "id": 457,
    "name": "#CONE_HEAD_NAME",
    "description": "#CONE_HEAD_DESCRIPTION",
    "image": "/items/457.png"
  },
  {
    "id": 458,
    "name": "#BELLY_BUTTON_NAME",
    "description": "#BELLY_BUTTON_DESCRIPTION",
    "image": "/items/458.png"
  },
  {
    "id": 459,
    "name": "#SINUS_INFECTION_NAME",
    "description": "#SINUS_INFECTION_DESCRIPTION",
    "image": "/items/459.png"
  },
  {
    "id": 460,
    "name": "#GLAUCOMA_NAME",
    "description": "#GLAUCOMA_DESCRIPTION",
    "image": "/items/460.png"
  },
  {
    "id": 461,
    "name": "#PARASITOID_NAME",
    "description": "#PARASITOID_DESCRIPTION",
    "image": "/items/461.png"
  },
  {
    "id": 462,
    "name": "#EYE_OF_BELIAL_NAME",
    "description": "#EYE_OF_BELIAL_DESCRIPTION",
    "image": "/items/462.png"
  },
  {
    "id": 463,
    "name": "#SULFURIC_ACID_NAME",
    "description": "#SULFURIC_ACID_DESCRIPTION",
    "image": "/items/463.png"
  },
  {
    "id": 464,
    "name": "#GLYPH_OF_BALANCE_NAME",
    "description": "#GLYPH_OF_BALANCE_DESCRIPTION",
    "image": "/items/464.png"
  },
  {
    "id": 465,
    "name": "#ANALOG_STICK_NAME",
    "description": "#ANALOG_STICK_DESCRIPTION",
    "image": "/items/465.png"
  },
  {
    "id": 466,
    "name": "#CONTAGION_NAME",
    "description": "#CONTAGION_DESCRIPTION",
    "image": "/items/466.png"
  },
  {
    "id": 467,
    "name": "#FINGER_NAME",
    "description": "#FINGER_DESCRIPTION",
    "image": "/items/467.png"
  },
  {
    "id": 468,
    "name": "#SHADE_NAME",
    "description": "#SHADE_DESCRIPTION",
    "image": "/items/468.png"
  },
  {
    "id": 469,
    "name": "#DEPRESSION_NAME",
    "description": "#DEPRESSION_DESCRIPTION",
    "image": "/items/469.png"
  },
  {
    "id": 470,
    "name": "#HUSHY_NAME",
    "description": "#HUSHY_DESCRIPTION",
    "image": "/items/470.png"
  },
  {
    "id": 471,
    "name": "#LIL_MONSTRO_NAME",
    "description": "#LIL_MONSTRO_DESCRIPTION",
    "image": "/items/471.png"
  },
  {
    "id": 472,
    "name": "#KING_BABY_NAME",
    "description": "#KING_BABY_DESCRIPTION",
    "image": "/items/472.png"
  },
  {
    "id": 473,
    "name": "#BIG_CHUBBY_NAME",
    "description": "#BIG_CHUBBY_DESCRIPTION",
    "image": "/items/473.png"
  },
  {
    "id": 474,
    "name": "#BROKEN_GLASS_CANNON_NAME",
    "description": "#BROKEN_GLASS_CANNON_DESCRIPTION",
    "image": "/items/474.png"
  },
  {
    "id": 475,
    "name": "#PLAN_C_NAME",
    "description": "#PLAN_C_DESCRIPTION",
    "image": "/items/475.png"
  },
  {
    "id": 476,
    "name": "#D1_NAME",
    "description": "#D1_DESCRIPTION",
    "image": "/items/476.png"
  },
  {
    "id": 477,
    "name": "#VOID_NAME",
    "description": "#VOID_DESCRIPTION",
    "image": "/items/477.png"
  },
  {
    "id": 478,
    "name": "#PAUSE_NAME",
    "description": "#PAUSE_DESCRIPTION",
    "image": "/items/478.png"
  },
  {
    "id": 479,
    "name": "#SMELTER_NAME",
    "description": "#SMELTER_DESCRIPTION",
    "image": "/items/479.png"
  },
  {
    "id": 480,
    "name": "#COMPOST_NAME",
    "description": "#COMPOST_DESCRIPTION",
    "image": "/items/480.png"
  },
  {
    "id": 481,
    "name": "#DATAMINER_NAME",
    "description": "#DATAMINER_DESCRIPTION",
    "image": "/items/481.png"
  },
  {
    "id": 482,
    "name": "#CLICKER_NAME",
    "description": "#CLICKER_DESCRIPTION",
    "image": "/items/482.png"
  },
  {
    "id": 483,
    "name": "#MAMA_MEGA_NAME",
    "description": "#MAMA_MEGA_DESCRIPTION",
    "image": "/items/483.png"
  },
  {
    "id": 484,
    "name": "#WAIT_WHAT_NAME",
    "description": "#WAIT_WHAT_DESCRIPTION",
    "image": "/items/484.png"
  },
  {
    "id": 485,
    "name": "#CROOKED_PENNY_NAME",
    "description": "#CROOKED_PENNY_DESCRIPTION",
    "image": "/items/485.png"
  },
  {
    "id": 486,
    "name": "#DULL_RAZOR_NAME",
    "description": "#DULL_RAZOR_DESCRIPTION",
    "image": "/items/486.png"
  },
  {
    "id": 487,
    "name": "#POTATO_PEELER_NAME",
    "description": "#POTATO_PEELER_DESCRIPTION",
    "image": "/items/487.png"
  },
  {
    "id": 488,
    "name": "#METRONOME_NAME",
    "description": "#METRONOME_DESCRIPTION",
    "image": "/items/488.png"
  },
  {
    "id": 489,
    "name": "#D_INFINITY_NAME",
    "description": "#D_INFINITY_DESCRIPTION",
    "image": "/items/489.png"
  },
  {
    "id": 490,
    "name": "#EDENS_SOUL_NAME",
    "description": "#EDENS_SOUL_DESCRIPTION",
    "image": "/items/490.png"
  },
  {
    "id": 491,
    "name": "#ACID_BABY_NAME",
    "description": "#ACID_BABY_DESCRIPTION",
    "image": "/items/491.png"
  },
  {
    "id": 492,
    "name": "#YO_LISTEN_NAME",
    "description": "#YO_LISTEN_DESCRIPTION",
    "image": "/items/492.png"
  },
  {
    "id": 493,
    "name": "#ADRENALINE_NAME",
    "description": "#ADRENALINE_DESCRIPTION",
    "image": "/items/493.png"
  },
  {
    "id": 494,
    "name": "#JACOBS_LADDER_NAME",
    "description": "#JACOBS_LADDER_DESCRIPTION",
    "image": "/items/494.png"
  },
  {
    "id": 495,
    "name": "#GHOST_PEPPER_NAME",
    "description": "#GHOST_PEPPER_DESCRIPTION",
    "image": "/items/495.png"
  },
  {
    "id": 496,
    "name": "#EUTHANASIA_NAME",
    "description": "#EUTHANASIA_DESCRIPTION",
    "image": "/items/496.png"
  },
  {
    "id": 497,
    "name": "#CAMO_UNDIES_NAME",
    "description": "#CAMO_UNDIES_DESCRIPTION",
    "image": "/items/497.png"
  },
  {
    "id": 498,
    "name": "#DUALITY_NAME",
    "description": "#DUALITY_DESCRIPTION",
    "image": "/items/498.png"
  },
  {
    "id": 499,
    "name": "#EUCHARIST_NAME",
    "description": "#EUCHARIST_DESCRIPTION",
    "image": "/items/499.png"
  },
  {
    "id": 500,
    "name": "#SACK_OF_SACKS_NAME",
    "description": "#SACK_OF_SACKS_DESCRIPTION",
    "image": "/items/500.png"
  },
  {
    "id": 501,
    "name": "#GREEDS_GULLET_NAME",
    "description": "#GREEDS_GULLET_DESCRIPTION",
    "image": "/items/501.png"
  },
  {
    "id": 502,
    "name": "#LARGE_ZIT_NAME",
    "description": "#LARGE_ZIT_DESCRIPTION",
    "image": "/items/502.png"
  },
  {
    "id": 503,
    "name": "#LITTLE_HORN_NAME",
    "description": "#LITTLE_HORN_DESCRIPTION",
    "image": "/items/503.png"
  },
  {
    "id": 504,
    "name": "#BROWN_NUGGET_NAME",
    "description": "#BROWN_NUGGET_DESCRIPTION",
    "image": "/items/504.png"
  },
  {
    "id": 505,
    "name": "#POKE_GO_NAME",
    "description": "#POKE_GO_DESCRIPTION",
    "image": "/items/505.png"
  },
  {
    "id": 506,
    "name": "#BACKSTABBER_NAME",
    "description": "#BACKSTABBER_DESCRIPTION",
    "image": "/items/506.png"
  },
  {
    "id": 507,
    "name": "#SHARP_STRAW_NAME",
    "description": "#SHARP_STRAW_DESCRIPTION",
    "image": "/items/507.png"
  },
  {
    "id": 508,
    "name": "#MOMS_RAZOR_NAME",
    "description": "#MOMS_RAZOR_DESCRIPTION",
    "image": "/items/508.png"
  },
  {
    "id": 509,
    "name": "#BLOODSHOT_EYE_NAME",
    "description": "#BLOODSHOT_EYE_DESCRIPTION",
    "image": "/items/509.png"
  },
  {
    "id": 510,
    "name": "#DELIRIOUS_NAME",
    "description": "#DELIRIOUS_DESCRIPTION",
    "image": "/items/510.png"
  },
  {
    "id": 511,
    "name": "#ANGRY_FLY_NAME",
    "description": "#ANGRY_FLY_DESCRIPTION",
    "image": "/items/511.png"
  },
  {
    "id": 512,
    "name": "#BLACK_HOLE_NAME",
    "description": "#BLACK_HOLE_DESCRIPTION",
    "image": "/items/512.png"
  },
  {
    "id": 513,
    "name": "#BOZO_NAME",
    "description": "#BOZO_DESCRIPTION",
    "image": "/items/513.png"
  },
  {
    "id": 514,
    "name": "#BROKEN_MODEM_NAME",
    "description": "#BROKEN_MODEM_DESCRIPTION",
    "image": "/items/514.png"
  },
  {
    "id": 515,
    "name": "#MYSTERY_GIFT_NAME",
    "description": "#MYSTERY_GIFT_DESCRIPTION",
    "image": "/items/515.png"
  },
  {
    "id": 516,
    "name": "#SPRINKLER_NAME",
    "description": "#SPRINKLER_DESCRIPTION",
    "image": "/items/516.png"
  },
  {
    "id": 517,
    "name": "#FAST_BOMBS_NAME",
    "description": "#FAST_BOMBS_DESCRIPTION",
    "image": "/items/517.png"
  },
  {
    "id": 518,
    "name": "#BUDDY_IN_A_BOX_NAME",
    "description": "#BUDDY_IN_A_BOX_DESCRIPTION",
    "image": "/items/518.png"
  },
  {
    "id": 519,
    "name": "#LIL_DELIRIUM_NAME",
    "description": "#LIL_DELIRIUM_DESCRIPTION",
    "image": "/items/519.png"
  },
  {
    "id": 520,
    "name": "#JUMPER_CABLES_NAME",
    "description": "#JUMPER_CABLES_DESCRIPTION",
    "image": "/items/520.png"
  },
  {
    "id": 521,
    "name": "#COUPON_NAME",
    "description": "#COUPON_DESCRIPTION",
    "image": "/items/521.png"
  },
  {
    "id": 522,
    "name": "#TELEKINESIS_NAME",
    "description": "#TELEKINESIS_DESCRIPTION",
    "image": "/items/522.png"
  },
  {
    "id": 523,
    "name": "#MOVING_BOX_NAME",
    "description": "#MOVING_BOX_DESCRIPTION",
    "image": "/items/523.png"
  },
  {
    "id": 524,
    "name": "#TECHNOLOGY_ZERO_NAME",
    "description": "#TECHNOLOGY_ZERO_DESCRIPTION",
    "image": "/items/524.png"
  },
  {
    "id": 525,
    "name": "#LEPROSY_NAME",
    "description": "#LEPROSY_DESCRIPTION",
    "image": "/items/525.png"
  },
  {
    "id": 526,
    "name": "#7_SEALS_NAME",
    "description": "#7_SEALS_DESCRIPTION",
    "image": "/items/526.png"
  },
  {
    "id": 527,
    "name": "#MR_ME_NAME",
    "description": "#MR_ME_DESCRIPTION",
    "image": "/items/527.png"
  },
  {
    "id": 528,
    "name": "#ANGELIC_PRISM_NAME",
    "description": "#ANGELIC_PRISM_DESCRIPTION",
    "image": "/items/528.png"
  },
  {
    "id": 529,
    "name": "#POP_NAME",
    "description": "#POP_DESCRIPTION",
    "image": "/items/529.png"
  },
  {
    "id": 530,
    "name": "#DEATHS_LIST_NAME",
    "description": "#DEATHS_LIST_DESCRIPTION",
    "image": "/items/530.png"
  },
  {
    "id": 531,
    "name": "#HAEMOLACRIA_NAME",
    "description": "#HAEMOLACRIA_DESCRIPTION",
    "image": "/items/531.png"
  },
  {
    "id": 532,
    "name": "#LACHRYPHAGY_NAME",
    "description": "#LACHRYPHAGY_DESCRIPTION",
    "image": "/items/532.png"
  },
  {
    "id": 533,
    "name": "#TRISAGION_NAME",
    "description": "#TRISAGION_DESCRIPTION",
    "image": "/items/533.png"
  },
  {
    "id": 534,
    "name": "#SCHOOLBAG_NAME",
    "description": "#SCHOOLBAG_DESCRIPTION",
    "image": "/items/534.png"
  },
  {
    "id": 535,
    "name": "#BLANKET_NAME",
    "description": "#BLANKET_DESCRIPTION",
    "image": "/items/535.png"
  },
  {
    "id": 536,
    "name": "#SACRIFICIAL_ALTAR_NAME",
    "description": "#SACRIFICIAL_ALTAR_DESCRIPTION",
    "image": "/items/536.png"
  },
  {
    "id": 537,
    "name": "#LIL_SPEWER_NAME",
    "description": "#LIL_SPEWER_DESCRIPTION",
    "image": "/items/537.png"
  },
  {
    "id": 538,
    "name": "#MARBLES_NAME",
    "description": "#MARBLES_DESCRIPTION",
    "image": "/items/538.png"
  },
  {
    "id": 539,
    "name": "#MYSTERY_EGG_NAME",
    "description": "#MYSTERY_EGG_DESCRIPTION",
    "image": "/items/539.png"
  },
  {
    "id": 540,
    "name": "#FLAT_STONE_NAME",
    "description": "#FLAT_STONE_DESCRIPTION",
    "image": "/items/540.png"
  },
  {
    "id": 541,
    "name": "#MARROW_NAME",
    "description": "#MARROW_DESCRIPTION",
    "image": "/items/541.png"
  },
  {
    "id": 542,
    "name": "#SLIPPED_RIB_NAME",
    "description": "#SLIPPED_RIB_DESCRIPTION",
    "image": "/items/542.png"
  },
  {
    "id": 543,
    "name": "#HALLOWED_GROUND_NAME",
    "description": "#HALLOWED_GROUND_DESCRIPTION",
    "image": "/items/543.png"
  },
  {
    "id": 544,
    "name": "#POINTY_RIB_NAME",
    "description": "#POINTY_RIB_DESCRIPTION",
    "image": "/items/544.png"
  },
  {
    "id": 545,
    "name": "#BOOK_OF_THE_DEAD_NAME",
    "description": "#BOOK_OF_THE_DEAD_DESCRIPTION",
    "image": "/items/545.png"
  },
  {
    "id": 546,
    "name": "#DADS_RING_NAME",
    "description": "#DADS_RING_DESCRIPTION",
    "image": "/items/546.png"
  },
  {
    "id": 547,
    "name": "#DIVORCE_PAPERS_NAME",
    "description": "#DIVORCE_PAPERS_DESCRIPTION",
    "image": "/items/547.png"
  },
  {
    "id": 548,
    "name": "#JAW_BONE_NAME",
    "description": "#JAW_BONE_DESCRIPTION",
    "image": "/items/548.png"
  },
  {
    "id": 549,
    "name": "#BRITTLE_BONES_NAME",
    "description": "#BRITTLE_BONES_DESCRIPTION",
    "image": "/items/549.png"
  },
  {
    "id": 550,
    "name": "#BROKEN_SHOVEL_NAME",
    "description": "#BROKEN_SHOVEL_DESCRIPTION",
    "image": "/items/550.png"
  },
  {
    "id": 551,
    "name": "#BROKEN_SHOVEL2_NAME",
    "description": "#BROKEN_SHOVEL2_DESCRIPTION",
    "image": "/items/551.png"
  },
  {
    "id": 552,
    "name": "#MOMS_SHOVEL_NAME",
    "description": "#MOMS_SHOVEL_DESCRIPTION",
    "image": "/items/552.png"
  },
  {
    "id": 553,
    "name": "#MUCORMYCOSIS_NAME",
    "description": "#MUCORMYCOSIS_DESCRIPTION",
    "image": "/items/553.png"
  },
  {
    "id": 554,
    "name": "#2SPOOKY_NAME",
    "description": "#2SPOOKY_DESCRIPTION",
    "image": "/items/554.png"
  },
  {
    "id": 555,
    "name": "#GOLDEN_RAZOR_NAME",
    "description": "#GOLDEN_RAZOR_DESCRIPTION",
    "image": "/items/555.png"
  },
  {
    "id": 556,
    "name": "#SULFUR_NAME",
    "description": "#SULFUR_DESCRIPTION",
    "image": "/items/556.png"
  },
  {
    "id": 557,
    "name": "#FORTUNE_COOKIE_NAME",
    "description": "#FORTUNE_COOKIE_DESCRIPTION",
    "image": "/items/557.png"
  },
  {
    "id": 558,
    "name": "#EYE_SORE_NAME",
    "description": "#EYE_SORE_DESCRIPTION",
    "image": "/items/558.png"
  },
  {
    "id": 559,
    "name": "#120_VOLT_NAME",
    "description": "#120_VOLT_DESCRIPTION",
    "image": "/items/559.png"
  },
  {
    "id": 560,
    "name": "#IT_HURTS_NAME",
    "description": "#IT_HURTS_DESCRIPTION",
    "image": "/items/560.png"
  },
  {
    "id": 561,
    "name": "#ALMOND_MILK_NAME",
    "description": "#ALMOND_MILK_DESCRIPTION",
    "image": "/items/561.png"
  },
  {
    "id": 562,
    "name": "#ROCK_BOTTOM_NAME",
    "description": "#ROCK_BOTTOM_DESCRIPTION",
    "image": "/items/562.png"
  },
  {
    "id": 563,
    "name": "#NANCY_BOMBS_NAME",
    "description": "#NANCY_BOMBS_DESCRIPTION",
    "image": "/items/563.png"
  },
  {
    "id": 564,
    "name": "#A_BAR_OF_SOAP_NAME",
    "description": "#A_BAR_OF_SOAP_DESCRIPTION",
    "image": "/items/564.png"
  },
  {
    "id": 565,
    "name": "#BLOOD_PUPPY_NAME",
    "description": "#BLOOD_PUPPY_DESCRIPTION",
    "image": "/items/565.png"
  },
  {
    "id": 566,
    "name": "#DREAM_CATCHER_NAME",
    "description": "#DREAM_CATCHER_DESCRIPTION",
    "image": "/items/566.png"
  },
  {
    "id": 567,
    "name": "#PASCHAL_CANDLE_NAME",
    "description": "#PASCHAL_CANDLE_DESCRIPTION",
    "image": "/items/567.png"
  },
  {
    "id": 568,
    "name": "#DIVINE_INTERVENTION_NAME",
    "description": "#DIVINE_INTERVENTION_DESCRIPTION",
    "image": "/items/568.png"
  },
  {
    "id": 569,
    "name": "#BLOOD_OATH_NAME",
    "description": "#BLOOD_OATH_DESCRIPTION",
    "image": "/items/569.png"
  },
  {
    "id": 570,
    "name": "#PLAYDOUGH_COOKIE_NAME",
    "description": "#PLAYDOUGH_COOKIE_DESCRIPTION",
    "image": "/items/570.png"
  },
  {
    "id": 571,
    "name": "#ORPHAN_SOCKS_NAME",
    "description": "#ORPHAN_SOCKS_DESCRIPTION",
    "image": "/items/571.png"
  },
  {
    "id": 572,
    "name": "#EYE_OF_THE_OCCULT_NAME",
    "description": "#EYE_OF_THE_OCCULT_DESCRIPTION",
    "image": "/items/572.png"
  },
  {
    "id": 573,
    "name": "#IMMACULATE_HEART_NAME",
    "description": "#IMMACULATE_HEART_DESCRIPTION",
    "image": "/items/573.png"
  },
  {
    "id": 574,
    "name": "#MONSTRANCE_NAME",
    "description": "#MONSTRANCE_DESCRIPTION",
    "image": "/items/574.png"
  },
  {
    "id": 575,
    "name": "#THE_INTRUDER_NAME",
    "description": "#THE_INTRUDER_DESCRIPTION",
    "image": "/items/575.png"
  },
  {
    "id": 576,
    "name": "#DIRTY_MIND_NAME",
    "description": "#DIRTY_MIND_DESCRIPTION",
    "image": "/items/576.png"
  },
  {
    "id": 577,
    "name": "#DAMOCLES_NAME",
    "description": "#DAMOCLES_DESCRIPTION",
    "image": "/items/577.png"
  },
  {
    "id": 578,
    "name": "#FREE_LEMONADE_NAME",
    "description": "#FREE_LEMONADE_DESCRIPTION",
    "image": "/items/578.png"
  },
  {
    "id": 579,
    "name": "#SPIRIT_SWORD_NAME",
    "description": "#SPIRIT_SWORD_DESCRIPTION",
    "image": "/items/579.png"
  },
  {
    "id": 580,
    "name": "#RED_KEY_NAME",
    "description": "#RED_KEY_DESCRIPTION",
    "image": "/items/580.png"
  },
  {
    "id": 581,
    "name": "#PSY_FLY_NAME",
    "description": "#PSY_FLY_DESCRIPTION",
    "image": "/items/581.png"
  },
  {
    "id": 582,
    "name": "#WAVY_CAP_NAME",
    "description": "#WAVY_CAP_DESCRIPTION",
    "image": "/items/582.png"
  },
  {
    "id": 583,
    "name": "#ROCKET_IN_A_JAR_NAME",
    "description": "#ROCKET_IN_A_JAR_DESCRIPTION",
    "image": "/items/583.png"
  },
  {
    "id": 584,
    "name": "#BOOK_OF_VIRTUES_NAME",
    "description": "#BOOK_OF_VIRTUES_DESCRIPTION",
    "image": "/items/584.png"
  },
  {
    "id": 585,
    "name": "#ALABASTER_BOX_NAME",
    "description": "#ALABASTER_BOX_DESCRIPTION",
    "image": "/items/585.png"
  },
  {
    "id": 586,
    "name": "#THE_STAIRWAY_NAME",
    "description": "#THE_STAIRWAY_DESCRIPTION",
    "image": "/items/586.png"
  },
  {
    "id": 588,
    "name": "#SOL_NAME",
    "description": "#SOL_DESCRIPTION",
    "image": "/items/588.png"
  },
  {
    "id": 589,
    "name": "#LUNA_NAME",
    "description": "#LUNA_DESCRIPTION",
    "image": "/items/589.png"
  },
  {
    "id": 590,
    "name": "#MERCURIUS_NAME",
    "description": "#MERCURIUS_DESCRIPTION",
    "image": "/items/590.png"
  },
  {
    "id": 591,
    "name": "#VENUS_NAME",
    "description": "#VENUS_DESCRIPTION",
    "image": "/items/591.png"
  },
  {
    "id": 592,
    "name": "#TERRA_NAME",
    "description": "#TERRA_DESCRIPTION",
    "image": "/items/592.png"
  },
  {
    "id": 593,
    "name": "#MARS_NAME",
    "description": "#MARS_DESCRIPTION",
    "image": "/items/593.png"
  },
  {
    "id": 594,
    "name": "#JUPITER_NAME",
    "description": "#JUPITER_DESCRIPTION",
    "image": "/items/594.png"
  },
  {
    "id": 595,
    "name": "#SATURNUS_NAME",
    "description": "#SATURNUS_DESCRIPTION",
    "image": "/items/595.png"
  },
  {
    "id": 596,
    "name": "#URANUS_NAME",
    "description": "#URANUS_DESCRIPTION",
    "image": "/items/596.png"
  },
  {
    "id": 597,
    "name": "#NEPTUNUS_NAME",
    "description": "#NEPTUNUS_DESCRIPTION",
    "image": "/items/597.png"
  },
  {
    "id": 598,
    "name": "#PLUTO_NAME",
    "description": "#PLUTO_DESCRIPTION",
    "image": "/items/598.png"
  },
  {
    "id": 599,
    "name": "#VOODOO_HEAD_NAME",
    "description": "#VOODOO_HEAD_DESCRIPTION",
    "image": "/items/599.png"
  },
  {
    "id": 600,
    "name": "#EYE_DROPS_NAME",
    "description": "#EYE_DROPS_DESCRIPTION",
    "image": "/items/600.png"
  },
  {
    "id": 601,
    "name": "#ACT_OF_CONTRITION_NAME",
    "description": "#ACT_OF_CONTRITION_DESCRIPTION",
    "image": "/items/601.png"
  },
  {
    "id": 602,
    "name": "#MEMBER_CARD_NAME",
    "description": "#MEMBER_CARD_DESCRIPTION",
    "image": "/items/602.png"
  },
  {
    "id": 603,
    "name": "#BATTERY_PACK_NAME",
    "description": "#BATTERY_PACK_DESCRIPTION",
    "image": "/items/603.png"
  },
  {
    "id": 604,
    "name": "#MOMS_BRACELET_NAME",
    "description": "#MOMS_BRACELET_DESCRIPTION",
    "image": "/items/604.png"
  },
  {
    "id": 605,
    "name": "#THE_SCOOPER_NAME",
    "description": "#THE_SCOOPER_DESCRIPTION",
    "image": "/items/605.png"
  },
  {
    "id": 606,
    "name": "#OCULAR_RIFT_NAME",
    "description": "#OCULAR_RIFT_DESCRIPTION",
    "image": "/items/606.png"
  },
  {
    "id": 607,
    "name": "#BOILED_BABY_NAME",
    "description": "#BOILED_BABY_DESCRIPTION",
    "image": "/items/607.png"
  },
  {
    "id": 608,
    "name": "#FREEZER_BABY_NAME",
    "description": "#FREEZER_BABY_DESCRIPTION",
    "image": "/items/608.png"
  },
  {
    "id": 609,
    "name": "#ETERNAL_D6_NAME",
    "description": "#ETERNAL_D6_DESCRIPTION",
    "image": "/items/609.png"
  },
  {
    "id": 610,
    "name": "#BIRD_CAGE_NAME",
    "description": "#BIRD_CAGE_DESCRIPTION",
    "image": "/items/610.png"
  },
  {
    "id": 611,
    "name": "#LARYNX_NAME",
    "description": "#LARYNX_DESCRIPTION",
    "image": "/items/611.png"
  },
  {
    "id": 612,
    "name": "#LOST_SOUL_NAME",
    "description": "#LOST_SOUL_DESCRIPTION",
    "image": "/items/612.png"
  },
  {
    "id": 614,
    "name": "#BLOOD_BOMBS_NAME",
    "description": "#BLOOD_BOMBS_DESCRIPTION",
    "image": "/items/614.png"
  },
  {
    "id": 615,
    "name": "#LIL_DUMPY_NAME",
    "description": "#LIL_DUMPY_DESCRIPTION",
    "image": "/items/615.png"
  },
  {
    "id": 616,
    "name": "#BIRDS_EYE_NAME",
    "description": "#BIRDS_EYE_DESCRIPTION",
    "image": "/items/616.png"
  },
  {
    "id": 617,
    "name": "#LODESTONE_NAME",
    "description": "#LODESTONE_DESCRIPTION",
    "image": "/items/617.png"
  },
  {
    "id": 618,
    "name": "#ROTTEN_TOMATO_NAME",
    "description": "#ROTTEN_TOMATO_DESCRIPTION",
    "image": "/items/618.png"
  },
  {
    "id": 619,
    "name": "#BIRTHRIGHT_NAME",
    "description": "#BIRTHRIGHT_DESCRIPTION",
    "image": "/items/619.png"
  },
  {
    "id": 621,
    "name": "#RED_STEW_NAME",
    "description": "#RED_STEW_DESCRIPTION",
    "image": "/items/621.png"
  },
  {
    "id": 622,
    "name": "#GENESIS_NAME",
    "description": "#GENESIS_DESCRIPTION",
    "image": "/items/622.png"
  },
  {
    "id": 623,
    "name": "#SHARP_KEY_NAME",
    "description": "#SHARP_KEY_DESCRIPTION",
    "image": "/items/623.png"
  },
  {
    "id": 624,
    "name": "#BOOSTER_PACK_NAME",
    "description": "#BOOSTER_PACK_DESCRIPTION",
    "image": "/items/624.png"
  },
  {
    "id": 625,
    "name": "#MEGA_MUSH_NAME",
    "description": "#MEGA_MUSH_DESCRIPTION",
    "image": "/items/625.png"
  },
  {
    "id": 626,
    "name": "#KNIFE_PIECE_1_NAME",
    "description": "#KNIFE_PIECE_1_DESCRIPTION",
    "image": "/items/626.png"
  },
  {
    "id": 627,
    "name": "#KNIFE_PIECE_2_NAME",
    "description": "#KNIFE_PIECE_2_DESCRIPTION",
    "image": "/items/627.png"
  },
  {
    "id": 628,
    "name": "#DEATH_CERTIFICATE_NAME",
    "description": "#DEATH_CERTIFICATE_DESCRIPTION",
    "image": "/items/628.png"
  },
  {
    "id": 629,
    "name": "#BOT_FLY_NAME",
    "description": "#BOT_FLY_DESCRIPTION",
    "image": "/items/629.png"
  },
  {
    "id": 631,
    "name": "#MEAT_CLEAVER_NAME",
    "description": "#MEAT_CLEAVER_DESCRIPTION",
    "image": "/items/631.png"
  },
  {
    "id": 632,
    "name": "#EVIL_CHARM_NAME",
    "description": "#EVIL_CHARM_DESCRIPTION",
    "image": "/items/632.png"
  },
  {
    "id": 633,
    "name": "#DOGMA_NAME",
    "description": "#DOGMA_DESCRIPTION",
    "image": "/items/633.png"
  },
  {
    "id": 634,
    "name": "#PURGATORY_NAME",
    "description": "#PURGATORY_DESCRIPTION",
    "image": "/items/634.png"
  },
  {
    "id": 635,
    "name": "#STITCHES_NAME",
    "description": "#STITCHES_DESCRIPTION",
    "image": "/items/635.png"
  },
  {
    "id": 636,
    "name": "#R_KEY_NAME",
    "description": "#R_KEY_DESCRIPTION",
    "image": "/items/636.png"
  },
  {
    "id": 637,
    "name": "#KNOCKOUT_DROPS_NAME",
    "description": "#KNOCKOUT_DROPS_DESCRIPTION",
    "image": "/items/637.png"
  },
  {
    "id": 638,
    "name": "#ERASER_NAME",
    "description": "#ERASER_DESCRIPTION",
    "image": "/items/638.png"
  },
  {
    "id": 639,
    "name": "#YUCK_HEART_NAME",
    "description": "#YUCK_HEART_DESCRIPTION",
    "image": "/items/639.png"
  },
  {
    "id": 640,
    "name": "#URN_OF_SOULS_NAME",
    "description": "#URN_OF_SOULS_DESCRIPTION",
    "image": "/items/640.png"
  },
  {
    "id": 641,
    "name": "#AKELDAMA_NAME",
    "description": "#AKELDAMA_DESCRIPTION",
    "image": "/items/641.png"
  },
  {
    "id": 642,
    "name": "#MAGIC_SKIN_NAME",
    "description": "#MAGIC_SKIN_DESCRIPTION",
    "image": "/items/642.png"
  },
  {
    "id": 643,
    "name": "#REVELATION_NAME",
    "description": "#REVELATION_DESCRIPTION",
    "image": "/items/643.png"
  },
  {
    "id": 644,
    "name": "#CONSOLATION_PRIZE_NAME",
    "description": "#CONSOLATION_PRIZE_DESCRIPTION",
    "image": "/items/644.png"
  },
  {
    "id": 645,
    "name": "#TINYTOMA_NAME",
    "description": "#TINYTOMA_DESCRIPTION",
    "image": "/items/645.png"
  },
  {
    "id": 646,
    "name": "#BRIMSTONE_BOMBS_NAME",
    "description": "#BRIMSTONE_BOMBS_DESCRIPTION",
    "image": "/items/646.png"
  },
  {
    "id": 647,
    "name": "#4_5_VOLT_NAME",
    "description": "#4_5_VOLT_DESCRIPTION",
    "image": "/items/647.png"
  },
  {
    "id": 649,
    "name": "#FRUITY_PLUM_NAME",
    "description": "#FRUITY_PLUM_DESCRIPTION",
    "image": "/items/649.png"
  },
  {
    "id": 650,
    "name": "#PLUM_FLUTE_NAME",
    "description": "#PLUM_FLUTE_DESCRIPTION",
    "image": "/items/650.png"
  },
  {
    "id": 651,
    "name": "#STAR_OF_BETHLEHEM_NAME",
    "description": "#STAR_OF_BETHLEHEM_DESCRIPTION",
    "image": "/items/651.png"
  },
  {
    "id": 652,
    "name": "#CUBE_BABY_NAME",
    "description": "#CUBE_BABY_DESCRIPTION",
    "image": "/items/652.png"
  },
  {
    "id": 653,
    "name": "#VADE_RETRO_NAME",
    "description": "#VADE_RETRO_DESCRIPTION",
    "image": "/items/653.png"
  },
  {
    "id": 654,
    "name": "#FALSE_PHD_NAME",
    "description": "#FALSE_PHD_DESCRIPTION",
    "image": "/items/654.png"
  },
  {
    "id": 655,
    "name": "#SPIN_TO_WIN_NAME",
    "description": "#SPIN_TO_WIN_DESCRIPTION",
    "image": "/items/655.png"
  },
  {
    "id": 656,
    "name": "#DAMOCLES_NAME",
    "description": "#DAMOCLES_DESCRIPTION",
    "image": "/items/656.png"
  },
  {
    "id": 657,
    "name": "#VASCULITIS_NAME",
    "description": "#VASCULITIS_DESCRIPTION",
    "image": "/items/657.png"
  },
  {
    "id": 658,
    "name": "#GIANT_CELL_NAME",
    "description": "#GIANT_CELL_DESCRIPTION",
    "image": "/items/658.png"
  },
  {
    "id": 659,
    "name": "#TROPICAMIDE_NAME",
    "description": "#TROPICAMIDE_DESCRIPTION",
    "image": "/items/659.png"
  },
  {
    "id": 660,
    "name": "#CARD_READING_NAME",
    "description": "#CARD_READING_DESCRIPTION",
    "image": "/items/660.png"
  },
  {
    "id": 661,
    "name": "#QUINTS_NAME",
    "description": "#QUINTS_DESCRIPTION",
    "image": "/items/661.png"
  },
  {
    "id": 663,
    "name": "#TOOTH_AND_NAIL_NAME",
    "description": "#TOOTH_AND_NAIL_DESCRIPTION",
    "image": "/items/663.png"
  },
  {
    "id": 664,
    "name": "#BINGE_EATER_NAME",
    "description": "#BINGE_EATER_DESCRIPTION",
    "image": "/items/664.png"
  },
  {
    "id": 665,
    "name": "#GUPPYS_EYE_NAME",
    "description": "#GUPPYS_EYE_DESCRIPTION",
    "image": "/items/665.png"
  },
  {
    "id": 667,
    "name": "#STRAWMAN_NAME",
    "description": "#STRAWMAN_DESCRIPTION",
    "image": "/items/667.png"
  },
  {
    "id": 668,
    "name": "#DADS_NOTE_NAME",
    "description": "#DADS_NOTE_DESCRIPTION",
    "image": "/items/668.png"
  },
  {
    "id": 669,
    "name": "#SAUSAGE_NAME",
    "description": "#SAUSAGE_DESCRIPTION",
    "image": "/items/669.png"
  },
  {
    "id": 670,
    "name": "#OPTIONS_NAME",
    "description": "#OPTIONS_DESCRIPTION",
    "image": "/items/670.png"
  },
  {
    "id": 671,
    "name": "#CANDY_HEART_NAME",
    "description": "#CANDY_HEART_DESCRIPTION",
    "image": "/items/671.png"
  },
  {
    "id": 672,
    "name": "#A_POUND_OF_FLESH_NAME",
    "description": "#A_POUND_OF_FLESH_DESCRIPTION",
    "image": "/items/672.png"
  },
  {
    "id": 673,
    "name": "#REDEMPTION_NAME",
    "description": "#REDEMPTION_DESCRIPTION",
    "image": "/items/673.png"
  },
  {
    "id": 674,
    "name": "#SPIRIT_SHACKLES_NAME",
    "description": "#SPIRIT_SHACKLES_DESCRIPTION",
    "image": "/items/674.png"
  },
  {
    "id": 675,
    "name": "#CRACKED_ORB_NAME",
    "description": "#CRACKED_ORB_DESCRIPTION",
    "image": "/items/675.png"
  },
  {
    "id": 676,
    "name": "#EMPTY_HEART_NAME",
    "description": "#EMPTY_HEART_DESCRIPTION",
    "image": "/items/676.png"
  },
  {
    "id": 677,
    "name": "#ASTRAL_PROJECTION_NAME",
    "description": "#ASTRAL_PROJECTION_DESCRIPTION",
    "image": "/items/677.png"
  },
  {
    "id": 678,
    "name": "#C_SECTION_NAME",
    "description": "#C_SECTION_DESCRIPTION",
    "image": "/items/678.png"
  },
  {
    "id": 679,
    "name": "#LIL_ABADDON_NAME",
    "description": "#LIL_ABADDON_DESCRIPTION",
    "image": "/items/679.png"
  },
  {
    "id": 680,
    "name": "#MONTEZUMAS_REVENGE_NAME",
    "description": "#MONTEZUMAS_REVENGE_DESCRIPTION",
    "image": "/items/680.png"
  },
  {
    "id": 681,
    "name": "#LIL_PORTAL_NAME",
    "description": "#LIL_PORTAL_DESCRIPTION",
    "image": "/items/681.png"
  },
  {
    "id": 682,
    "name": "#WORM_FRIEND_NAME",
    "description": "#WORM_FRIEND_DESCRIPTION",
    "image": "/items/682.png"
  },
  {
    "id": 683,
    "name": "#BONE_SPURS_NAME",
    "description": "#BONE_SPURS_DESCRIPTION",
    "image": "/items/683.png"
  },
  {
    "id": 684,
    "name": "#HUNGRY_SOUL_NAME",
    "description": "#HUNGRY_SOUL_DESCRIPTION",
    "image": "/items/684.png"
  },
  {
    "id": 685,
    "name": "#JAR_OF_WISPS_NAME",
    "description": "#JAR_OF_WISPS_DESCRIPTION",
    "image": "/items/685.png"
  },
  {
    "id": 686,
    "name": "#SOUL_LOCKET_NAME",
    "description": "#SOUL_LOCKET_DESCRIPTION",
    "image": "/items/686.png"
  },
  {
    "id": 687,
    "name": "#FRIEND_FINDER_NAME",
    "description": "#FRIEND_FINDER_DESCRIPTION",
    "image": "/items/687.png"
  },
  {
    "id": 688,
    "name": "#INNER_CHILD_NAME",
    "description": "#INNER_CHILD_DESCRIPTION",
    "image": "/items/688.png"
  },
  {
    "id": 689,
    "name": "#GLITCHED_CROWN_NAME",
    "description": "#GLITCHED_CROWN_DESCRIPTION",
    "image": "/items/689.png"
  },
  {
    "id": 690,
    "name": "#BELLY_JELLY_NAME",
    "description": "#BELLY_JELLY_DESCRIPTION",
    "image": "/items/690.png"
  },
  {
    "id": 691,
    "name": "#SACRED_ORB_NAME",
    "description": "#SACRED_ORB_DESCRIPTION",
    "image": "/items/691.png"
  },
  {
    "id": 692,
    "name": "#SANGUINE_BOND_NAME",
    "description": "#SANGUINE_BOND_DESCRIPTION",
    "image": "/items/692.png"
  },
  {
    "id": 693,
    "name": "#THE_SWARM_NAME",
    "description": "#THE_SWARM_DESCRIPTION",
    "image": "/items/693.png"
  },
  {
    "id": 694,
    "name": "#HEARTBREAK_NAME",
    "description": "#HEARTBREAK_DESCRIPTION",
    "image": "/items/694.png"
  },
  {
    "id": 695,
    "name": "#BLOODY_GUST_NAME",
    "description": "#BLOODY_GUST_DESCRIPTION",
    "image": "/items/695.png"
  },
  {
    "id": 696,
    "name": "#SALVATION_NAME",
    "description": "#SALVATION_DESCRIPTION",
    "image": "/items/696.png"
  },
  {
    "id": 697,
    "name": "#VANISHING_TWIN_NAME",
    "description": "#VANISHING_TWIN_DESCRIPTION",
    "image": "/items/697.png"
  },
  {
    "id": 698,
    "name": "#TWISTED_PAIR_NAME",
    "description": "#TWISTED_PAIR_DESCRIPTION",
    "image": "/items/698.png"
  },
  {
    "id": 699,
    "name": "#AZAZELS_RAGE_NAME",
    "description": "#AZAZELS_RAGE_DESCRIPTION",
    "image": "/items/699.png"
  },
  {
    "id": 700,
    "name": "#ECHO_CHAMBER_NAME",
    "description": "#ECHO_CHAMBER_DESCRIPTION",
    "image": "/items/700.png"
  },
  {
    "id": 701,
    "name": "#ISAACS_TOMB_NAME",
    "description": "#ISAACS_TOMB_DESCRIPTION",
    "image": "/items/701.png"
  },
  {
    "id": 702,
    "name": "#VENGEFUL_SPIRIT_NAME",
    "description": "#VENGEFUL_SPIRIT_DESCRIPTION",
    "image": "/items/702.png"
  },
  {
    "id": 703,
    "name": "#ESAU_JR_NAME",
    "description": "#ESAU_JR_DESCRIPTION",
    "image": "/items/703.png"
  },
  {
    "id": 704,
    "name": "#BERSERK_NAME",
    "description": "#BERSERK_DESCRIPTION",
    "image": "/items/704.png"
  },
  {
    "id": 705,
    "name": "#DARK_ARTS_NAME",
    "description": "#DARK_ARTS_DESCRIPTION",
    "image": "/items/705.png"
  },
  {
    "id": 706,
    "name": "#ABYSS_NAME",
    "description": "#ABYSS_DESCRIPTION",
    "image": "/items/706.png"
  },
  {
    "id": 707,
    "name": "#SUPPER_NAME",
    "description": "#SUPPER_DESCRIPTION",
    "image": "/items/707.png"
  },
  {
    "id": 708,
    "name": "#STAPLER_NAME",
    "description": "#STAPLER_DESCRIPTION",
    "image": "/items/708.png"
  },
  {
    "id": 709,
    "name": "#SUPLEX_NAME",
    "description": "#SUPLEX_DESCRIPTION",
    "image": "/items/709.png"
  },
  {
    "id": 710,
    "name": "#BAG_OF_CRAFTING_NAME",
    "description": "#BAG_OF_CRAFTING_DESCRIPTION",
    "image": "/items/710.png"
  },
  {
    "id": 711,
    "name": "#FLIP_NAME",
    "description": "#FLIP_DESCRIPTION",
    "image": "/items/711.png"
  },
  {
    "id": 712,
    "name": "#LEMEGETON_NAME",
    "description": "#LEMEGETON_DESCRIPTION",
    "image": "/items/712.png"
  },
  {
    "id": 713,
    "name": "#SUMPTORIUM_NAME",
    "description": "#SUMPTORIUM_DESCRIPTION",
    "image": "/items/713.png"
  },
  {
    "id": 714,
    "name": "#RECALL_NAME",
    "description": "#RECALL_DESCRIPTION",
    "image": "/items/714.png"
  },
  {
    "id": 715,
    "name": "#HOLD_NAME",
    "description": "#HOLD_DESCRIPTION",
    "image": "/items/715.png"
  },
  {
    "id": 716,
    "name": "#KEEPERS_SACK_NAME",
    "description": "#KEEPERS_SACK_DESCRIPTION",
    "image": "/items/716.png"
  },
  {
    "id": 717,
    "name": "#KEEPERS_KIN_NAME",
    "description": "#KEEPERS_KIN_DESCRIPTION",
    "image": "/items/717.png"
  },
  {
    "id": 719,
    "name": "#KEEPERS_BOX_NAME",
    "description": "#KEEPERS_BOX_DESCRIPTION",
    "image": "/items/719.png"
  },
  {
    "id": 720,
    "name": "#EVERYTHING_JAR_NAME",
    "description": "#EVERYTHING_JAR_DESCRIPTION",
    "image": "/items/720.png"
  },
  {
    "id": 721,
    "name": "#TMTRAINER_NAME",
    "description": "#TMTRAINER_DESCRIPTION",
    "image": "/items/721.png"
  },
  {
    "id": 722,
    "name": "#ANIMA_SOLA_NAME",
    "description": "#ANIMA_SOLA_DESCRIPTION",
    "image": "/items/722.png"
  },
  {
    "id": 723,
    "name": "#SPINDOWN_DICE_NAME",
    "description": "#SPINDOWN_DICE_DESCRIPTION",
    "image": "/items/723.png"
  },
  {
    "id": 724,
    "name": "#HYPERCOAGULATION_NAME",
    "description": "#HYPERCOAGULATION_DESCRIPTION",
    "image": "/items/724.png"
  },
  {
    "id": 725,
    "name": "#IBS_NAME",
    "description": "#IBS_DESCRIPTION",
    "image": "/items/725.png"
  },
  {
    "id": 726,
    "name": "#HEMOPTYSIS_NAME",
    "description": "#HEMOPTYSIS_DESCRIPTION",
    "image": "/items/726.png"
  },
  {
    "id": 727,
    "name": "#GHOST_BOMBS_NAME",
    "description": "#GHOST_BOMBS_DESCRIPTION",
    "image": "/items/727.png"
  },
  {
    "id": 728,
    "name": "#GELLO_NAME",
    "description": "#GELLO_DESCRIPTION",
    "image": "/items/728.png"
  },
  {
    "id": 729,
    "name": "#DECAP_ATTACK_NAME",
    "description": "#DECAP_ATTACK_DESCRIPTION",
    "image": "/items/729.png"
  },
  {
    "id": 730,
    "name": "#GLASS_EYE_NAME",
    "description": "#GLASS_EYE_DESCRIPTION",
    "image": "/items/730.png"
  },
  {
    "id": 731,
    "name": "#STYE_NAME",
    "description": "#STYE_DESCRIPTION",
    "image": "/items/731.png"
  },
  {
    "id": 732,
    "name": "#MOMS_RING_NAME",
    "description": "#MOMS_RING_DESCRIPTION",
    "image": "/items/732.png"
  }
];

async function main() {
  console.log('Seeding items...');
  for (const item of items) {
    await prisma.item.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
  }
  console.log('Finished seeding items!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
