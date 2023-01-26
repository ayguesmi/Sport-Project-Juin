import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsItem: any = [];
  constructor() { }

  ngOnInit() {
    this.newsItem = [
      { id: 1, title: "title1", date: "01/08/2022", img: "assets/images/img_1.jpg", author: "author1", avatar: "assets/images/person_1.jpg" },
      { id: 2, title: "title2", date: "02/08/2022", img: "assets/images/img_2.jpg", author: "author2", avatar: "assets/images/person_2.jpg" },
      { id: 3, title: "title3", date: "03/08/2022", img: "assets/images/img_3.jpg", author: "author3", avatar: "assets/images/person_3.jpg" },
    ]
  };
};
