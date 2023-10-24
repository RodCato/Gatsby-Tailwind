// src/components/WordPressJsonFeed.js
import React, { useEffect, useState } from "react"
import axios from "axios"

const WordPressJsonFeed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchJsonFeed = async () => {
      try {
        const response = await axios.get(
          "https://catalinorodriguez.com/wp-json/"
        )
        setPosts(response.data)
      } catch (error) {
        console.error("Error fetching JSON feed:", error)
      }
    }
    fetchJsonFeed()
  }, [])

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  )
}

export default WordPressJsonFeed
