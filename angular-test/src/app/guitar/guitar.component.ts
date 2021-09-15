import { Component, EventEmitter,OnInit, Input, Output} from '@angular/core';

import {GroupsDataService} from 'src/app/services/guitars-data.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})

export class GroupComponent implements OnInit {
  @Input() group;
  @Input() grpIndex;
  showInfo = false;
  
  constructor(private groupService:GroupsDataService){}

  ngOnInit(){
  }

  delGroup(){
  	this.groupService.deleteGroup(this.grpIndex);
  }
}

