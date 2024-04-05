import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.bookForm = this.fb.group({
        bookName: ['', Validators.required],
        author: ['', Validators.required],
        publication: [''],
        price: ['', Validators.required],
        genre: [''],
        publishedDate: [''],
        country: [''],
        description: ['']
      });
    }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
    }
  }
}