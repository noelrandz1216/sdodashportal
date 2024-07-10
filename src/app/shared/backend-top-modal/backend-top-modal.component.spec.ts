import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendTopModalComponent } from './backend-top-modal.component';

describe('BackendTopModalComponent', () => {
  let component: BackendTopModalComponent;
  let fixture: ComponentFixture<BackendTopModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendTopModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendTopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
