import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: ""
  }

  products = React.createRef();

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const {first_name, last_name, email, product_id} = this.state;
    
  //   axios.post('/api/newcontacts', {first_name, last_name, email, product_id})
  //     .then((info)=> {console.log(info)})
    
  // }

  onSubmit = (e) => {
      e.preventDefault();
      const {first_name, last_name, email} = this.state;
      
      axios.post('https://formspree.io/xgglpoex', {first_name, last_name, email})
        .then((info)=> {console.log(info)})
      
    }

  render(){
    const {first_name, last_name, email} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
            First Name
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={this.onChange}
            />
            Last Name
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={this.onChange}
            />
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            
            <button type="submit">Submit</button>
          </form>
    );
  }
}

export default App;
