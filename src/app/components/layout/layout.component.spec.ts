import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingHarness} from '@angular/router/testing';
import { provideRouter, Router, RouterLink, Routes } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RegistrationComponent } from '../registration/registration.component';


describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>
  let layoutpage:any
  let harness: RouterTestingHarness


  beforeEach(async () => {
     await TestBed.configureTestingModule({
      imports: [LayoutComponent, ToastrModule.forRoot() ],
      providers: [
        provideRouter([
          {
            path: '', component: LayoutComponent
          },
          {
            path:'app-registration', component: RegistrationComponent
          }
        ])
    ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    layoutpage = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/', LayoutComponent)
    });

  it('should have correct site-navigation items', () => {

  const linkItems = fixture.debugElement.queryAll(By.directive(RouterLink));
  const navItems = linkItems.map(it => it.injector.get(RouterLink));

  expect(linkItems.length).toBe(4);
  expect(navItems[0].href).toBe("/app-home");
  expect(navItems[2].href).toBe("/app-home");
  expect(navItems[3].href).toBe("/app-starships");

  expect(logInButton().getAttribute('routerlink')).toBe("/app-registration");
  });


  it('when click Log In button, should navigate to registration page', fakeAsync(() => {

    const linkItem = harness.routeDebugElement?.query(By.css('[test-id="login-button"]'));
    linkItem!.triggerEventHandler('click', {button: 0});

    tick();

    expect(TestBed.inject(Router).url).toBe('/app-registration')
  }))



  function logInButton(){
    return layoutpage.querySelector('[test-id = "login-button"]')
  }
  })






