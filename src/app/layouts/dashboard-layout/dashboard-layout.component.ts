import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BackendHeaderComponent } from "../../shared/backend-header/backend-header.component";
import { BackendFooterComponent } from "../../shared/backend-footer/backend-footer.component";
import { BackendSidebarComponent } from "../../shared/backend-sidebar/backend-sidebar.component";
import { ContentWrapperComponent } from "../../shared/content-wrapper/content-wrapper.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { BackendTopModalComponent } from "../../shared/backend-top-modal/backend-top-modal.component";

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.css',
    imports: [
        RouterModule,
        RouterOutlet,
        BackendHeaderComponent,
        BackendFooterComponent,
        BackendSidebarComponent,
        ContentWrapperComponent,
        TopbarComponent,
        BackendTopModalComponent
    ]
})
export class DashboardLayoutComponent {

}
