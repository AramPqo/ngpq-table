import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { ExampleModule } from './example/example.module';
import { NgPqTableModule } from 'projects/ngpq-table/src/public-api';

import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { Comments } from '../assets/db/comments-data';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgPqTableModule,
    ExampleModule,
    MarkdownModule.forRoot(),
  ],
  providers: [{ provide: 'comments', useValue: Comments }],
  bootstrap: [AppComponent],
})
export class AppModule {}
