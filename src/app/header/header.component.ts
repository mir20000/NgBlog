import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountserviceService } from '../account/services/accountservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  public authListenersSubs?: Subscription;
  public userId: any;
  userName: any;
  constructor(public accountService: AccountserviceService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.accountService.getIsAuth();
    this.authListenersSubs = this.accountService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      });
  }
  onSignOut() {
    this.accountService.signOut();
  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
