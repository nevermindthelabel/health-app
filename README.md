# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.



# Project Title: HealthApp

## Team Members:


[Matt Kilcup](https://www.linkedin.com/in/matt-kilcup-515697168/) <p>
[James Barker](https://www.linkedin.com/in/james-barker-78961295/) <p>
[Dan Solomon](https://www.linkedin.com/in/danrsolomon/)<p>
[Adam Karman](https://www.linkedin.com/in/adam-karman-1bb026171/) <p>
[Charles Bess, Jr.](https://www.linkedin.com/in/charles-bess-a97b055/)


## Overview

HealthApp is a web (mobile-ready) application designed with three tiers of functionality: Manage medication, Manage exercise, Medical Reporting.


### Tier 1

Medication Management** – To monitor and schedule prescriptions for user(s) using push notifications to manage medicine intake. Medicine and prescription updates (names and descriptions) will be gathered from an established API(s) to verify names are accurate for reporting to PCP or hospital staff.

#### **Manual management of prescriptions, by the user, will be required due to privacy concerns. Prescription information will be encrypted and stored to a database.


### Tier 2

Exercise and Health Management – To monitor health and exercise as provided manually by the user or gathered from an established API source. Examples of health tracking will be, steps, running, workout information, blood pressure, etc. API(s) will be used to pull information from health monitoring appliances and hardware, in addition to manual update.


### Tier 3

Meal Reporting – Food and meal creation. The user will be allowed to select foods for consumption tracking. Foods can be paired to make meals for calorie intake tracking. API(s) will be used to pull current calorie counts. User will be able to manually add foods not in the API selection.


### Tier 4

Reports - Reports can be pulled from the medication calendar/database, exercise and health, and meal tracking. The reports will downloaded via .pdf or .txt for distribution only by the user to needed parties.


### Tier 5

Calendar - Calendar display/reporting for all medical, exercise, and meal information. A calendar option will be added to each menu for scheduling. The calendar on the user page will allow for the option to remove data for display, via checkboxes, so the data requested is clearly shown to the user. Example, if the user has exercise and medication data, but only wants to view the medication schedule. The checkbox option will remove the exercise data so it is not active in the calendar.