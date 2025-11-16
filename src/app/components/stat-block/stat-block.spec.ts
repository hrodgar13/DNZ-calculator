import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBlock } from './stat-block';

describe('StatBlock', () => {
  let component: StatBlock;
  let fixture: ComponentFixture<StatBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
