import { Component, OnInit, OnDestroy } from '@angular/core';
import {StatisticsClientService} from './../../http/statistics-client.service'
import { statistic } from '../../models/statistic';

@Component({
  selector: 'app-statistics-manager',
  templateUrl: './statistics-manager.component.html',
  styleUrls: ['./statistics-manager.component.css']
})
export class StatisticsManagerComponent implements OnInit, OnDestroy {
  public dataSource: Object;
  public title: string;
  public dashboard: statistic[];
  private dashObservable;
  constructor(private statistic: StatisticsClientService) { 

    
  }

 
  ngOnInit() {
    this.dashObservable = this.statistic.getDailyRequestedStatistic().subscribe( data => {
      this.dataSource = data['Resources_Requested'];
    })
  }

  ngOnDestroy() {
    this.dashObservable.unsubcribe();

  }

}
