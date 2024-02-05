'use client'
import { useEffect, useState } from 'react'
import CourseSearch from './componets/CourseSearch'
import Courses from './componets/Courses'
import LoadingPage from './loading'

export default function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('http://localhost:3000/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Testing Next.js</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
    </>
  )
}
