export interface Competitor {
  name: string;
  age: number;
  division: string;
  scores: scores;
  deduction: number;
  tieBreaker: number;
  finalScore: number;
}

interface scores {
  headJudge: number;
  judge2: number;
  judge3: number;
  judge4: number;
  judge5: number;
}
