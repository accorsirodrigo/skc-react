import Card from './components/Card'
import { Container, Box }  from '@material-ui/core';

import img1 from './img/cards/img1.jpg'
import img2 from './img/cards/img2.jpg'

function App() {
  return (
    <Container fixed>
    <Box display="flex">
      <Card img={img1} title="Bruno's racing" data="April 24, 2020" description="Imagens captadas pela lente de Gabriel Romanzini"/>
      <Card img={img2} title="Bruno's racing" data="April 24, 2020" description="Corrida"/>
      <Card img={img2} title="Bruno's racing" data="April 24, 2020" description="Corrida"/>
    </Box>
    </Container>

  );
}

export default App;
