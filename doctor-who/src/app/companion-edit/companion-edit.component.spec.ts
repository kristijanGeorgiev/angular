import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionEditComponent } from './companion-edit.component';

describe('CompanionEditComponent', () => {
  let component: CompanionEditComponent;
  let fixture: ComponentFixture<CompanionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanionEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
