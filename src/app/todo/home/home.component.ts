import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alltodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((data) => {
      this.alltodos = data;
    });
  }

  deleteItem(id: any) {
    const itemId = typeof id === 'string' ? parseInt(id, 10) : id;
    this.todoService.delete(itemId).subscribe({
      next: (data) => {
        this.alltodos = this.alltodos.filter(item => item.id !== itemId);
        this.todoService.getAll().subscribe((data) => {
          this.alltodos = data;
        });
      },
    });
  }
}
