import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwaggerRoutingModule } from './swagger-routing.module';
import { SwaggerUiComponent } from './pages/swagger-ui/swagger-ui.component';


@NgModule({
  declarations: [SwaggerUiComponent],
  imports: [
    CommonModule,
    SwaggerRoutingModule
  ]
})
export class SwaggerModule { }
