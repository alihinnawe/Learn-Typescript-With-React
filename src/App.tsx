
import './App.css'
import EventScheduler from './components/EventScheduler.tsx'
import TestComponent from './components/TestComponent.tsx'
function App() {

  return (
    <>
     <p>My first Typecript project</p>
      <TestComponent title="adding props including type" >PropsWithChildren</TestComponent>
     <EventScheduler />
    </>
  )
}

export default App
