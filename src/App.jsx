import React from 'react'
import './App.css'
import Aside from './components/Aside'
import Content from './components/Content'

class App extends React.Component {
  state = {notes: [], note: {}}

  componentDidMount() {
    localStorage['note'] == undefined ? localStorage['note'] = JSON.stringify({notes: [], note: {}}) : ''
    this.setState(JSON.parse(localStorage['note']))
  }


  addOrUpdateNote = (title, content) => {
    console.log(title, content)
    if(title === ""){
      return alert("you need a title")
    }
    if(content === ""){
      return alert("you need a content")
    }

    let res = JSON.parse(localStorage['note'])

    if(res.note.title === ""){
      res.notes.push({title: title, content: content})
      res.note = {title: title, content: content}
    }else{
      let indexNote = res.notes.filter(item => item.title === res.note.title && item.content === res.note.content)[0]
      res.notes[res.notes.indexOf(indexNote)] = {title: title, content: content}
      res.note = {title: title, content: content}
    }

    localStorage['note'] = JSON.stringify(res)
    this.setState(res)

    console.log('addOrUpdateNote', localStorage['note'])

    console.log(this.state)
  }

  changeNote = (value) => {
    let res = JSON.parse(localStorage['note'])
    res.note = value
    localStorage['note'] = JSON.stringify(res)
    this.setState(prevState => ({...prevState, note: value}))
  }



  render(){
    const { notes, note } = this.state
    return (
      <>
      <Aside onCardClick={this.changeNote} data={notes}/>
      <Content content={note} onBtnClick={this.addOrUpdateNote}/>
      </>
    )
  }
}

export default App
