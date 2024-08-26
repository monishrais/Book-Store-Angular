import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent,FooterComponent],
  imports: [CommonModule,MaterialModule,RouterModule,  
  ], 
  exports:[ToolbarComponent,FooterComponent,MaterialModule] 
})
export class SharedModule { }
