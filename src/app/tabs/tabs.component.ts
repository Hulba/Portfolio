import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  themeClass = '';
  portItems = [
    {
      name: 'Star-Wars-RPG',
      image: 'assets/images/portitems/Star-Wars-RPG_prev.jpg',
      github: 'https://github.com/lantanios/Star-Wars-RPG',
      liveWeb: 'https://lantanios.github.io/Star-Wars-RPG/',
      description: 'Simple strategic game with artificial play option.',
    },
    {
      name: 'Diet Planner',
      image: 'assets/images/portitems/diet-planner-prev.jpg',
      github: 'https://github.com/lantanios/Project_2_Angular',
      liveWeb: 'https://someplanner.herokuapp.com/',
      description: 'This application allows users to search for recipes and store favorites with simple drag to favorites section..',
    },
    {
      name: 'sequelizedBurger',
      image: 'assets/images/portitems/sequelizedBurger_prev.jpg',
      github: 'https://github.com/lantanios/sequelizedBurger',
      liveWeb: 'https://calm-citadel-84985.herokuapp.com/',
      description: 'Simple application with frontend and backend which interacts with MySQL server(with sequelize ORM) using express server and socket.io using MVC design pattern. In frontend it is using handlebars to manipulate DOM..',

    },
    {
      name: 'GifTastic',
      image: 'assets/images/portitems/Giftastic_prev.jpg',
      github: 'https://github.com/lantanios/GifTastic',
      liveWeb: 'https://lantanios.github.io/GifTastic/',
      description: "GifTastic is using giffy API and jQuery ajax for getting gif files from the API. Game is using browser's local storage to store the favorite gifs..",

    },
    {
      name: 'FriendFinder',
      image: 'assets/images/portitems/Friends_Finder_prev.jpg',
      github: 'https://github.com/lantanios/FriendFinder',
      liveWeb: 'https://hidden-refuge-58278.herokuapp.com/',
      description: "This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.",
    },
    {
      name: 'TriviaGame',
      image: 'assets/images/portitems/Trivia_prev.jpg',
      github: 'https://github.com/lantanios/TriviaGame',
      liveWeb: 'https://lantanios.github.io/TriviaGame/',
      description: 'Trivie game is using giffy API and jQuery ajax for getting gif files based on stored questions. Game counts hits and looses, whichever reaches 5 the game ends and starts from the beginning..',

    },
    {
      name: 'Word Guess Game',
      image: 'assets/images/portitems/Word-Guess-Game_prev.jpg',
      github: 'https://github.com/lantanios/Word-Guess-Game',
      liveWeb: 'https://lantanios.github.io/Word-Guess-Game/',
      description: 'Simple game with sounds. Using HTML, CSS and Javascript..',

    },
    {
      name: 'Train scheduler',
      image: 'assets/images/portitems/Train-scheduler_prev.jpg',
      github: 'https://github.com/lantanios/Train-scheduler',
      liveWeb: 'https://lantanios.github.io/Train-scheduler/.',
      description: "Train scheduler is calculating next train arrival time based on first train's date/time and it's frequency..",
    },
    {
      name: 'Responsive Portfolio',
      image: 'assets/images/portitems/resp-portfolio-prev.jpg',
      github: 'https://github.com/lantanios/Responsive-Portfolio/tree/master',
      liveWeb: 'https://lantanios.github.io/Responsive-Portfolio/portfolio.html',
      description: '.',
    }

  ];
  constructor() { }

  ngOnInit() {
  }





}
