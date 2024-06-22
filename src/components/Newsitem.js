import React from 'react'

const Newsitem = (props) => {

  let { title, description, imageUrl, url, author, source, publishedAt } = props;
  let d = new Date(publishedAt);

  return (

    <>
      <div className="card my-3">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.miWuLC7zDn2BXxnzOYnzOwAAAA?rs=1&pid=ImgDetMain"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p>On {d.toGMTString()} By {author ? author : "Unknown"}</p>
          <h5 className="card-title" style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title ? title : ""}</h5>
          <p className="card-text" style={{ display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{description ? description : ""}</p>
          <a target="_blank" href={url} className="btn btn-dark">Read More</a>
        </div>
      </div>
    </>
  )
}

export default Newsitem