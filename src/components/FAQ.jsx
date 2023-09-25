import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/solid";

const questionAnswer = [
  {
    id: 1,
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Culpa duis officia pariatur ut ut magna exercitation laborum ad consequat.",
  },
  {
    id: 2,
    question:
      "Culpa duis officia pariatur ut ut magna exercitation laborum ad consequat",
    answer:
      "Cupidatat mollit aliqua consectetur voluptate aliquip cillum laborum irure reprehenderit. Consequat do minim occaecat do ea commodo commodo. Sint enim do labore est. Officia ea eu sint aliqua quis ea reprehenderit sunt aliqua sit veniam elit incididunt. Cupidatat proident sit officia sint nulla id qui minim culpa sunt. Ullamco consequat est sit tempor Lorem occaecat laborum ipsum fugiat eiusmod ad. Ea in quis amet nostrud commodo adipisicing.",
  },
  {
    id: 3,
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Culpa duis officia pariatur ut ut magna exercitation laborum ad consequat.",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState("");
  return (
    <div className="faq-container container">
      <h3>FAQ</h3>
      <div className="list-container">
        {questionAnswer.map((item, index) => [
          <div>
            <div className="list-item">
              <p>{item.question}</p>
              {activeQuestion == item.id ? (
                <MinusCircleIcon
                  className="lg-icon cursor-pointer"
                  onClick={() => setActiveQuestion("")}
                />
              ) : (
                <PlusCircleIcon
                  className="lg-icon cursor-pointer"
                  onClick={() => setActiveQuestion(item.id)}
                />
              )}
            </div>
            {activeQuestion == item.id && <p className="active-answer">{item.answer}</p>}
          </div>,
        ])}
      </div>
    </div>
  );
};

export default FAQ;
