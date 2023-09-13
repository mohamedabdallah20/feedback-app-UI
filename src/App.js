function App() {
  const title = 'blog-app'
  const body = 'blog-app body'
  const comments = [
    { name: 'comment1', id: 1 },
    { name: 'comment2', id: 2 },
    { name: 'comment3', id: 3 },
  ]
  const showComments = true
  const commentsBlock = (
    <div className="comment">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.name}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentsBlock}
    </div>
  )
}
export default App
