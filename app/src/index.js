import './index.css'
import React from 'react'
import ReactDom from 'react-dom'
import { books } from './books';
import Book from './book';
import { greeting } from './testing/testing';


function BookList() {
  console.log(greeting);
  return (
    <section className="bookList">
      {books.map((book) => {
        return (<Book key={books.id} book={book} />
          )
      })}
      
    </section>
  );
}






// const Image=()=>{
//   return(

//   )

// }
// const Author =()=>{
//   return(
// )

// }
// const Title =()=>{
//   return(
// )
//   }





// const Person = () => <h2>Parvin Gasimli</h2>;
// const Message = () => {
//   return <p>this is my message</p>
// }

// const Greeting =()=>{
//   return React.createElement('div',
//   {},

//   React.createElement('h3',{},"hello world"))
// }

ReactDom.render(<BookList />, document.getElementById('root'));





