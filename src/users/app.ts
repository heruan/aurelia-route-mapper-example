import {Router, RouterConfiguration, RouteConfig} from "aurelia-router";

export class UsersApplication {

    public router: Router;

    public configureRouter(routerConfiguration: RouterConfiguration, router: Router): void {
        routerConfiguration.map(routes);
        this.router = router;
    }

}

export let routes: RouteConfig[] = [{
    name: "home",
    title: "Users Home",
    route: "/",
    nav: true,
    moduleId: "./home"
}, {
    name: "profile",
    title: "User Profile",
    route: "/:userId/profile",
    nav: false,
    moduleId: "./profile"
}];
