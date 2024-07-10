import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.css',
    imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent]
})
export class AuthLayoutComponent {

}
