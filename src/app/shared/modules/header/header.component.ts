import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // ****************** Public Methods *******************
  public goLogin() {
    console.log('Logout System!!!');
    this.router.navigateByUrl('login');
  }

  public onLogout() {
    this.router.navigate(['/login']);
    // this.snackBar.open('Successfully Logged Out!', '', { duration: 3000 });
  }

}
