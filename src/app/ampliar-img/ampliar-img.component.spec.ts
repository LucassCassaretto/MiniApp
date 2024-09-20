import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliarImgComponent } from './ampliar-img.component';

describe('AmpliarImgComponent', () => {
  let component: AmpliarImgComponent;
  let fixture: ComponentFixture<AmpliarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmpliarImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpliarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
