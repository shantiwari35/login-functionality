import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/PageComponent/header/header.component';
import { FooterComponent } from './Components/PageComponent/footer/footer.component';
import { SideBarComponent } from './Components/PageComponent/side-bar/side-bar.component';
import { MainContentComponent } from './Components/PageComponent/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SideBarComponent,MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-functionality';
}
