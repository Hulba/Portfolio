import { Component, OnInit, OnChanges } from '@angular/core';
import { port } from './portfolio';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  themeClass = '';
  portItems = port.portItems;
  bioText = [];
  plainText = "";
  constructor() { }

  ngOnInit() {

    this.showBio();

  }


  showBio(){
    var that = this;
    this.bioText = [];
    for (let i = 0; i < port.text.length; i++){

      (function (i) {
        setTimeout(function () {
          that.bioText.push(port.text[i]);
        }, 300*i);
      })(i);
        
    }
  }



}