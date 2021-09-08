import React from 'react'

const Book = (props) => {
    const { img, title, aouthor, children } = props.book
    const ClickHandler=()=>{
    alert('Hello Code')
    }
    const complexExample=(aouthor)=>{
   
  
    }
    return (<article className="book" onMouseOver={()=>{
      
  console.log(title);
    }}>
      <img className="BookImg" src={img} alt="" />
      <h1 >{aouthor}</h1>
      <p>{title} </p>
      {children}
      <p>{title}</p>
      <button type="button" onClick={ClickHandler}> Reference Example </button>
      <button type="button" onClick={complexExample(aouthor)}> more complex example</button>
    </article>
    )
  }

export default Book
