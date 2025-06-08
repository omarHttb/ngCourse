import {
  Component,
  EventEmitter,
  inject,
  Input,
  NgModule,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeTaskDialog = new EventEmitter<boolean>();
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  private taskService = inject(TasksService);

  onCloseTaskDialog() {
    this.closeTaskDialog.emit(false);
  }

  onAddTaskSubmit() {
    this.taskService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        date: this.taskDueDate,
      },
      this.userId
    );
    this.closeTaskDialog.emit(false);
  }
}
