import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFournisseurComponent } from './consult-fournisseur.component';

describe('ConsultFournisseurComponent', () => {
  let component: ConsultFournisseurComponent;
  let fixture: ComponentFixture<ConsultFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultFournisseurComponent]
    });
    fixture = TestBed.createComponent(ConsultFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
