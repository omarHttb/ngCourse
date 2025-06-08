import { Component, inject, input, Input } from '@angular/core';

import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddingTask: boolean = false;
  private tasksService = inject(TasksService);

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onOpenAddTaskDialog() {
    this.isAddingTask = true;
  }

  onCloseAddTask(isAddingTask: boolean) {
    this.isAddingTask = isAddingTask;
  }
}
