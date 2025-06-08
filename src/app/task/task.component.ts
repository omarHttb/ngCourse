import { Component, inject, Input } from '@angular/core';
import { TaskInterface } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskInterface;
  taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
