import React from 'react';

export const iconData = {
  "id": "SpinoLadder",
  "name": "SpinoLadder",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.32 17.80 L 3.18 11.38 L 6.20 5.32 L 12.62 3.18 L 18.68 6.20 L 20.82 12.62 L 17.80 18.68 L 11.38 20.82 Z"
      }
    ]
  ]
};

export const SpinoLadder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 5.32 17.80 L 3.18 11.38 L 6.20 5.32 L 12.62 3.18 L 18.68 6.20 L 20.82 12.62 L 17.80 18.68 L 11.38 20.82 Z" />
      {children}
    </svg>
  );
});

export default SpinoLadder;
