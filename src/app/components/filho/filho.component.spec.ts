import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoComponent } from './filho.component';

describe('FilhoComponent', () => {
  let component: FilhoComponent;
  let fixture: ComponentFixture<FilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
