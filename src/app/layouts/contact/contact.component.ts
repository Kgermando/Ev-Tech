import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from 'src/app/shared/services/data/contact.service';
import { SpinnerService } from 'src/app/shared/services/data/spinner.service';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  options: AnimationOptions = {
    path: '../../../assets/lottie/contact-us.json',
  };

  contactFG: FormGroup;
  contact: Contact = {
    id: '',
    FullName: '',
    Telephone: '',
    Email: '',
    Sujet: '',
    Message: '',
    Created: null,
    Confirmation: ''
  };

loading = false;
errorMessage = '';


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private db: AngularFirestore,
              private contactService: ContactService,
              private spinnerService: SpinnerService
              ) {
      this.contactFG = this.formBuilder.group({
        FullName: ['', Validators.required],
        Telephone: ['', Validators.required],
        Email: ['', Validators.required],
        Sujet: ['', Validators.required],
        Message: ['', Validators.required]
      });
  }

  ngOnInit(): void {}

  save() {
    if (this.contactFG.valid) {
      this.loading = true;
      this.contact = this.contactFG.value;
      this.contact.id = this.db.createId();
      this.contact.Confirmation = 'NON LU';
      this.contact.Created = new Date();
      this.contactService.add(this.contact).then(res => {
        console.log(res);
        this.loading = false;
        this.router.navigateByUrl('/layouts/contact');
        this.openSuccessBar();
        this.contactFG.reset();
      }).then((res => {
        console.log(res);
        console.log('Message envoyé !');
      }));
    } else {
      this.markFormGroupTouched(this.contactFG);
      this.openErrorBar(this.errorMessage);
    }
  }

  openSuccessBar() {
    this.spinnerService.openSnackBar({
      data: { message: 'Message envoyé avec succès' },
      duration: 6,
      panelClass: ['default-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  openErrorBar(errorMessage) {
    this.spinnerService.openSnackBar({
      data: { message: errorMessage },
      duration: 6,
      panelClass: ['default-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }


  FullNameValidate() {
    const control = this.contactFG.get('FullName');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  MessageValidate() {
    const control = this.contactFG.get('Message');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  TelephoneValidate() {
    const control = this.contactFG.get('Telephone');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  SujetValidate() {
    const control = this.contactFG.get('Sujet');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  

  markFormGroupTouched(formGroup: FormGroup) {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<any> Object).values(formGroup.controls).forEach(control => {
      if (control.controls) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }



  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
