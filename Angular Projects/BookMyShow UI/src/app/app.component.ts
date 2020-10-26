import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson';
  navbarBool: boolean = true;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.loginStatusObs$.subscribe(status => { this.navbarBool = status; })
  }
}

