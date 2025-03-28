import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  nameValue: any;
  number: any;
  email: any;
  message: any;
  url: any;
  teamNumber: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private titleService: Title
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Contact`);
  }

  ngOnInit() {
    this.loadForm();

    // this.f['name'].setValue('Osian Star Service Center');
    // this.f['number'].setValue('81070457575');
    // this.f['email'].setValue('Oswal12@gmail.com');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadForm() {
    this.contactForm = this.fb.group({
      names: ['', [Validators.required]],
      number: ['', [Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', []],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  // submitform() {
  //   if (this.contactForm.invalid == true) {
  //     this.toastr.error('Please Fill All The Required Details', '', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-right',
  //     });
  //     this.contactForm.markAllAsTouched();
  //   } else if (this.contactForm.invalid == false) {
  //     this.teamNumber = +919227984777;
  //     this.nameValue = this.contactForm.get('names')?.value;
  //     this.number = this.contactForm.get('number')?.value;
  //     this.email = this.contactForm.get('email')?.value;
  //     this.message = this.contactForm.get('message')?.value;
  //     console.log(this.nameValue, 'name');
  //     console.log(this.number, 'name');
  //     console.log(this.email, 'name');
  //     console.log(this.message, 'name');

  //     this.url =
  //       'https://wa.me' +
  //       this.teamNumber +
  //       '?text=' +
  //       'Name : ' +
  //       this.nameValue +
  //       '%0a' +
  //       'Number : ' +
  //       this.number +
  //       '%0a' +
  //       'Email : ' +
  //       this.email +
  //       '%0a' +
  //       'Message : ' +
  //       this.message +
  //       '%0a%0a';

  //     window.open(this.url, '_blank')?.focus();
  //   }
  // }

  // copyToClick(event: any) {
  //   debugger;
  //   const valueCopy = event;
  //   if (valueCopy != undefined) {
  //     console.log(navigator.clipboard.writeText(valueCopy), '***');
  //     this.toastr.success('Copied to clipboard!', 'Success', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-right',
  //     });
  //   }
  // }

  submitform() {
    if (this.contactForm.invalid) {
      this.toastr.error('Please Fill All The Required Details', '', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.contactForm.markAllAsTouched();
      return; // Stop execution if form is invalid
    }

    // Ensure the team number is correctly formatted
    this.teamNumber = '919227984777'; // WhatsApp number without '+'
    this.nameValue = this.contactForm.get('names')?.value; // Fixed 'names' -> 'name'
    this.number = this.contactForm.get('number')?.value;
    this.email = this.contactForm.get('email')?.value;
    this.message = this.contactForm.get('message')?.value;

    console.log(this.nameValue, 'names');
    console.log(this.number, 'number');
    console.log(this.email, 'email');
    console.log(this.message, 'message');

    // Corrected WhatsApp URL
    this.url =
      'https://wa.me/' +
      this.teamNumber +
      '?text=' +
      encodeURIComponent(
        'Name: ' +
          this.nameValue +
          '\nNumber: ' +
          this.number +
          '\nEmail: ' +
          this.email +
          '\nMessage: ' +
          this.message
      );

    // Open WhatsApp chat
    window.open(this.url, '_blank')?.focus();
  }

  notAllowed(event: MouseEvent) {
    event.preventDefault();
  }
}
