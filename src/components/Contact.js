import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const {name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </div>
    )
  }
}



// Same way to write code above

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <li>Email: {this.props.email}</li>
//         <li>Phone: {this.props.phone}</li>
//       </div>
//     )
//   }
// }


export default Contact;

