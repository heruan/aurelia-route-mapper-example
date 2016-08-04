import {inject} from "aurelia-dependency-injection";
import {RouteMapper} from "aurelia-route-mapper";

@inject(RouteMapper)
export class QuestionsHome {

    public questions = [ 123, 456, 789 ];

    public mapper: RouteMapper;

    public constructor(mapper: RouteMapper) {
        this.mapper = mapper;
    }
}
