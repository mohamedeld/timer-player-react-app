import Player from './components/Player';
import './App.css'
import TimerChallenge from './components/TimerChallenge';

function App() {
  

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={2}/>
        <TimerChallenge title={"Not Easy"} targetTime={5}/>
      </div>
    </>
  )
}

export default App
