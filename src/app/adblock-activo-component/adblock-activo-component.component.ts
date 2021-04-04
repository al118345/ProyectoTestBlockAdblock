import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adblock-activo-component',
  templateUrl: './adblock-activo-component.component.html',
  styleUrls: ['./adblock-activo-component.component.css']
})
export class AdblockActivoComponentComponent implements OnInit {
  currentURL = '';

  // tslint:disable-next-line:variable-name
  constructor(private _Activatedroute: ActivatedRoute) {
  }

  ngOnInit() {


    this.currentURL = this._Activatedroute.snapshot.paramMap.get('route');


  }
}
