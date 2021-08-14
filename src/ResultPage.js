import { useEffect, useState } from "react";

import axios from "axios";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.theme.css";
import "./assets/css/slide-right-panel.css";
import "./assets/css/tv.css";
import "./assets/css/responsive.css";
import backArr from "./assets/images/icons/arrow-back.png";
import closeArr from "./assets/images/icons/close-icon.png";

function ResultPage(props) {
  const [movieData, setMovieData] = useState([]);
  const name = props.match.params.movie;
  const API_KEY = "4c4839ea89cfa1dee165176d31c91292";

  useEffect(() => {
    const moviefetch = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`;
      const respData = await axios.get(url);
      setMovieData(respData.data.results);
    };
    moviefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const images = movieData.map((data, i) => {
    return (
      <div key={i} className="item">
        <a href="...">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="poster"
          />
          <p className="movie-name">{data.title}</p>
        </a>
      </div>
    );
  });

  if (movieData.length === 0) {
    return (
      <>
        <div className="tv-layout">
          <div className="container-fluid">
            <div className="row">
              <div className="span12">
                <div className="nav-row">
                  <div
                    onClick={() => props.history.goBack()}
                    className="round-box back-arrow"
                  >
                    <img src={backArr} alt="..." />
                  </div>

                  <div
                    onClick={() => props.history.goBack()}
                    className="round-box close-icon"
                  >
                    <img src={closeArr} alt="..." />
                  </div>
                </div>
                <div className="errorText">
                  <h1 style={{ color: "red", margin: "100px" }}>
                    No image fetched.....
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="tv-layout">
      <div className="container-fluid">
        <div className="row">
          <div className="span12">
            <div className="nav-row">
              <div
                onClick={() => props.history.goBack()}
                className="round-box back-arrow"
              >
                <img src={backArr} alt="..." />
              </div>

              <div
                onClick={() => props.history.goBack()}
                className="round-box close-icon"
              >
                <img src={closeArr} alt="..." />
              </div>
            </div>
            <div className="tv-data-row">
              <h1>Search Results</h1>

              <div className="col-12">
                <div className="search-results">{images}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
