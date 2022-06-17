import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any, type: string): SafeHtml | SafeStyle | void {
    if (type && value) {
      switch (type) {
        case 'html':
          return this.sanitizer.bypassSecurityTrustHtml(value);
        case 'style':
          return this.sanitizer.bypassSecurityTrustStyle(value);
      }
    }
  }
}
