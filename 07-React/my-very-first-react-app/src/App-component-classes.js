import React from 'react'
import './App.css'

class App extends React.Component {
  render () {
    const name = "Dan's Website"
    const greeting = 'Välkommen till '
    const today = new Date().toLocaleDateString()

    return (
      <div className='App'>
              
        <header className='App-header'>
          <Welcome greeting={greeting} name={name} />
        </header>
              <p>Today is {today}</p>
        <Article
          title='Dan visar React!'
          intro='Lorem ipsum dolor...'
          date={today}
          whatEver='Whatever text...'
        />
        <Article
          title='Har barn-element. Idag är det mulet i Sälen'
          date='2020-01-13'
        >
          Detta är ett test av props.children.
          <br />
          <StopWatch />
          <Toggle />
          <br />
          <ClickCounter />
          <br />
          Här kommer mer innehåll.
        </Article>
        <Article title='Har också barn-element'>
          <StopWatch />
          <h3>Underrubrik</h3>
          <Article title='Efter lunch blir det mer React.' />
          <p>Ännu mer information.</p>
        </Article>
        <Article />
            
      </div>
    )
  }
}

class Welcome extends React.Component {
  render () {
    return (
      <h1>
        {this.props.greeting} {this.props.name}
      </h1>
    )
  }
}

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showContent: false
    }
  }
  render () {
    const titleClicked = () => {
      this.setState({
        showContent: !this.state.showContent
      })
    }

    let childrenElement = null
    if (this.state.showContent) {
      childrenElement = (
        <div className='ArticleChildren'>{this.props.children}</div>
      )
    }
    return (
      <div className='Article'>
        <h2 onClick={titleClicked}>{this.props.title}</h2>
        <em>{this.props.date}</em>
        {childrenElement}
      </div>
    )
  }
}

class StopWatch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mountTime: new Date().getTime(),
      currentTime: new Date().getTime()
    }
  }

  componentDidMount () {
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime()
      })
    })
  }

  componentWillUnmount () {
    clearInterval(this.intervalHandle)
  }

  render () {
    const seconds = (this.state.currentTime - this.state.mountTime) / 1000
    return (
      <p>
        I've been mounted for <strong>{seconds.toFixed(1)}</strong>
      </p>
    )
  }
}

class ClickCounter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render () {
    // let counter = 0
    const clickHandler = () => {
      console.log('Button Clicked')
      this.setState({
        counter: this.state.counter + 1
      })
    }
    console.log('Rendering...')
    return (
      <div>
        <button onClick={clickHandler}>Click me!</button>
        You have clicked {this.state.counter} times.     
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default App