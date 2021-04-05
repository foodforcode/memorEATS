import React from 'react';
import PostItem from './PostItem.jsx';

function PostContainer({posts}) {
  return (
    <div>
      <div className="row">
          {posts.map((post) => {
            return <PostItem key={post._id} name={post.name} date={post.date} body={post.body.slice(0, 70) + "..."} location={post.location} url={post.image}/>
          })}
      </div>
    </div>
  )
}

export default PostContainer;