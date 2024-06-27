import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom app | chai</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement=(
    <a href="https://www.google.com" target='_blank'>Visit google</a>
)
const anotherUser="chai aur react"
const ReactElement=React.createElement(
    'a',
    {href:"https:www.google.com",target:'_blank'},
    'click me to visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //MyApp()
    //anotherElement
    ReactElement
    //<App/>
)
