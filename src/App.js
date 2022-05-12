import React from "react"
import {useEffect} from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import Testimonials from "./Testimonials.js"
import data from "./data.js"

export default function App (){
  //console.log(data)
  const [comments, setComments] = React.useState([])

  // const [localComments, setLocalComments] = React.useState(data)

  const [currentComment, setCurrentComment] = React.useState(0)

  useEffect(() => {
    console.log("effect ran")
    fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json")
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => setComments(data.slider.reviews))
  } ,[])

  function handleNext(){
      console.log("Next cliked", currentComment)
      if(currentComment >= 0 && currentComment < comments.length - 1){
        setCurrentComment(prevCurrentComment => prevCurrentComment + 1)
      }
      else{
        console.log("no hay mas comentarios", currentComment)
        console.log(comments.length)
        //setCurrentComment(prevComment => array[currentComment] )
    }
  }

  function handlePrev(){
      console.log("Prev cliked", currentComment)
      if(currentComment > 0 && currentComment <= comments.length - 1){
        setCurrentComment(prevCurrentComment => prevCurrentComment - 1)
      }
      else{
        console.log("no hay mas comentarios", currentComment)
        console.log(comments.length)
    }
  }
  console.log(comments[currentComment])
  //console.log(localComments)
  return (
    <div>
      <Navbar />
      <Main title="Our custumers love us"/>
      {/* <Testimonials
          name={localComments[currentComment].name}
          position={localComments[currentComment].position}
          comment={localComments[currentComment].comment}
          handleNext={handleNext}
          handlePrev={handlePrev}
      /> */}
      {comments.length && <Testimonials
          name={comments[currentComment].name}
          position={comments[currentComment].position}
          comment={comments[currentComment].comment}
          handleNext={handleNext}
          handlePrev={handlePrev}
      />}
      {/* <Testimonials />                     */}
    </div>
  )
}
