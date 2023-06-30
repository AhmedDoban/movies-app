import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Watch.css";
import { useNavigate, useParams } from "react-router-dom";
import { Movies } from "../../../../../Movies_db";
function Watch(props) {
  const Params = useParams();
  const Navigate = useNavigate();
  const [Movie, SetMovie] = useState({});
  useEffect(() => {
    SetMovie(Movies.filter((mo) => mo.id == Params.id)[0]);
  }, [Params.id]);

  return (
    <React.Fragment>
      <div className="watch">
        <div className="back-btn">
          <i className="fa-solid fa-left-long" onClick={() => Navigate(-1)}></i>
        </div>
        <div className="video-container">
          <ReactPlayer
            url={Movie.VideoLink}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Watch;
