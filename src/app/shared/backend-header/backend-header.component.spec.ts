import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendHeaderComponent } from './backend-header.component';

describe('BackendHeaderComponent', () => {
  let component: BackendHeaderComponent;
  let fixture: ComponentFixture<BackendHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
