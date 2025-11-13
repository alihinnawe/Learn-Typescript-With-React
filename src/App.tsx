import './App.css';
import Matches from './components/Matches';
import AddMatch from "./components/AddMatch";
import DiscriminatedUnions from "./components/DiscriminatedUnions";
import Container from './components/PolymorphicComponenets.tsx';
import PolymorphicPropsContainer from './components/PolyphormicPropsContainer.tsx'; 
import Form from './components/Members/Form.tsx';
import InputPlayers from './components/Members/InputPlayers.tsx';
function App() {
  const handleDelete = (id: number) => {
    console.log(`Deleted member with id: ${id}`);
  };
  function handleSave (data : unknown) {
              const newData = data as { name: String, age: String}
               console.log(newData);

    return ( 
      <>
      </>
    )
  }

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
      <Form onSave={handleSave}>
        <InputPlayers id='nnnn' name='name' label='name' type='text' />
        <InputPlayers id='kkkk' name='age' label='age' type='text' />
        <button>Submit</button>
      </Form>

    </>
  );
}

export default App;
