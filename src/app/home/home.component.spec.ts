import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title and developer name`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const homeCompoent = fixture.componentInstance;
    expect(homeCompoent.title).toEqual('SpaceX Launch Programs');
    expect(homeCompoent.developerName).toEqual('Danish Khan');
  });

  it('should render title and developer name', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SpaceX Launch Programs');
    expect(compiled.querySelector('footer p span').textContent).toContain('Danish Khan');
  });
});
