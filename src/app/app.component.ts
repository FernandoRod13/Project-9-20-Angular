import { Component, OnInit, OnDestroy} from '@angular/core';
import { StatusMessageService } from './error-handling/status-message.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private errorObservable;
  constructor (private status: StatusMessageService, private snack: MatSnackBar ) {}

  ngOnInit() {
    this.errorObservable = this.status.currentAlert.subscribe( state => {
      if (state != null) {
        this.snack.open( state.message, 'Dismiss', {
          duration: 3000
        });
      }
    });
  }

  ngOnDestroy() {
    this.errorObservable.unsubscribe();

  }


}
