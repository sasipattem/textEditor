import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {TextAreaElement, Button, ItalicButton, UnderlineButton} from './styled'

import './index.css'

class Home extends Component {
  state = {textToBold: false, textToUnderline: false, textToItalic: false}

  onClickBold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onClickTextdecoration = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const color = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="image-container">
            <div className="img-element">
              <h1 className="heading">Text Editor</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
                className="img"
              />
            </div>
            <div className="editor-container">
              <ul className="button-container">
                <li>
                  <Button
                    data-testid="bold"
                    color={color}
                    type="button"
                    onClick={this.onClickBold}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <ItalicButton
                    className="button"
                    data-testid="italic"
                    type="button"
                    color={italicButtonColor}
                    onClick={this.onClickItalic}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    className="button"
                    data-testid="underline"
                    type="button"
                    color={underlineButtonColor}
                    onClick={this.onClickTextdecoration}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ul>
              <hr className="hr-line" />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
