import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/data/product.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  products$;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getCollection$().subscribe(products => {
      this.products$ = products;
    });
  }


}
