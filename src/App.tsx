import './App.css';
import Matches from './components/Matches';
import AddMatch from "./components/AddMatch";
import DiscriminatedUnions from "./components/DiscriminatedUnions";
import Container from './components/PolymorphicComponenets.tsx';
import PolymorphicPropsContainer from './components/PolyphormicPropsContainer.tsx'; 
function App() {
  const handleDelete = (id: number) => {
    console.log(`Deleted member with id: ${id}`);
  };

  return (
    <>
      <DiscriminatedUnions
        kind="button"
        props={{
          label: "Click Me",
          onClick: () => alert("Button clicked!"),
        }}
      />
      <Container as="button" type="button" onClick={() => alert("please enter your name")}>
        Click Me
      </Container>
      <PolymorphicPropsContainer as="h1" > my header</PolymorphicPropsContainer>

    </>
  );
}

export default App;
