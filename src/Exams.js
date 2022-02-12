import React, { useState, useEffect } from 'react'
import Exam from './Exam'
import Categories from './Categories'
import items from './data'
import Footer from './Footer'
import Uparrow from './Uparrow'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

export const Exams = () => {
  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setExamItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setExamItems(newItems)
  }

  return (
    <main>
      <section id="home" className="exam section">
        <Navbar />
        <SearchBar />
        <br />
        <div className="title">
          <h2 id="exams">
            Exam Leaks
            <a class="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Exam items={examItems} />
      </section>
      <Uparrow />
    </main>
  )
}

export default Exams
