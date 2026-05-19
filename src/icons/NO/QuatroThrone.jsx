import React from 'react';

export const iconData = {
  "id": "QuatroThrone",
  "name": "QuatroThrone",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.24 6.63 L 20.76 6.63 L 20.76 17.37 L 3.24 17.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 6.63 L 7.60 2.27 L 25.12 2.27 L 20.76 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 20.76 6.63 L 25.12 2.27 L 25.12 13.01 L 20.76 17.37"
      }
    ]
  ]
};

export const QuatroThrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.24 6.63 L 20.76 6.63 L 20.76 17.37 L 3.24 17.37 Z" />
      <path d="M 3.24 6.63 L 7.60 2.27 L 25.12 2.27 L 20.76 6.63" />
      <path d="M 20.76 6.63 L 25.12 2.27 L 25.12 13.01 L 20.76 17.37" />
      {children}
    </svg>
  );
});

export default QuatroThrone;
