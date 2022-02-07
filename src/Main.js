import React from "react"
import "./style.css"

export default function Main(props){
  return(
    <div>
      <h1 className="main-title">{props.title}</h1>
      <p className="main-description">{props.description}</p>
    </div>
  )
}