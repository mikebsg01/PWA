import { Component, OnInit } from '@angular/core';
import { LogrosService, ILogro } from '../services/logros.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-logro',
  templateUrl: './logro.component.html',
  styleUrls: ['./logro.component.css']
})
export class LogroComponent implements OnInit {

  logro : ILogro;

  constructor(private logrosService : LogrosService, 
              private route : ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.logro = this.logrosService.find(parseInt(id));
    console.log(this.logro);
  }
}
