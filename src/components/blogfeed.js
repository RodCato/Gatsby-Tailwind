// src/components/BlogFeed.js
import React, { useEffect, useState } from "react"
import axios from "axios"
import xml2js from "xml-js"

const BlogFeed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await axios.get('https://catalinorodriguez.com/feed')
        const json = xml2js.xml2json(response.data, { compact: true })
        const jsonData = JSON.parse(json)
        const items = jsonData.rss.channel.item
        setPosts(items)
      } catch (error) {
        console.error("Error fetching RSS feed:", error)
      }
    }
    fetchRSSFeed()
  }, [])

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title._text}</h3>
          <p>{post.description._text}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogFeed
