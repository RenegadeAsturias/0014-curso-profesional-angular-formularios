import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Canal de información:
  postSource = new Subject<number[]>();

  // Observable, que consumiremos desde los Componentes:
  posts$ = this.postSource.asObservable();

  // Si queremos también podemos aplicar el pipe con el filtro
  // a la definición del Observable para que cuando me suscriba ya obtenga los datos filtrados.
  posts2$ = this.postSource.asObservable().pipe(
    map((res): number[] => {
      return res.filter( num => num > 3);
    })
  );

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

function res(this: any, value: number[], index: number): unknown {
  throw new Error('Function not implemented.');
}

