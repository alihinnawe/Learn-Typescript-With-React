import './App.css'
import Matches from './components/Matches.tsx'
import AddMatch from "./components/AddMatch.tsx"
import Members from './components/Members/Members.tsx'

function App() {
  // Define a delete handler function
  const handleDelete = (id: number) => {
    console.log(`Deleted member with id: ${id}`)
  }

  return (
    <>
      <AddMatch />
      <Members />
    </>
  )
}

export default App
