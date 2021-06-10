import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports:[RouterTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should initilize button component', () => {
    expect(component).toBeTruthy();
  });

  it('button clicked data send to outer component', () => {
    spyOn(component.getClick, 'emit');
    fixture.detectChanges();
    component.getlbl('2006','year',0);
    expect(component.getClick.emit).toHaveBeenCalledWith({'year':'2006'})
  });
});
