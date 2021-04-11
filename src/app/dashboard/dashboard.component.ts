import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectsCost:number;

  CurrentExpenditure:number;
  AvailableFunds:number;

  constructor() { }

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username="John Smith";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectsCost=21113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52;
  }

}
