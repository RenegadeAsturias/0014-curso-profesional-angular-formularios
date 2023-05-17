import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {

    /** Ejemplo inicial
    this.todoService.posts$.subscribe((res) => {
      console.log('Observable componente "todo.component" datos2 : ', res);
    }); */

    // Nuevo ejemplo: Añadimos RxJS Operadores
    // Operadores: 'map' y 'tap' ejemplos:
    this.todoService.posts$.pipe(
      map( res => {
          console.log(res);
          res = res.filter(num => num>3);
          return res;
        }),
        tap( (res) => {
          console.log('Desde el tap:' ,res);
        })
      )
      .subscribe((res) => {
      console.log('Observable componente "todo.component" datos2 : ', res);
    });

  }

}
