import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { IgxIconModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxToggleModule, IgxListModule, IgxDropDownModule, IgxButtonGroupModule, IgxNavbarModule, IgxTabsModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanViewComponent,
    ListViewComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxToggleModule,
    FormsModule,
    IgxListModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxNavbarModule,
    IgxTabsModule,
    IgxAccordionModule,
    IgxExpansionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
