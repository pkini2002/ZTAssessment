import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-hover-card',
  templateUrl: './admin-hover-card.component.html',
  styleUrls: ['./admin-hover-card.component.css'],
})
export class AdminHoverCardComponent {
  open: boolean = false;
  testmakeropen: boolean = false;
  testnav:boolean = false;
  hovercard: boolean = false;
  navwarning: boolean = false;
  ordering:boolean=false;
  itemsession:boolean=false;
  timelimit:boolean=false;
  selection:boolean=false;
  itemprop:boolean=false;
  itemprope:boolean=false;
  itemprop2:boolean=false;
  scoring:boolean=false;
  outcome:boolean=false;
  itempropeadmin:boolean=true;
  itemprop8:boolean=false;
  smallcomp:boolean=false;
  frame545:boolean=false;

  testnavi(){
    this.testnav=true;
    this.hovercard=false;
  }

  naviwarning(){
    this.navwarning=true;
    this.hovercard=false;
  }

  testtaker(){
    this.testmakeropen=true;
    this.hovercard=false;
  }

  select(){
    this.selection=true;
    this.hovercard=false;
  }

  order(){
    this.ordering=true;
    this.hovercard=false;
  }

  sessioncontrol(){
    this.itemsession=true;
    this.hovercard=false;
  }

  timelim(){
    this.timelimit=true;
    this.hovercard=false;
  }

  outcomedec(){
    this.outcome=true;
    this.itemprope=false;
  }

  score(){
    this.scoring=true;
    this.itemprope=false;
  }

  timelimitclick(){
    this.timelimit=true;
    this.itemprope=false;
  }

  itempropclick(){
    this.itemprop2=true;
    this.itemprope=false;
  }

  itempropclick1(){
    this.itemprop8=true;
    this.itempropeadmin=false;
  }

  itemsessioncontr(){
    this.itemsession=true;
    this.itempropeadmin=false;
  }

  timelimi(){
    this.timelimit=true;
    this.itempropeadmin=false;
  }
}
