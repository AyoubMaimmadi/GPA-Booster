import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data/ReviewsData'
import './css/reviews.css'

const Reviews = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  return (
    <section className="section-review">
      <div className="title-review">
        <h2 className="text-center">//&nbsp;reviews&nbsp;//</h2>
      </div>
      <div className="section-center-review">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <myarticle className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title-review">{title}</p>
              <p className="text-review">{quote}</p>
            </myarticle>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews
