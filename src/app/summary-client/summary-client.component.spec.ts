import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryClientComponent } from './summary-client.component';

describe('SummaryClientComponent', () => {
  let component: SummaryClientComponent;
  let fixture: ComponentFixture<SummaryClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
