# ionic-4-router-issue
The following example showcases the ionic 4 router that stalls when using router-outlet and children routes.

See the following video for a demonstration of the running application.

[![Watch the video](https://i9.ytimg.com/vi/6PzQ1dH8HwA/mq1.jpg?sqp=CMiHr-YF&rs=AOn4CLCZu0boNPeJIkLAXH-h4xuJu_uLOA)](https://youtu.be/6PzQ1dH8HwA)

Note that I also tried using ion-tabs, but the generated css entirely breaks the flow, so you can't even click on buttons. See the ion-tabs branch for a quick demo.

```
ionic version
```

```
4.12.0
```


The application was generated using 

```
ionic start ionic4nestedroutes blank
```

I then created a second "root level" page, using

````
ionic g page login
````

Next I generated 2 children each for the two "root level" pages

````
cd src/app/home
ionic g page about
ionic g page settings
cd ../../..
cd src/app/login
ionic g page username
ionic g page password
````

Next I moved the generated routes out of the "root level" routing, and added them to the routes in home and login:

````
const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      { path: 'username', loadChildren: './username/username.module#UsernamePageModule' },
      { path: 'password', loadChildren: './password/password.module#PasswordPageModule' }
    ]
  }
];
````

````
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
          { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
        ]
      }
    ])
````

Add some links and a bit of content:

login.page.html

````
<ion-header>
  <ion-toolbar>
    <ion-title>login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
    <p>Login</p>
    <ion-button [routerLink]="['/home']">
      Home
    </ion-button>
    <ion-button [routerLink]="['/login/username']">
      Username
    </ion-button>
    <ion-button [routerLink]="['/login/password']">
      Password
    </ion-button>
    <hr/>
    <router-outlet></router-outlet>
</ion-content>
````

home.page.html
````
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <p>Home</p>
  <ion-button [routerLink]="['/login']">
    Logout
  </ion-button>
  <ion-button [routerLink]="['/home/about']">
    About
  </ion-button>
  <ion-button [routerLink]="['/home/settings']">
    Settings
  </ion-button>
  <hr/>
  <router-outlet></router-outlet>
</ion-content>
````

I also added a dump of the npm list output so that you can see the exact versions:

[npm-list.txt](npm-list.txt)

