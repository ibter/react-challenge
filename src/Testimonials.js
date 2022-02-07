import React from "react"
import "./style.css"
import data from "./data.js"



export default function Testimonials (props){
  console.log(props)
  return (
    <div>
      <section className="testimonials">
        <div>
          <h1 className="testimonial-title">{props.name}</h1>
          <p className="testimonial-subtitle">{props.position}</p>
        </div>
        <p className="comment-style">{props.comment}</p>
      </section>
      <section className="testimonials-buttons">
        <button className="buttons" onClick={props.handlePrev}>previous</button>
        <button className="buttons" onClick={props.handleNext}>next</button>
      </section>
    </div>
  )
}