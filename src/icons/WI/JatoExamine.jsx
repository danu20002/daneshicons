import React from 'react';

export const iconData = {
  "id": "JatoExamine",
  "name": "JatoExamine",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 5.97 L 19.34 5.97 L 19.34 18.03 L 4.66 18.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 5.97 L 9.03 1.60 L 23.71 1.60 L 19.34 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 5.97 L 23.71 1.60 L 23.71 13.66 L 19.34 18.03"
      }
    ]
  ]
};

export const JatoExamine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 5.97 L 19.34 5.97 L 19.34 18.03 L 4.66 18.03 Z" />
      <path d="M 4.66 5.97 L 9.03 1.60 L 23.71 1.60 L 19.34 5.97" />
      <path d="M 19.34 5.97 L 23.71 1.60 L 23.71 13.66 L 19.34 18.03" />
      {children}
    </svg>
  );
});

export default JatoExamine;
