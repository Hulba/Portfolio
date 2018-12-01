import { Component, OnInit, OnChanges } from '@angular/core';
import { port } from './portfolio';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  portItems = [];
  bioText = [];
  showAboutMe: boolean = false;
  showPortfolio: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.AboutMe();

  }
  
  AboutMe(){
    this.showAboutMe = true;
    this.showPortfolio = false;
    this.bioText = [];

    this.slowArray(this.bioText, port.text);

  }

  Portfolio(){
    this.showAboutMe = false;
    this.showPortfolio = true;
    this.portItems = [];
    this.slowArray(this.portItems, port.portItems);
  }

  slowPortfolio(){
    this.showAboutMe = false;
    this.showPortfolio = true;
    this.portItems = [];
    this.slowArray(this.portItems, port.portItems);
  }
  
  slowArray(emptyArr, sourceAS){
    
    for (let i = 0; i < sourceAS.length; i++){

      (function (i) {
        setTimeout(function () {
          emptyArr.push(sourceAS[i]);
        }, 300*i);
      })(i);
        
    }
  }



}