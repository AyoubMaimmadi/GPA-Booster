import React, { useState } from 'react'
import { useEffect } from 'react'
import exam from '../data/ExamData'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  useEffect(() => {
    setOutput([])
    exam.filter((val) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val])
      }
    })
  }, [input])

  const mainOutput = output.map((item) => {
    return item
  })

  let ans = input
  // console.log(ans)

  return (
    <div class="search">
      <input
        type="text"
        name=""
        placeholder="i.e. Software Eng ..."
        class="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <a href="#" class="btn">
        <i class="fa fa-search "></i>
      </a>
    </div>
  )
}
export default SearchBar
