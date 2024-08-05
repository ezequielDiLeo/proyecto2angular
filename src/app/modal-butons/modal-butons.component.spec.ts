import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButonsComponent } from './modal-butons.component';

describe('ModalButonsComponent', () => {
  let component: ModalButonsComponent;
  let fixture: ComponentFixture<ModalButonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalButonsComponent]
    });
    fixture = TestBed.createComponent(ModalButonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
