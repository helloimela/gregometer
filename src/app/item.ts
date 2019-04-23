interface Options {
    option: string;
    score: number;
}

export class Item {
  id: number;
  question: string;
  options:Array<{option: string, score: number}>;
}
