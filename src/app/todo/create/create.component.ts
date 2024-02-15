import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private todoService: TodoService, private router: Router) {}

  formdata: Todo = {
    id: '0',
    title: '',
    description: '',
    done: false,
  };

  create() {
    this.todoService.getAll().subscribe((todos: Todo[]) => {
      let newId: string;

      if (todos.length > 0) {
        const lastId = parseInt(todos[todos.length - 1].id, 10);
        newId = (lastId + 1).toString();
      } else {
        newId = '1';
      }

      console.log(newId);
      this.formdata.id = newId;

      // Create the todo item
      this.todoService.create(this.formdata).subscribe({
        next: (data) => {
          this.router.navigate(['todo/home']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
