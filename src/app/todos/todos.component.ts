import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[] = []; // ************ Añadimos un array vacío para contener nuestros resultados.

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res: any) => {
			console.log(res);
			this.todos = res;
			console.log(this.todos);
    });
  }

}
