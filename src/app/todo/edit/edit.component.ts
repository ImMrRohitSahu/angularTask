import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formdata: Todo = {
    id: "0",
    title: '',
    description: '',
    done: false,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getByid(id);
    });
  }

  getByid(id:number) {
    this.todoService.edit(id).subscribe((data) => {
      this.formdata = data;
      console.log(this.formdata)
    });
  }

  update(){
    this.todoService.update(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['todo/home']);
      },
      error: (error)=>{
        console.log(error)
      }
    });
  }
}
