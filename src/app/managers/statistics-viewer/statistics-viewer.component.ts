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
  canvas3: any;
  ctx3: any;
  constructor(private statistics: StatisticsClientService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.populateRequestedDaily();
    this.populateAvailableDaily();
    this.populateMatchDaily();
  }

  public onRequestedStatisticChange(event) {
    if (event.index === 0) {
      this.populateRequestedDaily();
    } else if (event.index === 1 ) {
      this.populateRequestedWeekly();
    }else if (event.index === 2) {
      this.populateRequestedMonthly();
    }

  }

  public onAvailableStatisticChange(event) {
    if (event.index === 0) {
      this.populateAvailableDaily();
    } else if (event.index === 1 ) {
      this.populateAvailableWeekly();
    }else if (event.index === 2) {
      this.populateAvailableMontly();
    }
  }

  public onMatchingStatisticChange(event) {
    if (event.index === 0) {
      this.populateMatchDaily();
    } else if (event.index === 1 ) {
      this.populateMatchWeekly();
    }else if (event.index === 2) {
      this.populateMatchMonthly();
    }
  }

  private populateRequestedDaily() {
    this.statistics.getDailyRequestedStatistic().then(data => {
      this.canvas1 = document.getElementById('requested_today');
      this.ctx1 = this.canvas1.getContext('2d');
      const myChart = new Chart(this.ctx1, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }
  private populateRequestedWeekly() {
    this.statistics.getWeekRequestedStatistic().then(data => {
      this.canvas1 = document.getElementById('requested_weekly');
      this.ctx1 = this.canvas1.getContext('2d');
      const myChart = new Chart(this.ctx1, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }
  private populateRequestedMonthly() {
    this.statistics.getMonthRequestedStatistic().then(data => {
      this.canvas1 = document.getElementById('requested_monthly');
      this.ctx1 = this.canvas1.getContext('2d');
      const myChart = new Chart(this.ctx1, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateAvailableDaily() {
    this.statistics.getDailyAvailableStatistic().then(data => {
      this.canvas2 = document.getElementById('available_today');
      this.ctx2 = this.canvas2.getContext('2d');
      const myChart = new Chart(this.ctx2, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateAvailableWeekly() {
    this.statistics.getWeekAvailableStatistic().then(data => {
      this.canvas2 = document.getElementById('available_weekly');
      this.ctx2 = this.canvas2.getContext('2d');
      const myChart = new Chart(this.ctx2, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateAvailableMontly() {
    this.statistics.getMonthAvailableStatistic().then(data => {
      this.canvas2 = document.getElementById('available_monthly');
      this.ctx2 = this.canvas2.getContext('2d');
      const myChart = new Chart(this.ctx2, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateMatchDaily() {
    this.statistics.getDailyCompareStatistic().then(data => {
      this.canvas3 = document.getElementById('matching_today');
      this.ctx3 = this.canvas3.getContext('2d');
      const myChart = new Chart(this.ctx3, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateMatchWeekly() {
    this.statistics.getWeekCompareStatistic().then(data => {
      this.canvas3 = document.getElementById('matching_weekly');
      this.ctx3 = this.canvas3.getContext('2d');
      const myChart = new Chart(this.ctx3, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }

  private populateMatchMonthly() {
    this.statistics.getMonthCompareStatistic().then(data => {
      this.canvas3 = document.getElementById('matching_monthly');
      this.ctx3 = this.canvas3.getContext('2d');
      const myChart = new Chart(this.ctx3, {
        type: 'bar',
        data: {
          labels: data.map(item => item.region),
          datasets: [{
            label: '# of requested resources',
            data: data.map(item => item.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          display: true
        }
      });
    });
  }
}
