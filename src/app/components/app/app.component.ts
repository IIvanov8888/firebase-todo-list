
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  // fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * @author Ivelin Ivanov
   * @param {}
   * @description login the user
   */

  login() {
    this.auth.googleLogin();
  }

  /**
   * @author Ivelin Ivanov
   * @param {}
   * @description logout the user
   */

  logout() {
   this.auth.signOut();
  }

  /**
   * @author Ivelin Ivanov
   * @param {}
   * @description scale the width
   */

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
