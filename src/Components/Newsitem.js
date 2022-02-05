import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, source, date } = props;
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
          top: "-10px",
        }}
      >
        <span className="badge rounded-pill bg-danger"> {source} </span>
      </div>
      <img
        src={imageUrl}
        style={{
          height: "230px",
        }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 40)}...</h5>

        <p className="card-text">{description.slice(0, 100)}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author} <br />
            on {new Date(date).toGMTString()}
          </small>
        </p>

        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
