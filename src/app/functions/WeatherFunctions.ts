export const isWindy = (windSpeed: number = 0): boolean => {
  //Source: http://gyre.umeoce.maine.edu/data/gomoos/buoy/php/variable_description.php?variable=wind_2_speed (Accessed 16 November 2023)

  return windSpeed > 10;
};
