import React, { useEffect, useState } from "react";

const TargetPoints = () => {
  const [firstPoint, setFirstPoint] = useState(0);
  const [secondPoint, setSecondPoint] = useState(0);
  const [thirdPoint, setThirdPoint] = useState(0);
  const [fourthPoint, setFourthPoint] = useState(0);

  useEffect(() => {
    const pointsTimer = setInterval(() => {
      setFirstPoint((prev) => prev !== 125 ? prev + 1 : prev);
      setSecondPoint((prev) => prev !== 98 ? prev + 1 : prev);
      setThirdPoint((prev) => prev !== 145 ? prev + 1 : prev);
      setFourthPoint((prev) => prev !== 132 ? prev + 1 : prev);
    }, 10);
    return () => clearInterval(pointsTimer);
  }, []);

  return (
    <div className="target-points-container container">
      <div>
        <div className="text-theme-blue">Lorem Ipsum</div>
        <h5>{firstPoint} +</h5>
        <span>Lorem Ipsum</span>
        <p>
          Incididunt nisi deserunt aliquip fugiat commodo adipisicing anim
          laboris laborum incididunt nostrud eiusmod ad.
        </p>
      </div>
      <div>
        <div className="text-theme-blue">Lorem Ipsum</div>
        <h5>{secondPoint} +</h5>
        <span>Lorem Ipsum</span>
        <p>
          Incididunt nisi deserunt aliquip fugiat commodo adipisicing anim
          laboris laborum incididunt nostrud eiusmod ad.
        </p>
      </div>
      <div>
        <div className="text-theme-blue">Lorem Ipsum</div>
        <h5>{thirdPoint} +</h5>
        <span>Lorem Ipsum</span>
        <p>
          Incididunt nisi deserunt aliquip fugiat commodo adipisicing anim
          laboris laborum incididunt nostrud eiusmod ad.
        </p>
      </div>
      <div>
        <div className="text-theme-blue">Lorem Ipsum</div>
        <h5>{fourthPoint} +</h5>
        <span>Lorem Ipsum</span>
        <p>
          Incididunt nisi deserunt aliquip fugiat commodo adipisicing anim
          laboris laborum incididunt nostrud eiusmod ad.
        </p>
      </div>
    </div>
  );
};

export default TargetPoints;
