import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Canal de información:
  postSource = new Subject();

  // Observable, que consumiremos desde los Componentes:
  posts$ = this.postSource.asObservable();

  constructor(private http: HttpClient) {
  }

  // Implementamos la llamada Http:
  getTodos() {
      return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  // Implementamos la llamada Http y pasamos una parámetro a la ruta****************
  getComents(postId: number) {
      return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  // Implementamos la llamada Http y pasamos los parámetros que necesitemos
  getComents2(postId: number) {
    const params = {
      postId: postId,
      // param1: value1, ***** Añadir al objeto tantos parámetros como necesitemos
      // param2: value2,
    }
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {params});
  }

  getPosts() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', null);
  }

}

