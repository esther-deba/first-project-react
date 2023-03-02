import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// >  <   =>

// function Greeting() {
//   return (
//     <div>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   )
// }
// const Person = () => <h2>Esther DEBA</h2>
// const Message = () => {
//   return <p>Student</p>
// }
// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, ''))
// }

const Book = () => {
  return (
    <div className='center'>
      <article className='container'>
        <Photo />
        <Description />
      </article>
    </div>
  )
}

const Photo = () => {
  return (
    <img
      src='https://m.media-amazon.com/images/I/61TAj716z4L._AC_UY327_FMwebp_QL65_.jpg'
      alt='couverture du livre'
    />
  )
}
const Description = () => {
  return (
    <div className='text'>
      <div className='header'>
        <p className='sponsor'>Sponsorisé</p>
        <img
          src='data:image/png;base64,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'
          alt=''
          className='i'
        />
      </div>

      <Title />
      <div className='phrase'>
        <Author />
        <Date />
      </div>
      <p className='relie'>Relié</p>
      <Price />
    </div>
  )
}
const Title = () => {
  return <h2 className='title'>Dieu - La science Les preuves - Collector</h2>
}
const Author = () => {
  return (
    <p className='author'>
      de <span className='Michel'>Michel-Yves Bolloré</span>, Olivier
      Bonnassies, et al.
    </p>
  )
}
const Date = () => {
  return <p className='date'>| 13 octobre 2022</p>
}
const Price = () => {
  return (
    <div className='tout'>
      <p className='price'>32,00€ </p>
      <p className='livraison'>Livraison à 25,99 €</p>
    </div>
  )
}
ReactDom.render(<Book />, document.getElementById('root'))
