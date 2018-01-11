import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SanitizeHtmlPipe } from './sanitize-html/sanitize-html.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [SanitizeHtmlPipe],
  exports: [SanitizeHtmlPipe]
})
export class NgSecurityPipeModule {}
