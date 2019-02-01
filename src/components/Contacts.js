import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
  constructor(){
    super();
    this.state = {
      contacts:[
        {
          id:1,
          name:'John Doe',
          email: 'jdoe@gmail.com',
          phone:'555-333-6666'
        },
        {
          id:2,
          name:'Karen',
          email: 'karen@gmail.com',
          phone:'555-333-6666'
        },
        {
          id:3,
          name:'Stacy Doe',
          email: 'stacy@gmail.com',
          phone:'555-333-6666'
        }
      ]
    }
  }
  // state for component is an array of contacts 
  render() {
    const { contacts } = this.state;

    return (
      <div>
        { contacts.map(contact =>(
          <Contact 
          key={contact.id}
          contact={contact}
          />
        ))}    
      </div>
    )
  }
}

export default Contacts;
