import React from 'react';

export const iconData = {
  "id": "IsomeroFeature",
  "name": "IsomeroFeature",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 5.44 L 20.40 5.44 L 20.40 18.56 L 3.60 18.56 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 5.44 L 8.46 0.58 L 25.26 0.58 L 20.40 5.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.40 5.44 L 25.26 0.58 L 25.26 13.70 L 20.40 18.56"
      }
    ]
  ]
};

export const IsomeroFeature = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 5.44 L 20.40 5.44 L 20.40 18.56 L 3.60 18.56 Z" />
      <path d="M 3.60 5.44 L 8.46 0.58 L 25.26 0.58 L 20.40 5.44" />
      <path d="M 20.40 5.44 L 25.26 0.58 L 25.26 13.70 L 20.40 18.56" />
      {children}
    </svg>
  );
});

export default IsomeroFeature;
