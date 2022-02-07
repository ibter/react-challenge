import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import ConApp from "./ConApp.js"



function handleConfClick(){
  console.log("li clicked")
  return ReactDOM.render(<ConApp />, document.getElementById("root"))
}

function handleTestimonClick(){
  console.log("testimonial clicked")
  return ReactDOM.render(<App />, document.getElementById("root"))
}

export default function Navbar(){
  return(
    <nav>
      <h3 className="bellotero-title">Bellotero.io</h3>
      <ul className="nav-items">
        <li onClick={handleTestimonClick}>Testimonials</li>
        <li onClick={handleConfClick}>Configuration</li>
        <li>Stories</li>
        <li>Partners</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}