import { Component, OnInit , Input } from '@angular/core';
import { Task } from '../../task';
import { task_list } from '../../mock-task';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = task_list[0]
  constructor() { }

  ngOnInit(): void {
  }

}
