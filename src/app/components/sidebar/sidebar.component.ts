import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboards",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home"
  },
  {
    path: "/assets",
    title: "Asset Management",
    type: "sub",
    icontype: "fas fa-sitemap",
    collapse: "assets",
    isCollapsed: true,
    children: [
      { path: "asset", title: "Asset", type: "link" },
      { path: "consum", title: "Consumables", type: "link" },
    ]
  },
  {
    path: "/maintenance",
    title: "Maintenance",
    type: "sub",
    icontype: "fas fa-screwdriver",
    collapse: "maintenance",
    isCollapsed: true,
    children: [
      { path: "appraisal", title: "Audit & Appraisal", type: "link" },
      { path: "preventive", title: "Preventive Maintenance", type: "link" },
      { path: "corrective", title: "Corrective Maintenance", type: "link" },
    ]
  },
  {
    path: "/soft",
    title: "Soft Service Timeline",
    type: "link",
    icontype: "fas fa-chart-line"
  },
  {
    path: "/stat",
    title: "Statutory Compliance Management",
    type: "link",
    icontype: "fas fa-align-justify"
  },
  {
    path: "/space",
    title: "Space & Utility Management",
    type: "link",
    icontype: "fas fa-business-time"
  },
  {
    path: "/account",
    title: "Account Management",
    type: "sub",
    icontype: "fas fa-user-alt",
    collapse: "account",
    isCollapsed: true,
    children: [
      { path: "management", title: "Accounts", type: "link" },
      { path: "analysis", title: "Depreciation Analysis", type: "link" },
      { path: "warranty", title: "Lease & Warranty Management", type: "link" }
    ]
  },
  {
    path: "/system",
    title: "System Management",
    type: "sub",
    icontype: "fas fa-database",
    collapse: "system",
    isCollapsed: true,
    children: [
      { path: "user", title: "User Control", type: "link" },
      { path: "audit", title: "Audit Trail", type: "link" }
    ]
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}

