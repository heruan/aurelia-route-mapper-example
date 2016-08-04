import {bootstrap} from "aurelia-bootstrapper-webpack";
import {Aurelia} from "aurelia-framework";

bootstrap((aurelia: Aurelia) => {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(() => {
        aurelia.setRoot("main-app/app", document.body);
    });
});
