import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';

import RenderButtons from './components/RenderButtons';
import mainObject from './utils/mainObject';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campo:'',
      operacion:'',
      resultado:''
    }
  }

  editFieldValue = (operation) => {
    let setOperation = operation.split(':');
    console.log(setOperation);
    if(setOperation[0] != "igualA"){
      this.setState({campo:this.state.campo+setOperation[1]});
    }
  }

  getResult = () => {
  }

  render() {
    return (
      <Container maxWidth="sm" style={{paddingTop:100}}>
          <Grid container spacing={1} style={{marginBottom:10}}>
            <TextField id="outlined-basic" label="Calculadora" variant="outlined" fullWidth value={this.state.campo}/>
          </Grid>
          <Grid container spacing={3}>
            <RenderButtons editFieldValue={this.editFieldValue} objectToRender={mainObject}/>
          </Grid>
      </Container>
    );
  }
}

export default App;
