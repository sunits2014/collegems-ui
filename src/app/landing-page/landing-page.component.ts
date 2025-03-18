import { Component, OnInit } from '@angular/core';
import { LandingPageConstants } from './landing-page.constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  public tabs: Array<any>;
  public currentModule: string;
  public userForm: FormGroup;
  public submitClicked: boolean;
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.tabs = [];
  }

  ngOnInit(): void {
    this.tabs = LandingPageConstants.tabs;
    this.currentModule = this.tabs[0].key;
    this.constructForm();
  }

  public switchTab(tab) {
    this.submitClicked = false;
    this.currentModule = tab.key
    this.constructForm();
  }

  public login() {
    this.submitClicked = true;
  }

  private constructForm() {
    this.userForm = this.formBuilder.group({});
    switch (this.currentModule) {
      case 'sign-up':
        this.userForm.addControl('username', new FormControl('', Validators.required));
        this.userForm.addControl('password', new FormControl('', Validators.required));
        this.userForm.addControl('cpassword', new FormControl('', Validators.required));
        this.userForm.addControl('emailAddress', new FormControl('', Validators.required));
        break;
      case 'forgot-password':
        this.userForm.addControl('emailAddress', new FormControl('', Validators.required));
        break;
      default:
        this.userForm.addControl('username', new FormControl('', Validators.required));
        this.userForm.addControl('password', new FormControl('', Validators.required));
        break; 
    }
  }
}