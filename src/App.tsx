
import './App.css'
import TestComponent from './components/TestComponent.tsx'
function App() {

  return (
    <>
     <p>My first Typecript project</p>
     <TestComponent title="adding props including type" description="click here!" >testChildren</TestComponent>
    </>
  )
}

export default App
