### Anthemizer
Welcome to Anthemizer! This guide will walk you through the steps to get started with the project, create your own fork, and inform the project owner when you're ready to reintegrate your work.

Getting Started
To get started with Anthemizer, follow these steps:

Clone the repository to your local machine using the following command:
git clone https://github.com/Kehrlibj/anthemizer.git

Install the necessary dependencies by running the following command:
npm install

Configure the project settings according to your needs. Refer to the documentation provided in the repository for any specific configuration instructions.

Run the project locally to ensure everything is working fine:
npm start
This will start a local development server and open Anthemizer in your default browser.

### Creating Your Fork
1. Before making any changes, it's recommended to create your own fork of Anthemizer. Follow these steps to create a fork:

2. Visit the Anthemizer repository on GitHub.

3. Click on the "Fork" button located at the top-right corner of the page.
You now have a copy of Anthemizer under your GitHub account.

4. Clone your forked repository to your local machine:

git clone your-fork-url\
5. Set up the remote upstream to stay updated with the original repository:\
git remote add upstream https://github.com/Kehrlibj/anthemizer.git

6. Verify that the remote upstream is added successfully:
git remote -v

### Making Changes and Reintegrating
Once you've made the necessary changes and are ready to reintegrate your work, follow these steps:

1. Commit your changes to your forked repository:\
git add .
git commit -m "Describe your changes"

2. Push the changes to your forked repository:\
git push origin main
Visit your forked repository on GitHub.

3. Click on the "New Pull Request" button.

4. Review the changes and click on the "Create Pull Request" button.

5. Provide a clear description of the changes you've made and submit the pull request.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

