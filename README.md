# Star Wars Sprint 7.

This web application generated with Angular 19.2.0, allows users to see the list and get the detailed information about Star Wars starships - the famous American epic space opera media franchise created by George Lucas.

The implementation of users authentication with Firebase auth and protected routing with Guard allows to see the detailed information only for the registered and logged in users.

The usage of API's of SWAPI allows to get different information regarding every starship:

- Name
- Crew
- Technical specifications
- List of pilots with names and images (using additionl API call)
- List of films with titles and images (using additionl API call)


<img src="https://github.com/Ilmira83/Sprint7-Star-Wars/raw/main/public/assets/screenshots/screenshot3.png" width="500">

<img src="https://github.com/Ilmira83/Sprint7-Star-Wars/raw/main/public/assets/screenshots/screenshot4.png" width="500">

<img src="https://github.com/Ilmira83/Sprint7-Star-Wars/raw/main/public/assets/screenshots/screenshot1.png" width="500">

<img src="https://github.com/Ilmira83/Sprint7-Star-Wars/raw/main/public/assets/screenshots/screenshot2.png" width="500">

## Features:

- Dynamic Angular 19 Routing with lazy loading and route guards

- Firebase Authentication with Ligun social login integration

- Protected Routes using Angular Route Guards (AuthGuard & RoleGuard)

- Angular Signals for fine-grained reactive state management

- Local storage integration

- Form Validation with reactive forms

- Toast Notifications using Toastr

- Unit testing with Jasmine/Karma

## Technologies:

- Angular 19.2.0 

- Bootstrap 5.3.3 

- HTML5

- CSS

- TypeScript 5.7.2

- Firebase 11.4.0

- ngx-toastr 19.0.0

## Requirements:

- **Node.js** y **npm** installed in your system. Use link [nodejs.org](https://nodejs.org/).
- Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

### Installation: 

- Clone this github repository:

```bash
git clone https://github.com/Ilmira83/Sprint7-Star-Wars
```
- Go to directory:
```bash
cd Sprint7-Star-Wars
```
- Install dependencies:
```bash
npm install
```
- Run the app:
```bash
ng serve
```
### Usage: 

- Open http://localhost:4200 in your browser.

- Register as a user by entering your email, password and username if you want to navigate to Starships page.

### Contributions:

**For contributions, please follow these steps:**

- Fork the repository.

- Create a new branch:
```bash
git checkout -b feature-name
```
- Make your changes and commit:
```bash
git commit -m "Added new feature"
```
- Push to GitHub and create a Pull Request.

### Contact information:

Created by: Ilmira Dozhdikova

Email: dozhdikovailmira@gmail.com

GitHub: github.com/Ilmira83