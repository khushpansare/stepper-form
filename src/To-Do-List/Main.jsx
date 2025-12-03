import React, { useState } from "react";

function Main() {
  const [todoObj, setToDoObj] = useState({
    title: "",
    desc: "",
  });

  const [todoArr, setToDoArr] = useState([]);
  const [btnFlag, setBtnFlag] = useState(0);
  const [index, setIndex] = useState("");

  const addToDo = () => {
    setToDoObj({
      title: "",
      desc: "",
    });
    setToDoArr([...todoArr, todoObj]);
  };

  const handleDeleteToDo = (e, i) => {
    console.log(i);
    setToDoArr(todoArr.filter((v, inx) => inx !== i));
  };

  const handleEditToDo = (e, i) => {
    setBtnFlag(1);
    console.log(i);

    let eArr = todoArr.filter((va, ind) => ind === i);

    setToDoObj({
      title: eArr[0].title,
      desc: eArr[0].desc,
    });

    setIndex(i);
  };

  const updateToDo = () => {
    let arr = [...todoArr];
    arr.splice(index, 1, todoObj);
    setToDoArr(arr);

    setToDoObj({
      title: "",
      desc: "",
    });

    setIndex("");
    setBtnFlag(0);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-start mt-5">
          <div className="w-50 m-5">
            <label htmlFor="Title">Title : </label> <br />
            <input
              type="text"
              className="form-control "
              name="Title"
              placeholder="Title"
              value={todoObj.title}
              onChange={(e) =>
                setToDoObj({ ...todoObj, title: e.target.value })
              }
            />
          </div>

          <div className="w-50 m-5">
            <label htmlFor="Title">Description : </label> <br />
            <te type="text" name="Description" placeholder="Description" />
            <textarea
              className="form-control"
              name="Description"
              placeholder="Description"
              value={todoObj.desc}
              onChange={(e) => setToDoObj({ ...todoObj, desc: e.target.value })}
            />
          </div>

          <div className="w-50 m-5">
            <button
              className="btn btn-primary"
              onClick={btnFlag ? updateToDo : addToDo}
            >
              {btnFlag ? "Update" : "Add Note"}
            </button>
          </div>
        </div>

        <div className="d-flex flex-wrap list-content">
          {todoArr.map((val, i) => {
            return (
              <div className="card m-5" key={i} style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.desc}</p>
                </div>

                <div className="card-body">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDeleteToDo(e, i)}
                  >
                    Delete
                  </button>
                  {" " + " " + " "}
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleEditToDo(e, i)}
                  >
                    Edit{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
