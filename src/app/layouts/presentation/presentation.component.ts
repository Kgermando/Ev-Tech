import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/data/product.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  p = 1;

  products$;

  loading = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productService.getCollection$().subscribe(products => {
      this.loading = true;
      this.products$ = products;
      this.loading = false;
    });
  }


}
