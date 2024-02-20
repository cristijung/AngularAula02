import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiComponent } from './pai.component';

describe('PaiComponent', () => {
  let component: PaiComponent;
  let fixture: ComponentFixture<PaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
