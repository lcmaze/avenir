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
      { name: 'description', content: 'Avenir’s focus lies in creating versatile, structured training programs and certificate courses for students. The training is made after years of dedicated research and provides each student with the knowledge and skills required to realize great success within the fields of Aviation, Hospitality, and Travel and Customer Service.avenir institute of aviation' },
      { name: 'keywords', content: 'avenir institute of aviation,courses,DAHTM,DHTCS,IATA' },
      { name: 'author', content: 'Avenir' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ])
  }
}
