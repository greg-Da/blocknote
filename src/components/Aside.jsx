import React from 'react'
import '../style/Aside.css'

class Aside extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    handleClick = (id = null) => {
        if(id === null){
            this.props.onCardClick({title: '', content: ''})
            
        }else{
            const div = document.getElementById(`note${id}`)
            const title = div.querySelector('strong').innerText
            const content = div.querySelector('p').innerText
            this.props.onCardClick({title: title, content: content})
        }    
    }
    
    render(){
        const {data} = this.props
        return (
            <>
            <aside className='p-3 col-4'>
            <button onClick={() => this.handleClick()} className='btn btn-lg btn-danger'>New Note</button>
            
            {data.map((item, index) => (
                <div onClick={() => this.handleClick(index)} id={`note${index}`} key={index}>
                <strong className='title'>{item.title}</strong>
                <p className='textCol'>{item.content}</p>
                </div>
                ))}
                </aside>
                </>
                )
            }
        }
        
        export default Aside
        