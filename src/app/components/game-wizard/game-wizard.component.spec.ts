import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWizardComponent } from './game-wizard.component';

describe('GameWizardComponent', () => {
  let component: GameWizardComponent;
  let fixture: ComponentFixture<GameWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
