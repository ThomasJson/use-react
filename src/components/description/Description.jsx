import React from "react";

const Description = () => {
  const text = " Les plantes dont vous avez toujours rêvé ";
  const emojis = "🤑🤑🤑";

  return (
    <div>
      <h2>{ emojis + text.slice(0,100) + emojis }</h2>
    </div>
  );
};

export default Description;
