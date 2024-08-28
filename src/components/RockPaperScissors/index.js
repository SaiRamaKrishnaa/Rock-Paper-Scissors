import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'

import {
  AppContainer,
  ResultContainer,
  OptionsContainer,
  Option,
  ScoreContainer,
  ScorePhrase,
  ScoreNumber,
  GameViewContainer,
  GameOptionsList,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopUpImage,
  PopUpBody,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  ResultText,
  PlayAgainButton,
} from './RockPaperScissorsStyles'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    gameChoice: '',
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state
    const outcomes = {
      ROCK: {SCISSORS: 'win', PAPER: 'lost'},
      PAPER: {ROCK: 'win', SCISSORS: 'lost'},
      SCISSORS: {PAPER: 'win', ROCK: 'lost'},
    }

    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else {
      const result = outcomes[userChoice][gameChoice]
      this.setState(prevState => ({
        gameStatus: gameStatusConstants[result],
        score: prevState.score + (result === 'win' ? 1 : -1),
      }))
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(eachOption => (
          <GameOptions
            key={eachOption.id}
            optionDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameResultView = () => {
    const {gameChoice, userChoice, gameStatus} = this.state
    const {choicesList} = this.props
    console.log('User Choice:', userChoice)
    console.log('Game Choice:', gameChoice)

    const userChoiceObject = choicesList.find(
      choice => choice.id === userChoice,
    )

    const gameChoiceObject = choicesList.find(
      choice => choice.id === gameChoice,
    )

    const resultText = {
      WIN: 'YOU WON',
      LOST: 'YOU LOSE',
      DRAW: 'IT IS DRAW',
    }[gameStatus]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    if (gameStatus === gameStatusConstants.inProgress) {
      return this.renderGameInProgressView()
    }
    return this.renderGameResultView()
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />

                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}
export default RockPaperScissors
