# MuseuMe
An experiment in making your resume or CV into an interactive gallery experience.

## Attribution
This project utilizes the Three.js starter project by Edwin Webb (https://github.com/edwinwebb/three-seed/).

## Install
Before you begin, make sure you are comfortable with terminal commands and have [Node and NPM installed](https://www.npmjs.com/get-npm). Then in terminal at the topmost MuseuMe folder type `npm install` to download the dependencies. To get going run: `npm start`. A development server will start at (http://localhost:8080/) displaying the project.

## Importing local files
Local files, such as images and 3D models, are imported into the application as URLs then loaded asynchronously with three.js. Most common files that three.js uses are supported. For more information about this system see the [webpack site](https://webpack.js.org/).

## Importing modules from the web
If you want to add additional functionality to your project, you can search and install them from the [NPM repository](https://www.npmjs.com/). Some modules you might want to consider are...
* [three-orbit-controls](https://www.npmjs.com/package/three-orbit-controls)
* [popmotion](https://www.npmjs.com/package/popmotion)
* [Cannon.js Physics](https://www.npmjs.com/package/cannon).

Additions like these are best managed in the projects entry file: `./src/entry.js`. In it are the Scene, Camera, Renderer, the window event listeners and the animation loop.

## Building the project for the web
Once you are happy with your project you'll be sure to want to show it off. Running `npm run build` in terminal will bundle your project into the folder `./build/`. You can upload this directory to a web server. For more complex results read [this guide](https://webpack.js.org/guides/production/).

## Project Roadmap (4/20/2023)
### V1.0 - MVP
- One experience only - focused on my personal experiences.
- Experience many of the qualities and sections you would find in a resume as gallery exhibits.
- Embed images and videos in the gallery.
- Explore the space using basic controls.
- Interact with the space and exhibits to experience additional functionality. 
- See a hall of past employers and accomplishments.
- See a collection of skills
- Be able to download files, like CVs and other creations.
- Be able to link out to other sites related to the user.

### V2.0 - Muse-You-m
- Importable creations / Creation API
- Customizable Spaces / Layout API
- Simplified Navigation systems
- Theming API

## Desirable Future features:
- Testamonials
- Accessibility
- VR Acommodations
- Mobile experience
- Chatbot helpers
- Audio Experiences
- Creation ownership validation
- Interactive Timelines
- Decorations
- Following & Notifications
- Profiles
- Tours
- Live visitor interactions
- Tagging
- Recruiter Experience
