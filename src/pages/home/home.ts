import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BluetoothSerial } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  openBluetoothMenu(){
  	BluetoothSerial.enable();

	if(BluetoothSerial.isEnabled()){
		console.log("encendido");
	}else{
		console.log("no encendido");
	}

	if(BluetoothSerial.isConnected()){
		console.log("conectado");
	}else{
		console.log("no conectado");
	}

  }

}
