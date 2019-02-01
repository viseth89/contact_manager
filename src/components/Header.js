import React from 'react'

const Header = (props) => {
  const { branding } = props
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  )
}


// code above : destructuring

// Same way to write code above

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.branding}</h1>
//     </div>
//   )
// }






// function Header(){
//   return(
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   )
// }

export default Header;