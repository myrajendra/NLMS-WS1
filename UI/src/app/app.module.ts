import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDialogConfig
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { GroundingComponent } from './grounding/grounding.component';
import { SellersComponent } from './sellers/sellers.component';
import { BeneficiaryService } from './beneficiaries/services/beneficiary.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CookieService } from 'ngx-cookie-service';

import { BeneficiaryDialogComponent } from './beneficiaries/dialog/beneficiary-dialog/beneficiary-dialog.component';

const routes: Routes = [{
  path: '', //default pathMatch: 'prefix'
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full'
},
{
  path: 'beneficiaries',
  component: BeneficiariesComponent,
  pathMatch: 'full'
}
  ,
{
  path: 'sellers',
  component: SellersComponent,
  pathMatch: 'full'
},
{
  path: 'grounding',
  component: GroundingComponent,
  pathMatch: 'full'
}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    BeneficiariesComponent,
    GroundingComponent,
    SellersComponent,
    DashboardComponent,
    BeneficiaryDialogComponent
  ],
  entryComponents:[BeneficiaryDialogComponent],
  providers: [BeneficiaryService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
