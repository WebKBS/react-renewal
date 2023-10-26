export interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export type PlayerSymbol = string | null;
