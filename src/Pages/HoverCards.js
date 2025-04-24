import React from 'react'
import "./Home.css";

function HoverCards() {
  return (
    <div className="  ">
      <div className="card hover-card">
      <h4>Form components</h4>
      <p className="card-text">Input,Textarea</p>
      <p className="card-text">select</p>
      <p className="card-text">checkBox,Button</p>
      </div>
    
      <div className="card hover-card">
        <h4>UI components</h4>
        <p className="card-text">Container</p>
        <p className="card-text">Navbar,Modal</p>
        <p className="card-text">Card,Sidebar</p>


      </div>

    </div>
  )
}

export default HoverCards