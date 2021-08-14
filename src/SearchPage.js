import { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.theme.css";
import "./assets/css/slide-right-panel.css";
import "./assets/css/tv.css";
import "./assets/css/responsive.css";
import inputIcon from "./assets/images/icons/search-icon.png";
import searchIcon from "./assets/images/icons/reload-icon.png";
import reloadIcon from "./assets/images/icons/reload-icon.png";
import clearIcon from "./assets/images/icons/clear-icon.png";
function SearchPage(props) {
  const [name, setName] = useState("");

  const keyboardCheck = (value) => {
    let alphabets = document.getElementById("showAlphabets");
    let numbers = document.getElementById("showNumbers");
    if (value) {
      alphabets.style.display = "block";
      numbers.style.display = "none";
    } else {
      numbers.style.display = "block";
      alphabets.style.display = "none";
    }
  };

  const keyInput = (v) => {
    let inputBtn = document.getElementById("movieInput");
    if (v === "BACKSPACE") {
      inputBtn.value = inputBtn.value.substring(0, inputBtn.value.length - 1);
    } else if (v === "CLEAR") {
      inputBtn.value = "";
    } else if (v === "SPACE") {
      inputBtn.value = inputBtn.value + " ";
    } else {
      inputBtn.value += v;
    }
    setName(inputBtn.value);
  };

  return (
    <div className="tv-layout">
      <div className="container-fluid">
        <div className="row">
          <div className="span12">
            <div className="tv-data-row">
              <div className="col-12">
                <div className="seach-box">
                  <div className="input-group">
                    <span className="input-search">
                      <img alt="..." src={inputIcon} />
                    </span>
                    <input
                      id="movieInput"
                      onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>

                <div className="search-block-iteams">
                  <div className="recent-search">
                    <h1>Recent Search Iteams</h1>

                    <div className="seach-item">
                      <span>
                        <img alt="..." src={searchIcon} />
                        Jathi Ratnalu Movie
                      </span>
                    </div>

                    <div className="seach-item">
                      <span>
                        <img alt="..." src={reloadIcon} />
                        Kids English Telugu Dubbed Movies
                      </span>
                    </div>

                    <div className="seach-item">
                      <span>
                        <img alt="..." src={reloadIcon} />
                        3D Animation Movies
                      </span>
                    </div>

                    <div className="seach-item">
                      <span>
                        <img alt="..." src={reloadIcon} />
                        Action Movies in Telugu 2020
                      </span>
                    </div>
                  </div>

                  <div
                    className="key-board-box"
                    id="showNumbers"
                    style={{ display: "none" }}
                  >
                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("1")}>1</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("2")}>2</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("3")}>3</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("&")}> & </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("#")}> # </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("(")}> ( </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput(")")}> ) </button>
                      </span>
                      <span className="arrow-change">
                        <button onClick={() => keyInput("BACKSPACE")}>
                          <img alt="..." src={clearIcon} />
                        </button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("4")}>4</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("5")}>5</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("6")}>6</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("@")}> @ </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("!")}> ! </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("?")}> ? </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput(":")}> : </button>
                      </span>
                      <span className="arrow-change show-alpabets">
                        <button onClick={() => keyboardCheck(true)}>
                          & ABC
                        </button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("7")}>7</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("8")}>8</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("9")}>9</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("0")}>0</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput(".")}> . </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("_")}> _ </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput('"')}> " </button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="space-clear">
                        <button onClick={() => keyInput("SPACE")}>SPACE</button>
                      </span>
                      <span className="space-clear">
                        <button onClick={() => keyInput("CLEAR")}>CLEAR</button>
                      </span>

                      <span className="search-btn">
                        <Link to={`/result/${name}`}>
                          <button type="submit">SEARCH</button>
                        </Link>
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className="key-board-box"
                    id="showAlphabets"
                    // style={{ display: "block" }}
                  >
                    <div className="key-board-row">
                      <span className="key">
                        <button value={"A"} onClick={() => keyInput("a")}>
                          A
                        </button>
                      </span>
                      <span className="key">
                        <button value={"B"} onClick={() => keyInput("b")}>
                          B
                        </button>
                      </span>
                      <span className="key">
                        <button value={"C"} onClick={() => keyInput("c")}>
                          C
                        </button>
                      </span>
                      <span className="key">
                        <button value={"D"} onClick={() => keyInput("d")}>
                          D
                        </button>
                      </span>
                      <span className="key">
                        <button value={"E"} onClick={() => keyInput("e")}>
                          E
                        </button>
                      </span>
                      <span className="key">
                        <button value={"F"} onClick={() => keyInput("f")}>
                          F
                        </button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("g")}>G</button>
                      </span>
                      <span className="arrow-change">
                        <button onClick={() => keyInput("BACKSPACE")}>
                          <img alt="..." src={clearIcon} />
                        </button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("h")}>H</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("i")}>I</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("j")}>J</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("k")}>K</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("l")}>L</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("m")}>M</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("n")}>N</button>
                      </span>
                      <span className="arrow-change show-numbers">
                        <button onClick={() => keyboardCheck(false)}>
                          123
                        </button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("o")}>O</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("p")}>P</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("q")}>Q</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("r")}>R</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("s")}>S</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("t")}>T</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("u")}>U</button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="key">
                        <button onClick={() => keyInput("v")}>V</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("w")}>W</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("x")}>X</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("y")}>Y</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("z")}>Z</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("-")}>-</button>
                      </span>
                      <span className="key">
                        <button onClick={() => keyInput("'")}>'</button>
                      </span>
                    </div>

                    <div className="key-board-row">
                      <span className="space-clear">
                        <button onClick={() => keyInput("SPACE")}>SPACE</button>
                      </span>
                      <span className="space-clear">
                        <button onClick={() => keyInput("CLEAR")}>CLEAR</button>
                      </span>

                      <span className="search-btn">
                        <Link to={`/result/${name}`}>
                          <button type="submit">SEARCH</button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
