import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDetailComponent } from './companion-detail.component';

describe('CompanionDetailComponent', () => {
  let component: CompanionDetailComponent;
  let fixture: ComponentFixture<CompanionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanionDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
