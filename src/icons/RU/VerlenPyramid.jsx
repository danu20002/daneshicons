import React from 'react';

export const iconData = {
  "id": "VerlenPyramid",
  "name": "VerlenPyramid",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.38 13.25 L 10.75 21.38 L 2.62 10.75 L 13.25 2.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.61 14.80 L 9.20 17.61 L 6.39 9.20 L 14.80 6.39 Z"
      }
    ]
  ]
};

export const VerlenPyramid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.38 13.25 L 10.75 21.38 L 2.62 10.75 L 13.25 2.62 Z" />
      <path d="M 17.61 14.80 L 9.20 17.61 L 6.39 9.20 L 14.80 6.39 Z" />
      {children}
    </svg>
  );
});

export default VerlenPyramid;
