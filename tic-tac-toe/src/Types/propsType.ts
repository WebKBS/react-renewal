export interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export type PlayerSymbol = string | null;

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, playerName: string) => void;
}

export interface Players {
  [key: string]: string;
}
