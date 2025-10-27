
import './App.css'
import EventScheduler from './components/EventScheduler.tsx'
import TestComponent from './components/TestComponent.tsx'
import Header from './components/Header.tsx'
function App() {

  return (
    <>
     <p>My first Typecript project</p>
      <TestComponent title="adding props including type" >PropsWithChildren</TestComponent>
     <EventScheduler />
     <Header image ={{ src:"gg", alt:"alternative image description"}} />;
    </>
  )
}

export default App
