import React from 'react'
import '../style/Content.css'
// import showdown from 'shodown'

class Content extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props.content)
    }
    state = {title: this.props.content.title, content: this.props.content.content}

    getFormValue = () => {
        const title = document.getElementById('contentFormInput')
        const content = document.getElementById('contentFormText')
        this.props.onBtnClick(title.value, content.value)

    }

  render(){

    console.log(this.state)
    const {content} = this.props
    // const converter = new showdown.Converter()
    // const text = converter.makeHtml(content.content)


    return (
      <>
      <main className='p-3 col-8 border-start border-white'>
        <div id='contentDisplay'>
            <h1 className='title lgTitle'>{content.title}</h1>
            <p className='text-white'>{content.content}</p>
        </div>
        
        
        <div id='contentForm'>
            <input id='contentFormInput'   type="text" placeholder='Title' className='mb-3 text-white form-control bg-secondary' />
            <textarea id='contentFormText'  placeholder='Content' className='mb-3 text-white form-control bg-secondary' cols="30" rows="5"></textarea>
            <button 
            onClick={this.getFormValue} 
            className='btn btn-lg btn-danger col-4'>
                Save
            </button>
        </div>
      </main>
      </>
    )
  }
}

export default Content
