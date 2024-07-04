import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IncidentComponent } from './incident/incident.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './custom-mat-paginator-intl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CameraFilterPipe } from './camera-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    CameraFilterPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    NgbModule,NgbPaginationModule, NgbAlertModule,BrowserAnimationsModule,FormsModule,MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
  ],
    
  providers: [
    // provideAnimationsAsync(),
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
