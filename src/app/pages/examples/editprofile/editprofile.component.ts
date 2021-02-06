import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/edit",
    title: "Edit",
    type: "link",
  }
];  
@Component({
  selector: "app-editprofile",
  templateUrl: "editprofile.component.html"
})
export class EditprofileComponent implements OnInit {
  public menuItems: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
    });
  }
}
