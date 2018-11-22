import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLinkedInProfile(){
    let github = window.open('https://www.linkedin.com/in/giorgikoranashvili/', '_blank');
    github.focus();
  }

  openGithubProfile(){
    let github = window.open('https://github.com/lantanios', '_blank');
    github.focus();
  }

  openGithubRepos(){
    let github = window.open('https://github.com/lantanios?tab=repositories', '_blank');
    github.focus();
  }
  
}
