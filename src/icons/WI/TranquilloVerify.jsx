import React from 'react';

export const iconData = {
  "id": "TranquilloVerify",
  "name": "TranquilloVerify",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 5.35 L 20.67 5.35 L 20.67 18.65 L 3.33 18.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 5.35 L 8.27 0.41 L 25.60 0.41 L 20.67 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 5.35 L 25.60 0.41 L 25.60 13.72 L 20.67 18.65"
      }
    ]
  ]
};

export const TranquilloVerify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 5.35 L 20.67 5.35 L 20.67 18.65 L 3.33 18.65 Z" />
      <path d="M 3.33 5.35 L 8.27 0.41 L 25.60 0.41 L 20.67 5.35" />
      <path d="M 20.67 5.35 L 25.60 0.41 L 25.60 13.72 L 20.67 18.65" />
      {children}
    </svg>
  );
});

export default TranquilloVerify;
