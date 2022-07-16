import { Competitor } from "../models/competitor";

export const COMPETITORS: Competitor[] = [
  {
    name: 'Joseph',
    age: 24,
    division: 'Advanced',
    scores: {
      headJudge: 1,
      judge2: 1,
      judge3: 2,
      judge4: 4,
      judge5: 5
    },
    deduction: 1,
    tieBreaker: 4,
    finalScore: 5
  },
  {
    name: 'Joseph2',
    age: 24,
    division: 'Advanced',
    scores: {
      headJudge: 1,
      judge2: 1,
      judge3: 32,
      judge4: 4,
      judge5: 5
    },
    deduction: 1,
    tieBreaker: 4,
    finalScore: 5
  },
  {
    name: 'Joseph3',
    age: 24,
    division: 'Advanced',
    scores: {
      headJudge: 1,
      judge2: 21,
      judge3: 212,
      judge4: 42,
      judge5: 5
    },
    deduction: 1,
    tieBreaker: 4,
    finalScore: 5
  },
  {
    name: 'Joseph4',
    age: 24,
    division: 'Advanced',
    scores: {
      headJudge: 3,
      judge2: 1,
      judge3: 2,
      judge4: 5,
      judge5: 5
    },
    deduction: 1,
    tieBreaker: 4,
    finalScore: 5
  }
];
