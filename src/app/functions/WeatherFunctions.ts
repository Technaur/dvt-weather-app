import { images } from "../styles/Images";
import { colors } from "../styles/Theme";

export const isCloudy = (value: string = ""): boolean => {
  return value.includes("Clouds");
};

export const isRainy = (value: string = ""): boolean => {
  return (
    value.includes("Rain") ||
    value.includes("Drizzle") ||
    value.includes("Thunderstorm")
  );
};

export const generateWeatherBackground = (value: string = ""): any => {
  if (isCloudy(value)) {
    return images.cloudy;
  }
  if (isRainy(value)) {
    return images.rainy;
  }
  return images.sunny;
};

export const generateWeatherIcon = (value: string = ""): any => {
  if (isCloudy(value)) {
    return images.iconCloudy;
  }
  if (isRainy(value)) {
    return images.iconRainy;
  }
  return images.iconSunny;
};

export const convertKelvinToCelsius = (value: number = 0): number => {
  return Math.round(value - 273.15);
};

export const generateBackgroundHexColour = (value: string = ""): string => {
  let colour = isCloudy(value)
    ? colors.cloudy
    : isRainy(value)
    ? colors.rainy
    : colors.sunny;

  return colour;
};

export const convertDateToDayOfWeek = (value: string = ""): string => {
  let date = new Date(value);

  //Weekday only without date
  let dayOfWeek = date
    .toLocaleDateString("en-ZA", { weekday: "long" })
    .split(",")[0];

  return dayOfWeek;
};
