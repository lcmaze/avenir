import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalview = new Subject();
  galleryPath : any = 'assets/gallery/';

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.modalview = null;
  }

  toggler(){
    let classb = document.getElementById('nav-dropper');
    classb.classList.remove('show');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 70) {
      let element = document.getElementById('logo');
      let gradient = document.getElementById('gradient');
      element.style.width = '150px';
      gradient.style.height = '5px';
    } else {
      let element = document.getElementById('logo');
      let gradient = document.getElementById('gradient');
      element.style.width = '180px';
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

  carouselOptions2 = {
    margin: 20,
    nav: false,
    responsiveClass: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992:{
        items: 3,
      },
      1200: {
        items: 4
      }
    }
  }
  

  modal(item){
   this.modalview = item;
  }

  closemodal(){
    this.modalview = null;
  }

}
