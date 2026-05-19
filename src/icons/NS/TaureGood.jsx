import React from 'react';

export const iconData = {
  "id": "TaureGood",
  "name": "TaureGood",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 13.40 L 4.31 7.38 L 9.08 3.52 L 15.22 3.63 L 19.85 7.65 L 20.80 13.71 L 17.64 18.97 L 11.84 20.97 L 6.11 18.77 Z"
      }
    ]
  ]
};

export const TaureGood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 13.40 L 4.31 7.38 L 9.08 3.52 L 15.22 3.63 L 19.85 7.65 L 20.80 13.71 L 17.64 18.97 L 11.84 20.97 L 6.11 18.77 Z" />
      {children}
    </svg>
  );
});

export default TaureGood;
