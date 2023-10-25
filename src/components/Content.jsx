import React from 'react'
import '../style/Content.css'
import showdown from 'showdown'

class Content extends React.Component {

    constructor(props){
        super(props)
    }

    getFormValue = () => {
        const title = document.getElementById('contentFormInput')
        const content = document.getElementById('contentFormText')
        this.props.onBtnClick(title.value, content.value)

    }

  render(){

    console.log(this.state)
    const {content} = this.props
    let converter = new showdown.Converter()
    let text = converter.makeHtml(content.content);


    return (
      <>
      <main className='p-3 col-8 border-start border-white'>
        <div id='contentDisplay'>
            <h1 className='title lgTitle'>{content.title}</h1>
            <div dangerouslySetInnerHTML={{__html: text}} className='text-white'></div>
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
