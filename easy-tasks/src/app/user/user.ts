import { Component, computed, input, output } from '@angular/core';
import { Card } from "../shared/card/card";
import { UserInput } from './user.model';

@Component({
  selector: 'app-user',
  imports: [Card],
  template: `
    <app-card>
      <button [class.active]="selected()" (click)="onSelectUser()">
        <img [src]="imagePath()" [alt]="user().name" />
        <span>{{ user().name }}</span>
      </button>
    </app-card>
  `,
  styleUrl: 'user.scss',
})
export class User {
  user = input.required<UserInput>();
  select = output<string>();
  selected = input.required<boolean>();

  imagePath = computed(() => `users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
