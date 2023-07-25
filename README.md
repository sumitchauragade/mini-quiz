**README**

**Introduction**
This README provides an overview of the Mini-Quiz, its functionalities, and technical details. The Mini-Quiz is designed to fetch questions from a specified API and allows users to answer them.

**Functionalities**

1. **Answer Selection Limitation**: Once a user selects an answer for a question, they cannot choose other options for that question. This ensures accurate responses.

2. **Review Past Answers**: Users can revisit previously answered questions to check their responses.

3. **Navigation**: The app enables users to navigate between questions, allowing them to move to the next question or skip ahead as needed.

4. **Question Progress Bar**: A fully functional progress bar indicates the current question number and the user's performance in previous questions. The progress bar is interactive, allowing users to revisit and attempt unanswered questions.

5. **Excluded Functionalities**: The app does not have the "Quit Quiz" feature, as it was not specified in the requirements. Additionally, certain graphical elements like logos and icons were not included due to unavailability of required assets, such as the SVG file for the quiz icon.

**Installation Instructions**
To run the Mini-Quiz on your local machine, follow these steps:

1. Install dependencies using `yarn`: (Make sure to have node `v18.16.0` and `yarn`)

   ```
   npx yarn install
   ```

2. Start the app:

   ```
   npx yarn start
   ```

3. Open an iOS simulator to test the app:
   - Type `i` in the terminal to open the iOS simulator.

**Technical Details**

- The app is compatible with Node version 18.16.0.
- It is built for the iOS platform and developed using macOS.
- Scores are calculated and coins can be earned through the app.
- The "Share" button is functional, allowing users to share their quiz experience.

Thank you for using the Mini-Quiz!
