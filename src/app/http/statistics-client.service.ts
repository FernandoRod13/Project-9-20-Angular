import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { statistic } from './../models/statistic';

@Injectable()
export class StatisticsClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getDailyRequestedStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  'statistics/daily/resources/requested';
    return this.http.get(url).map( res => {
      return res['Resource_Requested'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getDailyAvailableStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/daily/resources/available';
    return this.http.get(url).map( res => {
      return res['Resource_Available'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getDailyCompareStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/daily/resources/between_requested_available';
    return this.http.get(url).map( res => {
      return res['Resource_Compare'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }


  public getWeekRequestedStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/trending/resources/requested';
    return this.http.get(url).map( res => {
      return res['Resource_Requested'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getWeekAvailableStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/trending/resources/available';
    return this.http.get(url).map( res => {
      return res['Resource_Available'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getWeekCompareStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/trending/resources/between_requested_available';
    return this.http.get(url).map( res => {
      return res['Resource_Compare'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getMonthRequestedStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/month/resources/requested';
    return this.http.get(url).map( res => {
      return res['Resource_Requested'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getMonthAvailableStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/month/resources/available';
    return this.http.get(url).map( res => {
      return res['Resource_Available'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }

  public getMonthCompareStatistic(): Promise<statistic[]> {
    const url = this.baseURL +  '/statistics/month/resources/between_requested_available';
    return this.http.get(url).map( res => {
      return res['Resource_Compare'].map( item => {
        return new statistic(
          item.Region,
          item.Amount
        );
      });
    }).toPromise();
  }



}
