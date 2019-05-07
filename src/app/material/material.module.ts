import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatStepperModule
  
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
