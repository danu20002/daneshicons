import React from 'react';

export const iconData = {
  "id": "QuintOxygen",
  "name": "QuintOxygen",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 13.69 A 5.00 2.69 71 0 1 3.22 7.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 18.97 L 12.78 14.07 L 20.56 20.21 L 8.42 5.05 L 19.10 2.96 L 12.87 8.54 L 12.56 14.42 L 4.05 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 18.13 L 14.84 18.59"
      }
    ]
  ]
};

export const QuintOxygen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 13.69 A 5.00 2.69 71 0 1 3.22 7.43" />
      <path d="M 4.31 18.97 L 12.78 14.07 L 20.56 20.21 L 8.42 5.05 L 19.10 2.96 L 12.87 8.54 L 12.56 14.42 L 4.05 21.65" />
      <path d="M 17.23 18.13 L 14.84 18.59" />
      {children}
    </svg>
  );
});

export default QuintOxygen;
