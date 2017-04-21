import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Final Exercise!';

  postData:any;
  constructor(private postService:PostService) { }
  
  ngOnInit(){

      this.postService.getPosts().subscribe(
          response => {
            this.postData = response.json();
            console.log(this.postData[0].title);

          },
          error=>console.log(error),
          ()=>console.log("Completed")

      );

  }
}
