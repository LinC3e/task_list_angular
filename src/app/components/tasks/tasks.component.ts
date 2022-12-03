import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { task_list } from '../../mock-task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = task_list
  constructor() { }

  ngOnInit(): void {
  }

}
