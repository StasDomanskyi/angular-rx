import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { async } from 'q';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  field = '';
  images;

  constructor(private imageService: ImageService) { }

  onSubmit(): void {
    console.log(this.images);
    
    if (this.field === '') {
      this.field = 'car';
    }

    this.images = this.imageService.fetchImages(this.field);
    this.imageService.logRequest(this.field);
    
    
  }

  ngOnInit() {
  }

}
