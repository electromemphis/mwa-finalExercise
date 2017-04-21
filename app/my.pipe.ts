import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class MyPipe implements PipeTransform {

  transform(post: any, filter?: any): any {

    let newPost = [];
    if(post){
      newPost = post.filter((item)=>{
                  let regEx = new RegExp(filter,"g");
                  return item.title.match(regEx);
              });
    }
    return newPost;
  }

}
