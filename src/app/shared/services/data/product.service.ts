import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QueryFn, AngularFirestoreCollection, AngularFirestore,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Product } from '../../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userId: string;
  product: any;
  productCollection: AngularFirestoreCollection<Product>;
  productInfo: Observable<Product[]>;

 // Pour la methode getOneProduct()
 private productDoc: AngularFirestoreDocument<Product>;
 public productView: Observable<Product>;

 constructor( private angularfireauth: AngularFireAuth,
              private afs: AngularFirestore
            ) {
      this.angularfireauth.authState.subscribe(user => {
        if (user) { this.userId = user.uid; }
      });

      this.productCollection = afs.collection<Product>('Products');
    }

    getUserId(): Observable<any> {
      return new Observable(observer => {
        this.angularfireauth.authState.subscribe(user => {
          observer.next(user.uid);
        });
      });
    }

  createProduct(productInfo) {
    this.productCollection.add(productInfo);
  }

  updateProduct(productInfo, productId) {
    this.productCollection.doc(productId).update(productInfo);
  }


  getProductBySupplier(): Observable<any> {
    return new Observable(observer => {
      this.afs.collection<Product>('Products')
      .snapshotChanges()
      .subscribe(product => {
        observer.next(product);
      });
    });
  }

  getProfileBySupplierId(supplierID): Observable<any> {
    return new Observable(observer => {
      this.afs
        .collection('users')
        .doc(supplierID)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.data();
            const id = changes.payload.id;
            return { id, data };
          })
        ).subscribe(profile => {
          observer.next(profile);
        });
    });
  }

  removeProductByID(id){
    this.afs.collection('Products').doc(id).delete();
  }

  getProductByProductId(id): Observable<any> {
    return new Observable(observer => {
      this.productCollection
        .doc(id)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.data();
            const id = changes.payload.id;
            return { id, data };
          })
        )
        .subscribe(res => {
          observer.next(res);
        });
    });
  }

   // Get all data in database
   getCollection$(ref?: QueryFn): Observable<Product[]> {
    return this.afs.collection<Product>('Products', ref)  // => ref.orderBy('Created', 'asc')
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const id = data.id;
          return { id, ...data };
        });
      })
      );
  }

  // Geet one data in database
  getOneProduct(idProduct: string) {
    this.productDoc = this.afs.doc<Product>(`Products/${idProduct}`);
    return this.productView = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data();
        data.Created = new Date(data.Created.seconds * 1000);
        data.id = action.payload.id;
        return data;
      }
    }));
  }

}
