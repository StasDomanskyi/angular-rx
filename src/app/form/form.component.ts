import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  field = '';

  constructor(private imageService: ImageService) { }

  onSubmit(): void {
    if (this.field === '') {
      this.field = 'car';
    }

    this.imageService.fetchImages(this.field);
    this.imageService.logRequest(this.field);
  }

  ngOnInit() {
  }

}
