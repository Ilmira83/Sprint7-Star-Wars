import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingHarness} from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { provideRouter, Router, RouterLink, Routes } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>
  let loginpage:any
  let harness: RouterTestingHarness


  beforeEach(async () => {
     await TestBed.configureTestingModule({
      imports: [RegistrationComponent, ToastrModule.forRoot() ],
      providers: [
        provideRouter([
          {
            path: 'app-registration', component: RegistrationComponent
          },
          {
            path:'app-home', component: HomeComponent
          }
        ])
    ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(RegistrationComponent);
    loginpage = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/app-registration', RegistrationComponent)
    });

  describe('Login flow', () => {

  it('given user clicks on signup button, then show username input', () => {
    expect(usernameInput()).toBeNull();
    expect(logInButton()).not.toBeNull();
    expect(signUpButton()).not.toBeNull();

    signUpButton().click();
    fixture.detectChanges();

    expect(logInButton()).toBeNull();
    expect(signUpButton()).toBeNull();
    expect(usernameInput()).not.toBeNull();
  })


  })


function logInButton(){
  return loginpage.querySelector('[test-id = "login-button"]')
}

function signUpButton() {
  return loginpage.querySelector('[test-id = "signup-button"]')

}
function usernameInput() {
  return loginpage.querySelector('[test-id = "username-input"]')
}
});


