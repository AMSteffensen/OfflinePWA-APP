import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template:  `
  <div class="container">
    <app-header></app-header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  <app-footer></app-footer>
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lovely-offline';
  notes$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.notes$ = db.collection('notes').valueChanges();
  }
}
