import {Router, RouterConfiguration, RouteConfig} from "aurelia-router";

export class QuestionsApplication {

    public router: Router;

    public configureRouter(routerConfiguration: RouterConfiguration, router: Router): void {
        routerConfiguration.map(routes);
        this.router = router;
    }

}

export let routes: RouteConfig[] = [{
    name: "home",
    title: "Questions Home",
    route: "/",
    nav: true,
    moduleId: "./home"
}, {
    name: "card",
    title: "Question Card",
    route: "/:questionId",
    nav: false,
    moduleId: "./question"
}];
