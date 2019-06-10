import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../src/pages/Global';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = LoginPage;
  private signInForm: FormGroup;
  result: any;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public http: Http,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private nativeStorage: NativeStorage) {
    // this.nativeStorage.getItem('mobile')
    // .then(
    // data => console.log(JSON.stringify(data)),
    // error => console.error(error)
    // );
  //   if (mobile == '' || mobile == undefined || mobile == null) {
  //   this.rootPage = LoginPage
  //   return false;
  // } else {
  //   Global.mobileNumber = mobNum;
  //   this.http.get(`${Global.url}admin/adminLogin/`+this.signInForm.get('mobile_number').value)
  //     .subscribe(data => {
  //       this.response = data.json();
  //       Global.custmerData = this.response.profile;
  //       this.status = this.response.status;
  //       this.role = this.response.role;
  //       Global.role = this.response.role;
  //       if (this.status == 200 && this.role == 'LEAD') {
  //         this.nav.setRoot(DashboardPage)
  //       } else if (this.status == 200 && this.role == 'CUS') {
  //         let toast = this.toastCtrl.create({
  //           message: this.response.result,
  //           duration: 3000,
  //           position: 'bottom'
  //         });
  //         toast.present();
  //         this.nav.setRoot(HomePage)
  //       } else if (this.status == 200 && this.role == '' || this.role == undefined || this.role == 'null') {
  //         let toast = this.toastCtrl.create({
  //           message: this.response.result,
  //           duration: 3000,
  //           position: 'bottom'

  //         });
  //         toast.present();
  //         this.nav.setRoot(LoginPage)
  //       } if (this.status == 404) {
  //         let toast = this.toastCtrl.create({
  //           message: 'Not A Valid User',
  //           duration: 3000,
  //           position: 'bottom'

  //         });
  //         toast.present();
  //       }

  //     }, error => {
  //       let toast = this.toastCtrl.create({
  //         message: error,
  //         duration: 3000,
  //         position: 'bottom'

  //       });
  //       toast.present();
  
  //     });

 // }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

