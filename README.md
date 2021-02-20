# Frontend Exam

Create a UI for the existing API with the following requirements

## User stories

- user should register when using the signup form
- user should login to gain access to the application when using the login form
- user should not see unauthorized pages
- user should create todo when submitting valid due_date and priority
- user should create a todo when submitting valid data
- user should edit a todo when submitting valid information
- user should complete a todo when clicking a complete button
- user should delete a todo when clicking a delete button
- user should see a list of todos
- user should sort todos by priority
- user should sort todos by due date

## Requirements

- you should pick a UI Component library or a CSS framework so you dont waste much time with trivial styling decisions
- you should make sure you fix any problem you find with the development environment if possible
- you have two hours to complete as much as you can

## Setup

Install

- [asdf](https://asdf-vm.com/#/core-manage-asdf)
- [taskfile](http://taskfile.dev)

Run `task setup`

## Commands

- api.server: Starts api for development environment
- check: Checks if environment is properly setup
- check.api: Checks if api setup is working
- check.web: Checks if web setup is working
- clean: Restarts development environment
- format: Formats elixir code
- migrate: Runs database migrations
- reset: Restarts development environment
- routes: Prints api http routes
- seed: Seeds database with testing data
- setup: Setups the monorepo
- setup.api: Setup API
- setup.web: Setup Web Application
- test: Runs all tests both api and web
- test.api: Run tests for api
- test.api.wip: Run work in progress tagged tests for api
- test.web: Runs tests for web
- test.web.watch: Runs tests in watch mode
- web.build: Generates Build for web Application
- web.lint: Runs linter for web application
- web.server: Starts api for development environment
