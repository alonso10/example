import React from 'react'

function PostCards(props) {
  const { posts } = props
  return (
    <div className="columns is-multiline">
      {
        posts.map((post, index) => {
          return (
            <div key={index} className="column is-6">
              <div className="card">
                <div className="card-content">
                  <div className="title is-4">
                    { post.title }
                  </div>
                  <div className="content">
                    { post.body }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default PostCards;