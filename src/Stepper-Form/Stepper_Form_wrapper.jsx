import React, { useState } from "react";
import * as Yup from "yup";
import First_Step_Form from "./First_Step_Form";
import Second_Step_Form from "./Second_Step_Form";
import Third_Step_Form from "./Third_Step_Form";

function Stepper_Form_wrapper() {
  const [steps, setSteps] = useState({
    step_1: {
      at_position: true,
      complete: false,
    },
    step_2: {
      at_position: false,
      complete: false,
    },
    step_3: {
      at_position: false,
      complete: false,
    },
  });

  const [formData, setFormData] = useState({
    p_name: "",
    p_company: "",
    p_desc: "",
    p_price: "",
    p_discount: "",
    rating: "",
    comment: "",
  });

  const handleSteps = () => {
    console.log("step-1");
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <h1> Stepper_Form_wrapper </h1>

        <div className="steps-container mt-3 mb-3 row">
          <div className="col first-step">
            <h5>
              {steps.step_1.complete ? (
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              ) : (
                <i className="bi bi-1-circle-fill"></i>
              )}{" "}
              Basic Datails
            </h5>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className={`progress-bar ${
                  steps.step_1.complete ? "bg-success" : ""
                }`}
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col second-step ">
            <h5>
              {steps.step_2.complete ? (
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              ) : (
                <i className="bi bi-2-circle-fill"></i>
              )}{" "}
              Pricing & Inventory
            </h5>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className={`progress-bar ${
                  steps.step_2.complete ? "bg-success" : ""
                }`}
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col third-step">
            <h5>
              {steps.step_3.complete ? (
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              ) : (
                <i className="bi bi-3-circle-fill"></i>
              )}{" "}
              Additional & Shipping Details
            </h5>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className={`progress-bar ${
                  steps.step_3.complete ? "bg-success" : ""
                }`}
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {steps.step_1.at_position && (
          <First_Step_Form
            setFormData={setFormData}
            formData={formData}
            setSteps={setSteps}
            steps={steps}
          />
        )}
        {steps.step_2.at_position && (
          <Second_Step_Form
            setFormData={setFormData}
            formData={formData}
            setSteps={setSteps}
            steps={steps}
          />
        )}
        {steps.step_3.at_position && (
          <Third_Step_Form
            setFormData={setFormData}
            formData={formData}
            setSteps={setSteps}
            steps={steps}
          />
        )}

        {/* <button className="btn btn-primary" onClick={handleSteps}>
          Next
        </button> */}
      </div>
    </>
  );
}

export default Stepper_Form_wrapper;
