import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  router: any;
  // filteredstring: string ='';
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {


  }
  Search(event:any){
    console.log(event.target.value)
    this.dataservice.outgoingData(event.target.value)
  }
  // view(event:any){
  //   console.log(event.target.value)
  //   this.dataservice.outgoingData(event.target.value)

  // }
  Logout() 
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/signin');
  }
 }
 
