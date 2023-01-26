import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any = [];
  constructor() { }

  ngOnInit() {
    this.articles = [
      { id: 1, title: "title1", description: "description1", img: "assets/images/img_2.jpg", author: "abderrahmen", date: "01/02/2022" },
      { id: 2, title: "title2", description: "description2", img: "assets/images/img_1.jpg", author: "ali", date: "01/02/2022" },
      { id: 3, title: "title3", description: "description3", img: "assets/images/img_3.jpg", author: "saleh", date: "01/02/2022" },
      { id: 4, title: "title4", description: "description4", img: "assets/images/img_2.jpg", author: "karim", date: "01/02/2022" },
      { id: 5, title: "title5", description: "description5", img: "assets/images/img_1.jpg", author: "mohsen", date: "01/02/2022" }
    ]
  }
  //   ch = "abderrahmen";
  //   tab= []; t= [];
  //   x: string;
  //   execute() {
  //     var occ = 0;
  //     for (let i = 0; i < this.ch.length - 1; i++) {
  //       for (let j = i + 1; j < this.ch.length; j++) {
  //         if (this.ch[i] == this.ch[j]) {
  //           occ += 1
  //           this.tab[i] = this.ch[i] + ":" + occ
  //         }
  //         else {
  //           this.tab[i] = this.ch[i] + ":" + (occ + 1)
  //         }
  //       }
  //       occ = 0;
  //     }

  //     for (let i = 0; i < this.tab.length; i++) {
  //       console.log(this.tab[i]);
  //     }
  //   }
  // }

  // verif(c,ta) {
  //  var exist = false ;
  //  var t=[]
  //  var c:string ;
  // for (let i = 0; i < t.length; i++) {
  //     if (t[i] == c) {
  //       exist = true;
  //     }
  // }
}
