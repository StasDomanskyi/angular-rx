import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fetchImages(query: string) {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
    });

    let subscription = observable.subscribe({
      next: (x) => {
        const apiSearchImagesUrl: string = 'https://api.unsplash.com/search/photos';
        const userId: string = '5f66416a15357f2c08bd9dcefdf915fb102f63c04cb8c845adcbe4cae5e3048d';
        const url: string = `${apiSearchImagesUrl}?query=${query}&page=${x}&client_id=${userId}`;


        let images;
        fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              
              return response;
          })
          .then(response => response.json())
          .then(data => images = data)
          .then(() => console.log(images))
          /* Necessary console.log doesn't work */
          /* console.log(images); */
          return images;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log('done'); 
      }
    });

    subscription.unsubscribe();
  }

  logRequest<T>(word: T): T {
    console.log('sent:', word);
    return word;
  }
}
