export interface Property {
  label: string;
  value: string | number | boolean;
}

export interface ObservationData {
  samplingTime: string;
  properties: Property[];
}

export interface CommanData {
  datas: ObservationData[];
}
