"use strict";
//# sourceMappingURL=app.routes.js.map
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        data: {
            title: 'About angular 2'
        }
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map