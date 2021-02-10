export interface EditableCar {
  name?: string;
  primordial?: number;
  '0'?: number;
  '1'?: number;
  '2'?: number;
  '3'?: number;
  '4'?: number;
  '5'?: number;
  '6'?: number;
  '7'?: number;
  '8'?: number;
  '9'?: number;
  '10'?: number;
  '11'?: number;
  gdmLimit?: number;
  oilLimt?: number;
  current?: number;
}

export type Car = {
  name: string;
  primordial: number;
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  current: number;
  gdmLimit: number;
  oilLimit: number;
  toGdmLimit: number;
  toOilLimit: number;
};

export type MonthRange =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';

export type TableData = {
  data: Car[];
};
