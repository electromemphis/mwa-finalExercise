import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostService } from './post.service';
import { MypostComponent } from './mypost.component';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MypostComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
