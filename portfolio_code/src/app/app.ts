import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  private router = inject(Router);

  // Reaktives Signal: Reagiert automatisch bei jedem Seitenwechsel
  protected isHomePage = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects === '/' || e.urlAfterRedirects === '')
    ),
    { initialValue: this.router.url === '/' || this.router.url === '' }
  );
}
