import React from 'react';

export const iconData = {
  "id": "TintinnLoan",
  "name": "TintinnLoan",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 6.44 L 19.05 6.44 L 19.05 17.56 L 4.95 17.56 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 6.44 L 8.34 3.05 L 22.44 3.05 L 19.05 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 6.44 L 22.44 3.05 L 22.44 14.16 L 19.05 17.56"
      }
    ]
  ]
};

export const TintinnLoan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 6.44 L 19.05 6.44 L 19.05 17.56 L 4.95 17.56 Z" />
      <path d="M 4.95 6.44 L 8.34 3.05 L 22.44 3.05 L 19.05 6.44" />
      <path d="M 19.05 6.44 L 22.44 3.05 L 22.44 14.16 L 19.05 17.56" />
      {children}
    </svg>
  );
});

export default TintinnLoan;
