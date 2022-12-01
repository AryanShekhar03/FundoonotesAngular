import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DataService } from 'src/app/services/dataservice/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // router: any;
  // filteredstring: string ='';
  // message:any;
  // subscription: Subscription;
  grid: boolean = true;


  constructor(private dataservice : DataService , private router: Router) { }

  ngOnInit(): void {
    // this.subscription = this.data.currentMessage.subscribe(message => this.message = message)


  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

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

  onClickView() {
    // return this.grid === true ? (this.grid = false) : (this.grid = true);
    this.grid = !this.grid;
    this.dataservice.isList.next(this.grid);
  }
 }
 
