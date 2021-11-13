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
    const randomNum = Math.floor(Math.random() * choicesList.length)

    this.setState({
      isGameStart: true,
    })

    if (
      image === rockImgUrl &&
      choicesList[randomNum].image === scissorImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log(this.userWonLossTxt)
    } else if (
      image === scissorImgUrl &&
      choicesList[randomNum].image === rockImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      image === scissorImgUrl &&
      choicesList[randomNum].image === paperImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      image === paperImgUrl &&
      choicesList[randomNum].image === scissorImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      image === paperImgUrl &&
      choicesList[randomNum].image === rockImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      image === rockImgUrl &&
      choicesList[randomNum].image === paperImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (image === choicesList[randomNum].image) {
      this.setState({
        userWonLossTxt: 'IT IS DRAW',

        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
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
          <div className="userImgCon">
            <p className="user-heading">YOU</p>
            <img
              src={userSelectedImgUrl}
              alt="your choice"
              className="userImg"
            />
          </div>
          <div className="randomImgCon">
            <p className="random-heading">OPPONENT</p>
            <img
              src={randomGeneratedImgUrl}
              alt="opponent choice"
              className="randomImg"
            />
          </div>
        </div>
        <div className="playAgainCon">
          <p className="resultFinalTxt">{userWonLossTxt}</p>
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
              <p className="rps-scoreTxt">Score</p>

              <p className="rps-scoreNumTxt">{score}</p>
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
