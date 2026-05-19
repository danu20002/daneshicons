import React from 'react';

export const iconData = {
  "id": "LeucoSpeed",
  "name": "LeucoSpeed",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 5.68 L 19.17 5.68 L 19.17 18.32 L 4.83 18.32 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 5.68 L 9.13 1.37 L 23.47 1.37 L 19.17 5.68"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 5.68 L 23.47 1.37 L 23.47 14.02 L 19.17 18.32"
      }
    ]
  ]
};

export const LeucoSpeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 5.68 L 19.17 5.68 L 19.17 18.32 L 4.83 18.32 Z" />
      <path d="M 4.83 5.68 L 9.13 1.37 L 23.47 1.37 L 19.17 5.68" />
      <path d="M 19.17 5.68 L 23.47 1.37 L 23.47 14.02 L 19.17 18.32" />
      {children}
    </svg>
  );
});

export default LeucoSpeed;
