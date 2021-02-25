import React from 'react'
import './App.css'

function App () {
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

function Welcome (props) {
  return (
    <h1>
      {props.greeting} {props.name}
    </h1>
  )
}

function Article (props) {
  const [showContent, setShowContent] = React.useState(false)

  let childrenElement = null
  if (showContent) {
    childrenElement = <div className='ArticleChildren'>{props.children}</div>
  }

  return (
    <div className='Article'>
      <h2 onClick={() => setShowContent(!showContent)}>{props.title}</h2>
      <em>{props.date}</em>
      {childrenElement}
    </div>
  )
}

function StopWatch (props) {
  const [mountTime] = React.useState(new Date().getTime())
  const [currentTime, setCurrentTime] = React.useState(new Date().getTime())

  React.useEffect(() => {
    // componentDidMount()
    const intervalHandle = setInterval(() => {
      setCurrentTime(new Date().getTime())
    })

    // componentWillUnmount()
    return () => {
      clearInterval(intervalHandle)
    }
  }, [])
  const seconds = (currentTime - mountTime) / 1000
  return (
    <p>
      I've been mounted for <strong>{seconds.toFixed(1)}</strong>
    </p>
  )
}

function ClickCounter (props) {
  const [counter, setCounter] = React.useState(0)
  const clickHandler = () => {
    console.log('Button Clicked')
    setCounter(counter + 1)
  }
  console.log('Rendering...')
  return (
    <div>
      <button onClick={clickHandler}>Click me!</button>
      You have clicked {counter} times.     
    </div>
  )
}

function Toggle (props) {
  const [isToggleOn, setIsToggleOn] = React.useState(true)
  return (
    <button
      onClick={() => {
        setIsToggleOn(!isToggleOn)
      }}
    >
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default App