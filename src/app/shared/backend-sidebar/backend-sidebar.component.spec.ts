import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSidebarComponent } from './backend-sidebar.component';

describe('BackendSidebarComponent', () => {
  let component: BackendSidebarComponent;
  let fixture: ComponentFixture<BackendSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
