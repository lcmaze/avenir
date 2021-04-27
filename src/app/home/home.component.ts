import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {}

  toggler(){
    let classb = document.getElementById('nav-dropper');
    classb.classList.remove('show');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 70) {
      let element = document.getElementById('logo');
      let gradient = document.getElementById('gradient');
      element.style.width = '160px';
      gradient.style.height = '5px';
    } else {
      let element = document.getElementById('logo');
      let gradient = document.getElementById('gradient');
      element.style.width = '200px';
      gradient.style.height = '10px';
    }
  }

  carouselOptions = {
    margin: 0,
    nav: false,
    responsiveClass: true,
    loop: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1,
      }
    }
  }

  mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = { items: 1, dots: true, nav: false };
  myCarouselOptions = { items: 3, dots: true, nav: true };

}
