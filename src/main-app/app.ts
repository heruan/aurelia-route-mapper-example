import {inject} from "aurelia-dependency-injection";
import {Router, RouterConfiguration, RouteConfig} from "aurelia-router";
import {RouteMapper} from "aurelia-route-mapper";
import {routes as questionsRoutes} from "../questions/app";
import {routes as usersRoutes} from "../users/app";

@inject(RouteMapper)
export class MainApplication {

    public routeMapper: RouteMapper;

    public router: Router;

    public constructor(routeMapper: RouteMapper) {
        this.routeMapper = routeMapper;
    }

    public configureRouter(routerConfiguration: RouterConfiguration, router: Router): void {
        routerConfiguration.options.pushState = true;
        let routes: RouteConfig[] = [{
            name: "welcome",
            title: "Welcome",
            route: "/",
            nav: true,
            moduleId: "./welcome"
        }, {
            name: "questions",
            title: "Questions App",
            route: "/questions",
            nav: true,
            moduleId: "../questions/app",
            settings: { childRoutes: questionsRoutes }
        }, {
            name: "users",
            title: "Users App",
            route: "/path/to/users",
            nav: true,
            moduleId: "../users/app",
            settings: { childRoutes: usersRoutes }
        }];
        routerConfiguration.map(routes);
        this.routeMapper.map(routes);
        this.router = router;
    }

}
