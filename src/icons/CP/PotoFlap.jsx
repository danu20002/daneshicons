import React from 'react';

export const iconData = {
  "id": "PotoFlap",
  "name": "PotoFlap",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 5.29 L 20.77 5.29 L 20.77 18.71 L 3.23 18.71 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 5.29 L 8.18 0.33 L 25.73 0.33 L 20.77 5.29"
      }
    ],
    [
      "path",
      {
        "d": "M 20.77 5.29 L 25.73 0.33 L 25.73 13.76 L 20.77 18.71"
      }
    ]
  ]
};

export const PotoFlap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 5.29 L 20.77 5.29 L 20.77 18.71 L 3.23 18.71 Z" />
      <path d="M 3.23 5.29 L 8.18 0.33 L 25.73 0.33 L 20.77 5.29" />
      <path d="M 20.77 5.29 L 25.73 0.33 L 25.73 13.76 L 20.77 18.71" />
      {children}
    </svg>
  );
});

export default PotoFlap;
