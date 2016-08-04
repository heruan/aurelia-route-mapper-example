import {inject} from "aurelia-dependency-injection";
import {RouteMapper} from "aurelia-route-mapper";

@inject(RouteMapper)
export class UserProfile {

    public mapper: RouteMapper;

    public params: Object;

    public constructor(mapper: RouteMapper) {
        this.mapper = mapper;
    }

    public activate(params) {
        this.params = params;
    }

}
