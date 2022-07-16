import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorListPageComponent } from './competitor-list-page.component';

describe('CompetitorListPageComponent', () => {
  let component: CompetitorListPageComponent;
  let fixture: ComponentFixture<CompetitorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
