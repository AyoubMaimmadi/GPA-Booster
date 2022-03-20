import React, { useState, useEffect } from 'react'
import Exam from './Components/Exam'
import Categories from './Components/Categories'
import Uparrow from './Components/Uparrow'
import Navbar from './Components/Navbar'
import hwdata from './data/HomeWorkData'
import prjdata from './data/ProjectData'
import quizeData from './data/QuizData'
import sylData from './data/syllabusData'
import './css/searchBar.css'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import { useSelector } from 'react-redux'

export const Exams = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  const [examItems, setExamItems] = useState([])
  const allCategories = ['all', ...new Set(posts.map((item) => item.category))]
  const [categories, setCategories] = useState(allCategories)
  const [input, setInput] = useState('')
  const [pagename, setPagename] = useState('Exams')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  useEffect(() => {
    setExamItems(posts)
    setLoading(true)
  }, [])

  // Gather all data in one array with unique values

  const allData = [
    ...new Set(posts.map((item) => item)),
    ...new Set(quizeData.map((item) => item)),
    ...new Set(prjdata.map((item) => item)),
    ...new Set(hwdata.map((item) => item)),
    ...new Set(sylData.map((item) => item)),
  ]

  // When there is an input in the searchbar we change the name of the page to Results and search for the target using simple array manipulation

  useEffect(() => {
    if (pagename === 'Results') {
      setExamItems([])
      allData.filter((val) => {
        if (
          val.title.toLowerCase().includes(input.toLowerCase()) ||
          val.name.toLowerCase().includes(input.toLowerCase()) ||
          val.category.toLowerCase().includes(input.toLowerCase()) ||
          val.id == parseInt(input)
        ) {
          setExamItems((examItems) => [...examItems, val])
        }
      })
    } else {
      setExamItems([])
      posts.filter((val) => {
        if (val.title.toLowerCase().includes(input.toLowerCase())) {
          setExamItems((examItems) => [...examItems, val])
        }
      })
    }
  }, [input])

  // Filter Items based on the School i.e. CSC, BA, ...

  const filterItems = (category) => {
    if (category === 'all') {
      setExamItems(posts)
      return
    }
    const newItems = posts.filter((item) => item.category === category)
    setExamItems(newItems)
  }

  return (
    <main>
      <section id="home" className="exam section">
        <Navbar />
        <div className="search">
          <input
            type="text"
            name=""
            placeholder="i.e. Software Eng ..."
            className="text"
            onChange={(e) => {
              setInput(e.target.value)
              setPagename('Results')
              setCategories([])
              if (e.target.value === '') {
                setPagename('Exams')
                setCategories(allCategories)
              }
            }}
          />
          <a href="#" className="btn">
            <i className="fa fa-search "></i>
          </a>
        </div>
        <br />
        <div className="title">
          <h2 id="Exams">
            {pagename}
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>

        {loading ? (
          <>
            <Categories categories={categories} filterItems={filterItems} />
            <Exam items={examItems} />
          </>
        ) : (
          <h1 className="msg2">Loading...</h1>
        )}
      </section>
      <Uparrow />
    </main>
  )
}

export default Exams
