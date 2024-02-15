import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Todo[]>('http://localhost:3000/tasks');
  }

  create(data: Todo) {
    return this.httpClient.post('http://localhost:3000/tasks', data);
  }

  edit(id: number) {
    return this.httpClient.get<Todo>(`http://localhost:3000/tasks/${id}`);
  }

  update(data:Todo) {
    return this.httpClient.put<Todo>(`http://localhost:3000/tasks/${data.id}`, data);
  }

  delete(id: number) {
    return this.httpClient.delete<Todo>(`http://localhost:3000/tasks/${id}`);
  }
}
