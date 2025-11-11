import './App.css'
import Matches from './components/Matches.tsx'
import AddMatch from "./components/AddMatch.tsx"
import Members from './components/Members/Members.tsx'
import DiscriminatedUnions from "./components/DiscriminatedUnions.tsx"
import ComponentsType from './components/Members/ComponentsPropsWithoutRef1.tsx'
function App() {
  // Define a delete handler function
  const handleDelete = (id: number) => {
    console.log(`Deleted member with id: ${id}`)
  }

  return (
    <>
      <AddMatch />
      <Members />
      <DiscriminatedUnions kind='button' props={{
          label: "Click Me",
          onClick: () => alert("Button clicked!"),
        }} />
        <ComponentsType el='anchor'/>
    </>
  )
}

export default App
