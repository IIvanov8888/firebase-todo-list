import { Component } from '@angular/core';

const ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    alignTo = 'center';

    public toggleAlignment() {
        const j = ALIGN_OPTIONS.indexOf(this.alignTo);
        this.alignTo = ALIGN_OPTIONS[(j + 1) % ALIGN_OPTIONS.length];
    }
}
