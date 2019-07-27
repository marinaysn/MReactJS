import React from 'react';
import './App.css';
import BootBox from 'react-bootbox';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }
  
  showAlert = () => {
    alert('Yes is clicked');
  }

  handleClose = () => {
    this.setState({show:false})
  }
  
  render(){
  return (
    <div className="App">
    <button onClick={()=>{this.setState({show:true})}}>Click me to open BootBox</button>
      <BootBox 
    message="Do you want to Continue?"
    show={this.state.show} 
    onYesClick = {this.showAlert}
    onNoClick = {this.handleClose}
    onClose = {this.handleClose}/>
    </div>
  );
  }
}

export default App;