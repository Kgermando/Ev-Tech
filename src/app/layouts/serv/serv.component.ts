import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit {

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
