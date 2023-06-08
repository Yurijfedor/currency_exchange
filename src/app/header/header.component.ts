import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: number = 0;
  eurRate: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';
    this.http.get<any>(`${apiUrl}?ids=usd&vs_currencies=uah`).subscribe(data => {
      this.usdRate = data.usd.uah;
    });
    this.http.get<any>(`${apiUrl}?ids=eur&vs_currencies=uah`).subscribe(data => {
      this.eurRate = data.eur.uah;
    });
  }
}

