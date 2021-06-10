import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { LeftpanelComponent } from './leftpanel.component';

describe('LeftpanelComponent', () => {
  let component: LeftpanelComponent;
  let fixture: ComponentFixture<LeftpanelComponent>;
  let spyroute = {navigate: jasmine.createSpy('navigate')}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftpanelComponent ],
      imports:[RouterTestingModule],
      providers: [
        { provide: Router, useValue: spyroute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create left panel component', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to filterdata when click on year button', () => {
    component.getClickData({'year':2006,'land':'','launch':''});
    expect(spyroute.navigate).toHaveBeenCalledWith(['/filteredData'],{queryParams:{'year':2006,'land':'','launch':''}})
  });

  it('should redirect to filterdata when click on landing button', () => {
    component.getClickData({'year':'','land':'true','launch':''});
    expect(spyroute.navigate).toHaveBeenCalledWith(['/filteredData'],{queryParams:{'year':'','land':'true','launch':''}})
  });

  it('should redirect to filterdata when click on launch button', () => {
    component.getClickData({'year':'','land':'','launch':'true'});
    expect(spyroute.navigate).toHaveBeenCalledWith(['/filteredData'],{queryParams:{'year':'','land':'','launch':'true'}})
  });


});
