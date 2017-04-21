import { Component, OnInit,Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-mypost',
  template: `
    {{data.title}}
  `
})
export class MypostComponent{

  @Input()
  data:any;

  constructor() { }


}
