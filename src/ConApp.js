import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Main from "./Main.js"


export default function ConApp() {
  const [config, setConfig] = React.useState([]) 

  React.useEffect(() => {
    console.log("entering effect")
    fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
    .then(response => response.json())
    //.then(data => console.log(data.calculator))
    .then(data => setConfig(data.calculator))
  },[])

  console.log(config)
 
  return (
    <div>
      <Navbar />
      <Main 
        title={config.title}
        description={config.description} />
    </div>
  )
}