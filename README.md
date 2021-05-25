# Live Chat

This is a repo for Live Char which contains **server-side code** and **client-side** code.

## Table of contents
* [Project Description](#project-description)
* [Technologies](#technologies)
* [Setup](#setup)


## Project Description

In this Live Chat you will meet randomly people from all around the world. You are completely anonymous in the app. First you have to select your nickname and then you will be directed to the actual chat.

This is not a real-world project but the purpose of the project is to gain more technical knowledge in the fields of front-end and back-end. So The only purpose of the project is to pass the SE_19 module.

## Technologies

- Typescript ^4.2.3
- React ^17.0.1
- Node.js ^14.15.3

You can check out other dependencies in the **package.json** file under the property **dependencies** and **devDependencies**.

- **Why React?** React does have several benefits in comparison to normal vanilla JS. First of all, it makes the code more readable because of its component-based structure. Additionally rendering content is faster in React because it uses techniques to minimize the number of dom operations. Furthermore, testing is easier in React because it provides its testing tools.

- **Why Node.js?** Again because it's popular and Node.js is usually a good fit with React because you can work with both technologies in javascript/typescript.

- **Why Typescript?** We using typescript to avoid searching bugs in javascript. Because of its types, the development is going much faster in comparison to javascript.

## Setup

### 1. Make sure you are in the root server directory of the project.

Type this in terminal:

Unix

`username@MacBook-Pro-67 ~ % ls`

windows

`C:\Projects\...: dir`

If you are in the right directory, you will see these files:

- README.md
- package.json
- Procfile
- dist
- src
- package-lock.json             
- tsconfig.json

### 2. Install Dependencies

`npm install`

After executing this command, the following folder will be created: **node_modules**. This folder contains a bunch of dependencies for starting your server.

### 3. Start The Server

`npm start`

This command starts the nodejs server.

## Features

- Chatting
