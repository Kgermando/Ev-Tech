import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options1: AnimationOptions = {
    path: '../../../assets/lottie/anime.json',
  };

  options2: AnimationOptions = {
    path: '../../../assets/lottie/software.json',
  };

  options3: AnimationOptions = {
    path: '../../../assets/lottie/web.json',
  };

  options4: AnimationOptions = {
    path: '../../../assets/lottie/web-responsive.json',
  };

  options5: AnimationOptions = {
    path: '../../../assets/lottie/smartphone.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
