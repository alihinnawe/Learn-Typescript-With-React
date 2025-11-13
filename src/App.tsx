import './App.css';
import Matches from './components/Matches';
import AddMatch from "./components/AddMatch";
import DiscriminatedUnions from "./components/DiscriminatedUnions";
import Container from './components/PolymorphicComponenets.tsx';
import PolymorphicPropsContainer from './components/PolyphormicPropsContainer.tsx'; 
import FinalForm from './components/Members/Form.tsx';
import InputPlayers from './components/Members/InputPlayers.tsx';
import { useRef } from 'react';
import { type FormHandle } from './components/Members/Form.tsx';
function App() {
  const handleDelete = (id: number) => {
    console.log(`Deleted member with id: ${id}`);
  };
  const customForm = useRef<FormHandle>(null);
  function handleSave (data : unknown) {
              const newData = data as { name: String, age: String}
               console.log(newData);
               customForm.current?.clear()

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
      <FinalForm onSave={handleSave} ref={customForm}>
        <InputPlayers id='nnnn' name='name' label='name' type='text' />
        <InputPlayers id='kkkk' name='age' label='age' type='text' />
        <button>Submit</button>
      </FinalForm >

    </>
  );
}

export default App;
