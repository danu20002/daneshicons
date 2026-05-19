import React from 'react';

export const iconData = {
  "id": "PhleboTaxi",
  "name": "PhleboTaxi",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 5.98 L 19.58 5.98 L 19.58 18.02 L 4.42 18.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 5.98 L 8.03 2.36 L 23.19 2.36 L 19.58 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 5.98 L 23.19 2.36 L 23.19 14.41 L 19.58 18.02"
      }
    ]
  ]
};

export const PhleboTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 5.98 L 19.58 5.98 L 19.58 18.02 L 4.42 18.02 Z" />
      <path d="M 4.42 5.98 L 8.03 2.36 L 23.19 2.36 L 19.58 5.98" />
      <path d="M 19.58 5.98 L 23.19 2.36 L 23.19 14.41 L 19.58 18.02" />
      {children}
    </svg>
  );
});

export default PhleboTaxi;
