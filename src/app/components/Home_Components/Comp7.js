"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };
  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };
  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };
  const toggleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  };
  const toggleAnswer5 = () => {
    setShowAnswer5(!showAnswer5);
  };

  return (
    <section>
      <div className="container-fluid row m-20 ">
        <strong
          style={{
            fontSize: "4rem",
            marginLeft: "15rem",
            paddingTop: "10rem",
            paddingBottom: "6rem",
          }}
        >
          ASKED QUESTIONS
        </strong>
      </div>
      <div>
        <button onClick={toggleAnswer} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            01. Lorem ipsum dolor sit amet consectetur adipiscing?{" "}
            <strong style={{ marginLeft: "30.5rem", fontSize: "20px" }}>
              {showAnswer ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "20rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}

          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>

      <div style={{ alignContent: "center", marginTop: "2rem" }}>
        <button onClick={toggleAnswer1} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            02. Ut commodo leo non lacus convallis pellentesque dolor?{" "}
            <strong style={{ marginLeft: "28rem", fontSize: "20px" }}>
              {showAnswer1 ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer1 && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "20rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}
          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>

      <div style={{ alignContent: "center", marginTop: "2rem" }}>
        <button onClick={toggleAnswer2} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            03. Aenean purus orci, hendrerit eu pulvinar?
            <strong style={{ marginLeft: "37.5rem", fontSize: "20px" }}>
              {showAnswer2 ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer2 && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "20rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}
          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>

      <div style={{ alignContent: "center", marginTop: "2rem" }}>
        <button onClick={toggleAnswer3} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            04. Phasellus tristique elementum finibus erat?
            <strong style={{ marginLeft: "36.5rem", fontSize: "20px" }}>
              {showAnswer3 ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer3 && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "24rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}
          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>

      <div style={{ alignContent: "center", marginTop: "2rem" }}>
        <button onClick={toggleAnswer4} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            05. Proin rutrum dolor non elit fermentum?
            <strong style={{ marginLeft: "39.5rem", fontSize: "20px" }}>
              {showAnswer4 ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer4 && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "24rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}
          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>

      <div style={{ alignContent: "center", marginTop: "2rem" }}>
        <button onClick={toggleAnswer5} style={{ border: "0" }}>
          <strong style={{ fontSize: "20px", marginLeft: "20rem" }}>
            06. Nam et nibh rhoncus pulvinar sapien consequat velit?
            <strong style={{ marginLeft: "30.5rem", fontSize: "20px" }}>
              {showAnswer5 ? "▲" : "▼"}
            </strong>
          </strong>
        </button>
        <div>
          {showAnswer5 && (
            <p
              style={{
                fontSize: "20px",
                color: "black",
                marginLeft: "24rem",
                paddingTop: "1.5rem",
                width: "100rex",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo leo non lacus convallis, eu pellentesque dolor auctor.
              Aenean purus orci, hendrerit eu pulvinar ut, dapibus sit amet
              dolor. Phasellus tristique elementum finibus. Integer erat nibh,
              finibus eget scelerisque at, rhoncus sed nunc.
            </p>
          )}
          <hr class="h-[1px] my-14 mx-[150px] w-[1200px] bg-black border-0 dark:bg-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
