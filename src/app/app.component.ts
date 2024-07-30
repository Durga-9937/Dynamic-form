import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'DynamicForm';

  formData = [
    { name: 'name', type: 'text', label: 'Name:' },
    { name: 'age', type: 'number', label: 'Age:' },
    { name: 'gender', type: 'text', label: 'Gender:' },
    { name: 'phone', type: 'text', label: 'Phone Number:' },
    { name: 'Address', type: 'text', label: 'Address:' }
  ];
}