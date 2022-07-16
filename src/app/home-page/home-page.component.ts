import { Component, OnInit } from '@angular/core';
import { Competitor } from '../models/competitor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  testCompetitor: Competitor = {
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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
