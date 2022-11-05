
export enum EStreamCategory {
  SOFT_MUSIC = "soft_music",
  EXTENDED_MUSIC = "extended_music",
  ACCURATE_LOCATION = "accurate_location",
  SOFT_LOCATION = "soft_location",
}

export const musicStreamCategories = [EStreamCategory.SOFT_MUSIC, EStreamCategory.EXTENDED_MUSIC];
export const locationStreamCategories = [EStreamCategory.SOFT_LOCATION, EStreamCategory.ACCURATE_LOCATION];
