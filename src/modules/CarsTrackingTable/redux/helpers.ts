import { Car, MonthRange } from 'types';

export const newCar: Car = {
  name: '',
  primordial: 0,
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  current: 0,
  gdmLimit: 0,
  oilLimit: 0,
  toGdmLimit: 0,
  toOilLimit: 0,
};

const initializeHiddenColumns = (): string[] => {
  const date = new Date();
  const currentMonth = date.getMonth();

  const hiddenColumns = [];

  for (let i = 0; i < 12; i += 1) {
    if (i !== currentMonth) {
      hiddenColumns.push(`${i}`);
    }
  }

  if (currentMonth > 0) {
    hiddenColumns.splice(currentMonth - 1, 1);
  }

  return hiddenColumns;
};

export const calculateLimits = (updatedCar: Car): Car => {
  const { gdmLimit, primordial, oilLimit } = updatedCar;

  let mileagePerYear = 0;
  for (let i = 0; i < 12; i += 1) {
    mileagePerYear += Number(updatedCar[`${i}` as MonthRange]);
  }

  const allMileage = Number(primordial) + mileagePerYear;

  const carWithLimits: Car = {
    ...updatedCar,
    current: mileagePerYear,
    toGdmLimit: gdmLimit - allMileage,
    toOilLimit: oilLimit - allMileage,
  };

  return carWithLimits;
};

export const hiddenColumns = initializeHiddenColumns();
