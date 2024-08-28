# Rock Paper Scissors Game

A simple and interactive Rock Paper Scissors game built with React. This project demonstrates basic React concepts like state management, event handling, and conditional rendering.

## Preview

To see the game in action live [here](https://rckpprscsr.ccbp.tech/), check out the demo GIF below or run the app locally after following the installation steps.

![Rock Paper Scissors Game Demo](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif)

## Features

- **Interactive Gameplay**: Play against the computer by selecting Rock, Paper, or Scissors.
- **Score Tracking**: Keeps track of your score throughout the game.
- **Responsive Design**: Works well on devices of all sizes.
- **Game Rules Popup**: Displays the game rules for new players.

## How to Play

1. Choose between Rock, Paper, or Scissors by clicking on the respective button.
2. The computer will randomly select its choice.
3. The game will display the result:
   - **YOU WON**: If your choice beats the computer's choice.
   - **YOU LOSE**: If the computer's choice beats your choice.
   - **IT IS DRAW**: If both choices are the same.
4. The score is updated based on the result:
   - **Win**: Score increases by 1.
   - **Lose**: Score decreases by 1.
   - **Draw**: Score remains the same.
5. Click "PLAY AGAIN" to start a new round.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd rock-paper-scissors
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- **React**: For building the user interface.
- **Styled Components**: For styling the components.
- **reactjs-popup**: For displaying the game rules in a modal.

## Project Structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Game.js
│   │   ├── Header.js
│   │   ├── RulesModal.js
│   │   └── ...other components
│   ├── App.js
│   ├── index.js
│   └── ...other files
├── package.json
└── README.md
```


