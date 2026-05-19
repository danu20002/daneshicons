import React from 'react';

export const iconData = {
  "id": "TenuRead",
  "name": "TenuRead",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 12.00 a 4.69 4.69 0 1 0 9.37 0 a 4.69 4.69 0 1 0 -9.37 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.63 0 a 7.82 7.82 0 1 0 -15.63 0"
      }
    ]
  ]
};

export const TenuRead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0" stroke-dasharray="6 3" />
      <path d="M 7.31 12.00 a 4.69 4.69 0 1 0 9.37 0 a 4.69 4.69 0 1 0 -9.37 0" stroke-dasharray="5 2" />
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.63 0 a 7.82 7.82 0 1 0 -15.63 0" />
      {children}
    </svg>
  );
});

export default TenuRead;
