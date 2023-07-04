import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-dyanamic-forms',
  templateUrl: './reactive-dyanamic-forms.component.html',
  styleUrls: ['./reactive-dyanamic-forms.component.css'],
})
export class ReactiveDyanamicFormsComponent implements OnInit {
  formFields!: any[];
  dynamicForm!: FormGroup;
  isSubmitted = false;
  minDate = new Date();
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {}
  get a() {
    return this.dynamicForm.controls;
  }
  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});
    const formFields = [
      {
        fieldName: 'Name',
        label: 'First Name',
        fieldType: 'text',
        value: '',
        validatorPresence: true,
        validators: {
          required: true,
          minLength: 3,
          maxLength: 50,
        },
      },
      {
        fieldName: 'Email',
        label: 'Email',
        fieldType: 'email',
        value: '',
        validatorPresence: true,
        validators: {
          required: true,
          pattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}',
        },
      },
      {
        fieldName: 'DOB',
        label: 'Date Of Birth',
        fieldType: 'date',
        value: '',
        validatorPresence: true,
        validators: {
          required: true,
        },
      },
      {
        fieldName: 'CheckBox',
        label: 'checkbox',
        fieldType: 'checkbox',
        value: 'false',
        validatorPresence: true,
        validators: {
          required: true,
        },
      },
      {
        fieldName: 'gender',
        label: 'Gender',
        fieldType: 'radio',
        options: [
          { key: 'Male', value: '0' },
          { key: 'Female', value: '1' },
        ],
        validatorPresence: false,
        validators: {
          required: false,
        },
      },
      {
        fieldName: 'Message',
        label: 'Message',
        fieldType: 'text',
        value: '',
        validatorPresence: false,
        validators: {
          required: false,
        },
      },
    ];
    // for (const formField of formFields) {
    //   this.dynamicForm.addControl(formField.fieldName, new FormControl('', this.getValidator(formField)));
    // }
    // switch(formField.validator) {
    //   case "email":
    //     return Validators.email;
    //   case "required":
    //     return Validators.required;
    //   default:
    //     return null;
    // this.formFields = formFields;

    for (let formField of formFields) {
      let validatorsToAdd: any = [];
      // console.log(formFields, 'formfields');
      if (formField.validatorPresence) {
        for (let ex in formField.validators) {
          let value = formField.validators[ex];
          // console.log(value);
          switch (ex) {
            case 'required':
              validatorsToAdd.push(Validators.required);
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
          }
          // console.log(ex, ':', value);
        }
        this.dynamicForm.addControl(
          formField.fieldName,
          new FormControl('', validatorsToAdd)
        );
        // console.log(this.dynamicForm);
      } else {
        this.dynamicForm.addControl(formField.fieldName, new FormControl(''));
        // console.log(this.dynamicForm);
      }
    }
    this.formFields = formFields;

    // this.dynamicForm.controls['DOB'].valueChanges.subscribe(data=>{
    //   alert(data)
    // })
    // this.dynamicForm.controls['DOB'].valueChanges.subscribe(data=>{
    //   alert(data)
    // })
  }
  ChangeCheckBox(e: any) {
    alert(e);
    this.dynamicForm.controls['CheckBox']?.valueChanges.subscribe((data) => {
      if (!data) {
        this.dynamicForm.controls['CheckBox'].setValidators([
          Validators.required,
        ]);
        this.dynamicForm.controls['CheckBox'].updateValueAndValidity();
      } else {
        this.dynamicForm.controls['CheckBox'].clearValidators();
        this.dynamicForm.controls['CheckBox'].updateValueAndValidity();
      }
    });
  }
  onSubmit(): void {
    this.isSubmitted = true;
    // console.log(this.dynamicForm);
    if (this.dynamicForm.invalid) {
      return;
    } else {
      // console.log(this.dynamicForm.value);
    }
  }
}
