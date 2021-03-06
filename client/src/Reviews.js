import React, { useState, useEffect } from 'react'

// imports
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AiOutlineComment } from 'react-icons/ai'
import data from './data/ReviewsData'
import Navbar from './Components/Navbar'

const Reviews = () => {
  // useState hooks
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  const [reviewError, setReviewError] = useState(
    `You must have an AUI ID to leave a review!`
  )
  const [colorError3, setColorError3] = useState(false)
  const [username, setusername] = useState('')
  const [school, setschool] = useState('')
  const [review, setreview] = useState('')
  const [auiID, setauiID] = useState('')

  // Every time (people or index) changes,  we check if the index is out of bounds
  // if the index is less than 0, we set the index to the last index of the array
  // if the index is higher than the length of the array, we set the index to 0
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  // Every time the index changes, we set up an interval for 4 seconds,
  // Then we increase the index to move to the next review/array element
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 4000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  // Function to handle the review submission
  const submitReview = (e) => {
    // Prevent the default behavior of refreshing the page
    e.preventDefault()
    // Check if the user has provided an AUI ID, if yes, display a success message
    // and clear the form inputs
    if (parseInt(auiID) >= 70000) {
      setusername('')
      setschool('')
      setreview('')
      setauiID('')
      setReviewError('Review Added Successfully!')
    } else {
      // if the user has not provided an AUI ID, we display an error message
      // and set the color of the input feild to red, and clear the Id input field
      setTimeout(() => setColorError3(false), 800)
      setColorError3(true)
      setauiID('')
      setTimeout(() => setReviewError(`Only AUIers can leave reviews :/`), 800)
      setReviewError(`ID doesn't exist`)
      setauiID('')
    }
  }

  return (
    <>
      <section className="section-review">
        <Navbar />
        <br />

        <div className="title-review">
          <h2 id="Reviews" className="text-center">
            //&nbsp;reviews&nbsp;//
          </h2>
        </div>
        <br />
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
                <AiOutlineComment className="icon-review" />
              </myarticle>
            )
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <HiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <HiChevronRight />
          </button>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={submitReview}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto">
                <div className="title">
                  <h2 id="Add">Leave Review</h2>
                  <div className="underline"></div>
                  <br />
                </div>
                <div className="d-flex justify-content-center">
                  <br />
                  <h4>{reviewError}</h4>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Full Name"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="AUI School"
                  value={school}
                  onChange={(e) => {
                    setschool(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Review"
                  value={review}
                  onChange={(e) => {
                    setreview(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="number"
                  required
                  className={`${
                    colorError3 ? 'form-control btn-danger' : 'form-control'
                  }`}
                  placeholder="AUI ID"
                  // min="7000"
                  max="100500"
                  value={auiID}
                  onChange={(e) => {
                    setauiID(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Add"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Reviews
