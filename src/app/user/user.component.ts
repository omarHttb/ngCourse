import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../../shared/dummy-users';
import { UserInterface } from '../../models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserInterface;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // //this using signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });
  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    debugger;
    this.select.emit(this.user.id);
  }
}
