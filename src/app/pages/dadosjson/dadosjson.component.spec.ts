import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosjsonComponent } from './dadosjson.component';

describe('DadosjsonComponent', () => {
  let component: DadosjsonComponent;
  let fixture: ComponentFixture<DadosjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosjsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
