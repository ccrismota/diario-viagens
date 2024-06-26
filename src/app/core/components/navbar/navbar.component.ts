import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
    ) {}

  logged$?: Observable<any>;
  corDaNav: string = "#d7d228"

  logout() {
    this.authService.logout('/login')
    .pipe(
      this.toast.observe({
        success: 'Você foi desconectado, Ate breve',
        error: 'Um erro ocorreu',
        loading: 'Fazendo logout...',
      })).subscribe()
      };

  ngOnInit(): void {
    this.logged$ = this.authService.logged;
  }
}
