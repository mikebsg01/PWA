import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  logros : ILogro[];
  title : string = "Bienvenido";

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
  }

  getLogros() : ILogro[] {
    return [{
      id: 1,
      title: "Lorem ipsum Ad dolore",
      description: "Lorem ipsum Incididunt reprehenderit Duis anim voluptate do occaecat commodo ad amet culpa ut anim in laborum occaecat incididunt dolore labore veniam in."
    },
    {
      id: 2,
      title: "Lorem ipsum Id."
    },
    {
      id: 3,
      title: "Lorem ipsum Cupidatat.",
      description: "Lorem ipsum Cupidatat magna anim dolor adipisicing labore est dolore eu et."
    }]
  }
}

interface ILogro {
  id: number;
  title: string;
  description ?: string;
}