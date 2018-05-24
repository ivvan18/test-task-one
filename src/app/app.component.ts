import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isBrandShown = false;
  isLogoShown = true;
  showMenu = false;

  toggleBrand() {
    this.isBrandShown = !this.isBrandShown;
  }

  toggleLogo() {
    this.isLogoShown = !this.isLogoShown;
  }

  setDefault() {
    this.isBrandShown = false;
    this.isLogoShown = true;
    this.showMenu = false;
  }

  onToggleClicked() {
    if (window.innerWidth <= 450) {
      setTimeout(() => {
        this.toggleLogo();
        this.toggleBrand();
      }, 100);
    } else {
      this.setDefault();
    }
  }

  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(() => {
        if (window.innerWidth > 450) {
          console.log('changed!');
          this.setDefault();
        }
      });
  }

  onSectionClicked() {
    (<HTMLElement>event.target).parentElement.parentElement.parentElement.classList.remove('show');
    this.setDefault();
  }

}
