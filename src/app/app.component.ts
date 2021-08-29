import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlineBakery';
  mediaSub: Subscription | any;
  deviceXs: Boolean | any;

  
  constructor(public mediaObserver: MediaObserver){}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
    }
    ngOnDestory(){
      this.mediaSub.unsubscribe();
    }
}
