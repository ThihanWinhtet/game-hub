import {  Grid , GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <Grid templateAreas={{ lg : `"nav nav" "aside main"`, base : `'nav nav' 'main main'`}}>
        <GridItem area='nav'><NavBar/></GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='gray' >aside</GridItem>
        </Show>
        <GridItem area='main' bg='pink' >main</GridItem>
      </Grid>
    </div>
  );
}

export default App;
