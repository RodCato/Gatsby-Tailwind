// src/components/WordPressJsonFeed.js
import React, { useEffect, useState } from "react"
import axios from "axios"

const BlogFeed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchJsonFeed = async () => {
      try {
        const response = await axios.get(
          "https://catalinorodriguez.com/wp-json/wp/v2/posts"
        )
        setPosts(response.data)
      } catch (error) {
        console.error("Error fetching JSON feed:", error)
      }
    }
    fetchJsonFeed()
  }, [])

  return (
    <div id="blog" className="section experience mt-8">
      <h2 className="section__title">📖 From the Blog</h2>
      <div className="project text-center mb-6 flex justify-center items-center">
        <ul>
          {Array.isArray(posts) &&
            posts.map((post, index) => (
              <li key={index} className="mb-2">
                <h3 className="text-xl">
                  📄&nbsp;
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {post.title.rendered}
                  </a>
                </h3>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogFeed
