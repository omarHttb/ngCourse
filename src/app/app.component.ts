import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../shared/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'ngCourse';
  name!: string;
  selectedUserId?: string;

  onSelectUser(id: string) {
    console.log(id);
    this.selectedUserId = id;
    this.name = this.users.find((x) => x.id == id)?.name!;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
