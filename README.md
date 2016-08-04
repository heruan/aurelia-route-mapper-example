# Example application for aurelia-route-mapper

This simulates three Aurelia applications (a main and two dependencies) which use
`RouteMapper` to generate URLs to view-models from one application to the other and vice versa.

The key concept is that an application should export its own routes to let the main app
initialize the `RouteMapper` with the whole hierarchy.

To run, just clone (or download/unzip) then:

```shell
$ npm install
$ npm run server
```

and navigate to http://localhost:9090
