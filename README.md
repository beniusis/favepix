# favepix

[**favepix**](https://beniusis.github.io/favepix) 🖼️ is a simple infinite scroll capable web application for searching latest images from Pexels API and allowing users to favorite them.

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Technologies and Tools](#technologies-and-tools)
  - [Screenshots](#screenshots)
- [Setup the Development Environment](#setup-the-development-environment)
  - [Cloning repository](#cloning-repository)
  - [Install the required dependencies](#install-the-required-dependencies)
  - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
  - [Lint and format](#lint-and-format)

## Overview

### Features

- **Infinite Scroll**: users are able to scroll for as much images as the Pexels API provides.
- **Saving Favorite Images**: users are able to favorite/unfavorite images.
- **View Full-Size Image**: users are able to view a full-size image by clicking on it.

### Technologies and Tools

- 📚 **Library**: [React](https://react.dev)
- 😎 **Styling**: [Tailwind CSS](https://tailwindcss.com), [clsx](https://www.npmjs.com/package/clsx) & [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- 📊 **Data**: [Pexels API](https://www.pexels.com/api)
- 💪 **Data Persistence**: [zustand](https://github.com/pmndrs/zustand) with localStorage
- 🗺️ **Routing**: [React Router](https://reactrouter.com)
- ✨ **Code Quality**: [ESLint](https://eslint.org), [Stylelint](https://stylelint.io), [Prettier](https://prettier.io)
- 🏗️ **Build Tool**: [Vite](https://vitejs.dev)

### Screenshots

## Setup the Development Environment

### Cloning repository

```sh
git clone https://github.com/beniusis/favepix.git; cd favepix
```

### Install the required dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Lint and Format

```sh
npm run format:lint
```
