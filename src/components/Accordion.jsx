import React, { useState } from "react";
import data from "../data";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleQuestion = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  console.log(selected);
  return (
    <div className="wapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleQuestion(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>

                <span>+</span>
              </div>

              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
