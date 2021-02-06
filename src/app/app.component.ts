import { Component } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(private router: Router) {

     this.router.events.subscribe((event: Event) => {
         if (event instanceof NavigationStart) {
             // Show loading indicator
             window.scrollTo(0,0);
         }

         if (event instanceof NavigationEnd) {
             // Hide loading indicator
         }

         if (event instanceof NavigationError) {
             // Hide loading indicator

             // Present error to user
             console.log(event.error);
         }
     });
   }
}
