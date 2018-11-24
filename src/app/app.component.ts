import { Component, OnInit } from '@angular/core';
// import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Portfolio';

  constructor ( 
    // private overlayContainer: OverlayContainer
    ){}

  ngOnInit(): void {
    // this.overlayContainer.th
  }

  toggleTheme(){

    if (document.body.classList.contains("theme-1"))
    document.body.classList.replace("theme-1", "theme-2")
    else document.body.classList.replace("theme-2", "theme-1")
    
  }
}