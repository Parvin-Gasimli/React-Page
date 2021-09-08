import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

const books = [{
  id: 1,
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  title: " I love You to Moon and Back",
  aouthor: "Amaelia Hepworth",

},
{
  id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/41vN31PD7SL._AC_SX184_.jpg",
  title: "The Lord of the Rings",
  aouthor: "Tolkien",

},
{
  id: 3,
  img: "https://images-na.ssl-images-amazon.com/images/I/51RN-ydxniS._AC_SX184_.jpg",
  title: "The Nature of Middle Earth",
  aouthor: "Carl Hostetter",

},
{
  id: 4,
  img: "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 5,
  img: "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},

{
  id: 6,
  img: "https://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._AC_SX184_.jpghttps://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._AC_SX184_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 7,
  img: "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._AC_SX184_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 8,
  img: "https://images-na.ssl-images-amazon.com/images/I/81KhmVUmrVL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL160_SR160,160_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 9,
  img: "https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL160_SR160,160_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 10,
  img: "https://images-na.ssl-images-amazon.com/images/I/51cidczO3xS._AC_SX184_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},
{
  id: 11,
  img: "https://images-na.ssl-images-amazon.com/images/I/81ej-GuREkL._AC_UL160_SR160,160_.jpg",
  title: " American Marxiszm",
  aouthor: "Amaelia Hepworth",
},

{
  id: 12,
  img: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._AC_SX184_.jpg",
  title: " End with US A Novel",
  aouthor: "Colleen Hoover",
  children: "qocu"
},

]
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (<Book key={books.id} book={book} />
          )
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, aouthor, children } = props.book
  const ClickHandler=()=>{
  alert('Hello Code')
  }
  const complexExample=(aouthor)=>{
 

  }
  return (<article className="book">
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





