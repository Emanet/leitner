# Leitner Test Case

It is built using Angular and demonstrates a Speed Monitor application that displays real-time speed information for drivers. The application is primarily written in TypeScript, with styling in SCSS, and uses Angular CLI for development, testing, and building.

## Features

- Real-time speed monitoring using RxJS and Angular services
- Dynamic fetching of driver data from a remote API
- Responsive, modern UI with custom SCSS styling
- Modular component architecture (header, footer, driver cards)
- Built with Angular CLI best practices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [Angular CLI](https://angular.dev/tools/cli) installed globally

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Emanet/leitner.git
cd leitner
npm install
```

### Development Server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The app will reload automatically if you make changes to the source files.

### Code Scaffolding

To generate a new component with Angular CLI, run:

```bash
ng generate component component-name
```

For more schematics (like directives or pipes), run:

```bash
ng generate --help
```

### Building

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Running End-to-End Tests

To run end-to-end tests:

```bash
ng e2e
```

> Note: Angular CLI does not provide an end-to-end testing framework by default; you may configure your preferred e2e solution.

## Project Structure

- `src/app/` — Angular components, services, and configuration
- `src/assets/` — Static assets (images, fonts)
- `src/styles.scss` — Global SCSS styles

## Technologies Used

- **Angular** (v19+)
- **TypeScript**
- **RxJS**
- **SCSS**

## Additional Resources

For more information on Angular CLI usage, see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---

© 2025 Speed Monitor App. All rights reserved.
