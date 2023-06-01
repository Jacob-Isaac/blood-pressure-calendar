import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      grey: string;
      whisper: string;
      silver: string;
      darkerGrey: string;
      mystic: string;
      pattensBlue: string;
      scienceBlue: string;
    };
    breakpoint: {
        maxContentSize: number,
        tabletMax: number,
        mobileMax: number,
        between: number,
    };
    fontSize: {
        regular: number,
        medium: number,
        bold: number,
    };
  }
}

export interface Task {
    id: string;
    up: number;
    down: number;
    pulse: number;
    note?: string;
  }

  export interface PressureState {
    pressureList: Task[];
    highestPressure: Task[];
    averagePressure: Task[];
    lowestPressure: Task[];
    isTaskHide: boolean;
    isLoading: boolean;
    color: string;
  }
