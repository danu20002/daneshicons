import React from 'react';

export const iconData = {
  "id": "RectiCorona",
  "name": "RectiCorona",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 10.82 L 10.73 10.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 6.73 L 13.18 10.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 13.18 L 13.27 13.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 17.27 L 10.82 13.27"
      }
    ]
  ]
};

export const RectiCorona = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 10.82 L 10.73 10.82" />
      <path d="M 13.18 6.73 L 13.18 10.73" />
      <path d="M 17.27 13.18 L 13.27 13.18" />
      <path d="M 10.82 17.27 L 10.82 13.27" />
      {children}
    </svg>
  );
});

export default RectiCorona;
