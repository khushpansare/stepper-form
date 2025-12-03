import axios from "axios";
import React, { useEffect, useState } from "react";

function Main() {
  const [paginatedData, setPaginatedData] = useState([]);
  const [allUserData, setAllUserData] = useState([]);
  const [generateButtons, setGenerateButtons] = useState([]);

  //   Pagination states
  const [item_per_page, setitem_per_page] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=50&gender=female")
      .then((res) => {
        // let startpage = 1;
        // let item_per_page = 10;

        let button_length = res.data.results.length / item_per_page;
        setGenerateButtons(Array.from({ length: button_length }, (v, i) => i));

        setPaginatedData(res.data.results.slice(startIndex * 0, endIndex));
        setAllUserData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onButtonChange = (e, i) => {
    let ei = item_per_page * (i + 1);
    let si = ei - item_per_page;

    setStartIndex(si);
    setEndIndex(ei);
    setPaginatedData(allUserData.slice(si, ei));
  };

  const onNextButtonChange = () => {
    if (endIndex !== allUserData.length) {
      setPaginatedData(allUserData.slice(startIndex + 10, endIndex + 10));
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
    }
  };

  const onPrevButtonChange = () => {
    if (startIndex !== 0) {
      setPaginatedData(allUserData.slice(startIndex - 10, endIndex - 10));
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
    }
  };
  return (
    <>
      <div className="container pt-5">
        <div className="d-flex flex-wrap card-container">
          {paginatedData.map((val, i) => {
            return (
              <div className="card m-3" key={i} style={{ width: "18rem" }}>
                <img
                  src={val.picture.large}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {val.name.title +
                      " " +
                      val.name.first +
                      " " +
                      val.name.last}
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button className="btn btn-primary" onClick={onPrevButtonChange}>
              Previous
            </button>
            {generateButtons.map((val, i) => {
              return (
                <button
                  className="btn btn-primary m-3"
                  key={i}
                  onClick={(e) => onButtonChange(e, i)}
                >
                  {i + 1}
                </button>
              );
            })}
            <button className="btn btn-primary" onClick={onNextButtonChange}>
              Next
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Main;
