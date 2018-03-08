# epay Payment Tracker

This is a basic application that renders pins on a Google Map that represent recent payments to the epay network.

## Dependencies

* PHP7
* MySQL 5.6
* Apache
* Yarn or NPM (for front end asset compilation)

## For setup

1. Clone/download this repository
2. Create a copy of the environment settings file with `cp .env.example .env`
3. Run `php artisan key:generate` to generate an encryption token 
4. Install dependencies with `composer install && yarn` or `composer install && npm install`
5. Update lines **10 through 14** of the newly-created `.env` file with your database connection information
6. Point the application root of your virtual host to the `public` directory
7. Compile the front end assets via `npm run dev` or `yarn run dev`.

***

## Task #2

If I were to add a few extra features, I would add the ability to filter the results by store, provider and product. This could be done via range slider (like that is already implemented) or a simple button toggle system. Furthermore I would add a live ticker that would appear beneath the map showing the detailed transactions as they would appear with an additional hover state indicating where the transaction took place on the map.

One item that I would solve differently would be to remove the bouncing effect from the map. It is difficult to hover over the map pin to view its detailed information during the animation. I would also (if available) add the address to the location's detailed information pop up that appears during hover.

If I had additional time to solve the task, I would definitely implement the filtering feature that was mentioned above. This seems like a "natural" feature that should be part of the application. I would also implement a feature to utilize websockets for the application. This would allow the backend API to talk to the front end and would eliminate the need for the polling feature.