import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhomenorComponent } from './filhomenor.component';

describe('FilhomenorComponent', () => {
  let component: FilhomenorComponent;
  let fixture: ComponentFixture<FilhomenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhomenorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhomenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
