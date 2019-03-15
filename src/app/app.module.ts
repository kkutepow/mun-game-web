import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { PlayerPanelCardStackComponent } from './player-panel-card-stack/player-panel-card-stack.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
    {
        path: 'board',
        component: AppComponent,
        data: { title: 'Boards List' },
    },
    { path: '', redirectTo: '/board', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        PlayerPanelComponent,
        PlayerPanelCardStackComponent,
        CardDetailsComponent,
        TableComponent,
    ],
    imports: [
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'mun-game'),
        AngularFireDatabaseModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
})
export class AppModule {}
