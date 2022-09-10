import React from "react";
import { Container } from "react-bootstrap";
import "./careScale.scss";

const CareScale = ({ scaleValue, careType }) => {
  const scaleType = careType === "light" ? "☀️" : "💧";

  const range = [1, 2, 3];

  return (
    <Container fluid className="care-scale">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </Container>
  );
};

export default CareScale;
