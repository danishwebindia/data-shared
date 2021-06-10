import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should initilize buttons component', () => {
    expect(component).toBeTruthy();
  });

  it('buttons component send data to outer component', () => {
    spyOn(component.buttonData,'emit');
    fixture.detectChanges();
    component.findClick({'year':'2006'})
    expect(component.buttonData.emit).toHaveBeenCalledWith({'year':'2006'})
  });

});
