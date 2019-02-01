import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// test to check proptypes is what we said it should be

// Contact.propTypes = {
//   name:PropTYpes.string.isRequired,
//   email:PropTYpes.string.isRequired,
//   phone:PropTYpes.string.isRequired
// }

export default Contact;

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
