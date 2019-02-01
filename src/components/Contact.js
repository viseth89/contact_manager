import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>{name} {' '}
        <i onClick={() => console.log('Hello')}
        className="fas fa-sort-down">
        </i>
        
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact:PropTypes.object.isRequired
}

export default Contact;

// test to check proptypes is what we said it should be

// Contact.propTypes = {
//   name:PropTypes.string.isRequired,
//   email:PropTypes.string.isRequired,
//   phone:PropTypes.string.isRequired
// }



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
