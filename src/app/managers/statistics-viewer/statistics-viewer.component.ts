import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { StatisticsClientService } from './../../http/statistics-client.service';
import { statistic } from './../../models/statistic';
@Component({
  selector: 'app-statistics-viewer',
  templateUrl: './statistics-viewer.component.html',
  styleUrls: ['./statistics-viewer.component.css']
})
export class StatisticsViewerComponent implements OnInit, AfterViewInit {
  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  requestedToday: statistic[];
  constructor(private statistics: StatisticsClientService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.populateRequestedDaily();
    this.populateAvailabledaily();
    this.populateMatchdaily();
  }

  private populateRequestedDaily() {
    this.statistics.getDailyRequestedStatistic().then(data => {
      this.requestedToday = data;
      this.canvas1 = document.getElementById('requested_today');
      this.ctx1 = this.canvas1.getContext('2d');
      const myChart = new Chart(this.ctx1, {
        type: 'bar',
        data: {
          labels: this.requestedToday.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: this.requestedToday.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display: true
        }
      });
    });
  }
  private populateAvailabledaily() {
    this.statistics.getDailyAvailableStatistic().then(data => {
      this.requestedToday = data;
      this.canvas2 = document.getElementById('available_today');
      this.ctx2 = this.canvas2.getContext('2d');
      const myChart = new Chart(this.ctx2, {
        type: 'bar',
        data: {
          labels: this.requestedToday.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: this.requestedToday.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display: true
        }
      });
    });
  }

  private populateMatchdaily() {
    this.statistics.getDailyCompareStatistic().then(data => {
      this.requestedToday = data;
      this.canvas2 = document.getElementById('matching_today');
      this.ctx2 = this.canvas2.getContext('2d');
      const myChart = new Chart(this.ctx2, {
        type: 'bar',
        data: {
          labels: this.requestedToday.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: this.requestedToday.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display: true
        }
      });
    });
  }
}
