import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../assets/lottie/about.json',
  };

  constructor() { }

  ngOnInit(): void {
  }


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
