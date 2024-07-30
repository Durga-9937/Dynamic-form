import { Component ,OnInit,Input,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit {
  @Input() formData!: any[];   

  form!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm(this.formData);
  }

  createForm(formData: any[]) {
    const formControls: { [key: string]: any } = {};

    for (const field of formData) {
      formControls[field.name] = ['', Validators.required];
    }

    this.form = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.createForm(this.formData);
    }
  }

 
  isAnyFieldEmpty(): boolean {
    for (const field of this.formData) {
      const control = this.form.get(field.name);
      if (control && control.value === '') {
        return true;
      }
    }
    return false; 
  }
    

  
}
