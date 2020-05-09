import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth/auth.service';
import { ProfileService } from './auth/services/auth/profile.service';


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),

    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
              {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
              AuthService,
              ProfileService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
