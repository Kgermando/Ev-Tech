import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/data/product.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productFG: FormGroup;
  product: Product = {
    id: '',
    Title: '',
    Description: '',
    productImageUrl: '',
    url: '',
    Created: null
  };

  isPreview = false;
  getSupplierID: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private storage: AngularFireStorage,
              private productService: ProductService,
              private snackBar: MatSnackBar) {
              }

  ngOnInit(): void {
    this.makingAddProductForm();
  }

  makingAddProductForm() {
    this.productFG = this.formBuilder.group({
      id: [''],
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  getUserId(){
    this.productService.getUserId().subscribe(res => {
      this.getSupplierID = res;
    });
  }

  onSubmit() {
    this.product = {
      Title: this.productFG.value.Title,
      Description: this.productFG.value.Description,
      url: this.productFG.value.url,
      productImageUrl: this.imgDownloadUrl,
    };
    this.productService.createProduct(this.product);
    this.snackBar.open('Message Envoyé!');
    this.router.navigate(['/admin/products/product-list']);
  }


  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  //download url string
  imgDownloadUrl: string;

  // State for dropzone CSS toggling
  isHovering: boolean;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    this.isPreview = true;
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `Product/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    // Download URL file
    this.snapshot = this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = this.storage.ref(path).getDownloadURL();
          console.log(this.downloadURL); // Get a Observable
          this.downloadURL.subscribe(res => {
            if (res) {
              this.imgDownloadUrl = res;
            }
          });
        })
      );

  }

   // Determines if the upload task is active
   isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

}
