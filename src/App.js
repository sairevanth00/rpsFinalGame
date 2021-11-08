import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ImageListItems from './components/ImageListItems'

import './App.css'

const rockImgUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
const paperImgUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
const scissorImgUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGameStart: false,
    userSelectedImgUrl: '',
    randomGeneratedImgUrl: '',
    userWonLossTxt: '',
    score: 0,
  }

  onClickPlayAgainBtn = () => {
    this.setState({isGameStart: false})
  }

  getOnclickImageItemUrl = image => {
    const {userSelectedImgUrl, randomGeneratedImgUrl} = this.state
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomImg = choicesList[randomNum].image
    this.setState({
      isGameStart: true,
      userSelectedImgUrl: image,
      randomGeneratedImgUrl: randomImg,
    })
    if (
      userSelectedImgUrl === rockImgUrl &&
      randomGeneratedImgUrl === scissorImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log(this.userWonLossTxt)
    } else if (
      userSelectedImgUrl === scissorImgUrl &&
      randomGeneratedImgUrl === rockImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      userSelectedImgUrl === scissorImgUrl &&
      randomGeneratedImgUrl === paperImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      userSelectedImgUrl === paperImgUrl &&
      randomGeneratedImgUrl === scissorImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      userSelectedImgUrl === paperImgUrl &&
      randomGeneratedImgUrl === rockImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      userSelectedImgUrl === rockImgUrl &&
      randomGeneratedImgUrl === paperImgUrl
    ) {
      this.setState({userWonLossTxt: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      userSelectedImgUrl === scissorImgUrl &&
      randomGeneratedImgUrl === scissorImgUrl
    ) {
      this.setState({userWonLossTxt: 'IT IS DRAW'})
    } else if (
      userSelectedImgUrl === rockImgUrl &&
      randomGeneratedImgUrl === rockImgUrl
    ) {
      this.setState({userWonLossTxt: 'IT IS DRAW'})
    } else if (
      userSelectedImgUrl === paperImgUrl &&
      randomGeneratedImgUrl === paperImgUrl
    ) {
      this.setState({userWonLossTxt: 'IT IS DRAW'})
    }
  }

  renderGameResults = () => {
    const {
      userSelectedImgUrl,
      userWonLossTxt,
      randomGeneratedImgUrl,
    } = this.state

    return (
      <div className="resultsCon">
        <div className="resultsImgMainCon">
          <div className="resultsImgCon">
            <p className="heading">YOU</p>
            <img
              src={userSelectedImgUrl}
              alt="your choice"
              className="resultImg"
            />
          </div>
          <div className="resultsImgCon">
            <p className="heading">OPPONENT</p>
            <img
              src={randomGeneratedImgUrl}
              alt="opponent choice"
              className="resultImg"
            />
          </div>
        </div>
        <div className="playAgainCon">
          <h1 className="resultFinalTxt">{userWonLossTxt}</h1>
          <div>
            <button
              className="playAgainBtn"
              type="button"
              onClick={this.onClickPlayAgainBtn}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderInitialUi = () => (
    <ul className="choicesListCon">
      {choicesList.map(eachItem => (
        <ImageListItems
          imageDetails={eachItem}
          key={eachItem.id}
          onClickImageItem={this.getOnclickImageItemUrl}
        />
      ))}
    </ul>
  )

  render() {
    const {isGameStart, score} = this.state
    return (
      <>
        <div className="mainCon">
          <div className="headerSection">
            <div className="gameEl">
              <h1 className="txt">
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
                <br />
              </h1>
            </div>
            <div className="scoreCon">
              <p className="scoreTxt">Score</p>
              <p className="scoreNumTxt">{score}</p>
            </div>
          </div>
          {isGameStart ? this.renderGameResults() : this.renderInitialUi()}
        </div>
        <div className="btnCon">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="modal-content">
                <span className="closeBtnCon">
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                </span>
                <div className="imgCon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rulesImg"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </>
    )
  }
}
export default App
