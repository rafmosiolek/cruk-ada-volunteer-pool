# cruk-ada-volunteer-pool

Cancer Research UK Volunteer Pool Project by Group 5.

See it live: http://cruk-ada-volunteer-pool.appspot.com/

Please, don't use https protocol. This page is available only over http:// right now.

# Ground rules

1. Do not push directly to master (you won't be able to anyway, but don't try).
2. Branch out off staging branch and after your work is finished, merge it to staging.
3. Master will pull changes from staging daily and it auto deploy it to the http://cruk-ada-volunteer-pool.appspot.com/
4. Have fun, ask questions, tell everyone about what you are working on. :-)

## Getting started

To get the project up and running on your local machine, follow these instructions:

- Clone this repo:

  ```
    $ git clone https://github.com/rafmosiolek/cruk-ada-volunteer-pool.git
  ```

- Navigate to the repository:

  ```
    $ cd /path_to_the_repo/cruck-ada-volunteer-pool
  ```

- Install the dependencies defined in a package.json file with the node package manager

  ```
  $ npm install
  ```

- Run the app locally on localhost:
  ```
  $ npm start
  ```

## Other available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
