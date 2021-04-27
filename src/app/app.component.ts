import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, private title: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle('Avenir - Institute of Aviation');
    this.meta.addTags([
      { name: 'keywords', content: 'Institute of Aviation, Institute of Aviation in Thrissur, Aviation College' },
      { name: 'description', content: 'We help Avenians to take off their career with top airlines airport and hospitality industry in the placement opportunities section. Our Placement Cell is rich enough with qualified and experienced experts to groom Avenians for catching their dream flights. We feel pleased when our students get wings from Etihad, British Airways, Qatar Airways, Singapore Airlines, Lufthansa, Malaysia Airlines, Emirates, and a lot more Airlines.' },
    ])
  }
}
