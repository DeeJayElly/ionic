import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../dist';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class E2EApp {
  root = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  entryComponents: [
    E2EApp,
    E2EPage
  ]
})
export class AppModule {}
