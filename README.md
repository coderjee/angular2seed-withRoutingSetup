# README #

### Angular 2 Seed demo  ###

### Steps for setup your first angular2 app ###

Step 1.  Create a directory in which your project resides

	$ mkdir angular-2-seed
	$ cd angular-2-seed

Step 2. Create config files and configured as your requirements
	package.json -> npm package dependencies
	tsconfig.json -> typescript compiler generate javascript code.
	typings.json
	systemjs.config.js

Step 3. Install packages
	
	$ npm install —save

 After installing your project folder directory structure will be look like like this
	
	angular-2-seed
	|_ node_modules
	|_typings
	|_package.json
	|_system.config.josn
	|_typings.json

Note: Make sure u did not get any error while installing npm packages, if found message npm ERR! means some packages did not installed, so reinstall this again by typing “npm install”. Err will occur if network failure in most of the cases.

Step 4. Everything is setup now time to create you app in angular2 
	 	Create application folder 
	 
	$ mkdir app

Step 5. Create the file app/app.module.ts see the file for code. This is the entry point to your application

Step 6. Create a component and add it to application.
		Create file app/app.component.ts with the code below

Step 7. Edit the file app/app.module.ts to import your new AppComponent and add it in the declarations and bootstrap fields in the NgModule decorator

Step 8.Run project.
	Create  file “app/main.ts” , see the code in file
“This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.”

Step 9. Define the page that host your app. create an index.js in root of your project.

Step 10. Create a style.css in root of your project.
	
Step 11. Run your first demo app. 
	
 	$ npm start

#### For Routing Setup follow the below Steps 


Add a <base> element to the index.html as the first child in the <head> tag to tell the router how to compose navigation URLs.
	 <base href=“/“>

Step 2.  Every application has a router. When we hit the new url, router looks for in Route config and display the content of component for which route is mapped. We need to configure the router, we bootstrap our app with an array of routes that is provided by RouteModule.forRoot function.

create a routing file in your app directory 
	app/app.routing.ts

and write the code


import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'About angular 2'
        }
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

Step 3. We need to export  the routing constant  we can import into our app.module.ts see the app.module.ts file 

Step 4. Configure the router outlet where the contents are fetched. 
	see app/app.component.html
Step 5. Everything is done run the app start the server if not runnnig.
 	$ npm start

