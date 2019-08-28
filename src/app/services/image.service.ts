import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fetchImages(query: string) {
    const apiSearchImagesUrl: string = 'https://api.unsplash.com/search/photos';
    const userId: string = '5f66416a15357f2c08bd9dcefdf915fb102f63c04cb8c845adcbe4cae5e3048d';
    const url: string = `${apiSearchImagesUrl}?query=${query}&page=${1}&client_id=${userId}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
          
        return response;
      })
      .then(response => response.json())
      .then(items => console.log(items))
  }

  logRequest<T>(word: T): T {
    console.log('sent:', word);
    return word;
  }
}
