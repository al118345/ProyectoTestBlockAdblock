import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdblockActivoComponentComponent } from './adblock-activo-component.component';

describe('AdblockActivoComponentComponent', () => {
  let component: AdblockActivoComponentComponent;
  let fixture: ComponentFixture<AdblockActivoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdblockActivoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdblockActivoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
