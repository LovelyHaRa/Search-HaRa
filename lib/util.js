import { baseUnit } from './data';

export const getingredientRatio = (ingredientList) => {
  const base = ingredientList.map(({ volume, unit }) => {
    const isFraction = /^[0-9]{1,}\/[0-9]{1,}$/.test(volume);
    const volumeNum = isFraction
      ? parseFloat(volume.split('/')[0]) / parseFloat(volume.split('/')[1])
      : parseFloat(volume);
    return volumeNum * baseUnit[unit];
  });

  const maxValue = Math.max(...base);

  return base.map((value) => value / maxValue);
};

export default null;
