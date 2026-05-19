import React from 'react';

export const iconData = {
  "id": "NeutroWilling",
  "name": "NeutroWilling",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 6.27 L 20.83 6.27 L 20.83 17.73 L 3.17 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 6.27 L 7.83 1.61 L 25.49 1.61 L 20.83 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.83 6.27 L 25.49 1.61 L 25.49 13.07 L 20.83 17.73"
      }
    ]
  ]
};

export const NeutroWilling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 6.27 L 20.83 6.27 L 20.83 17.73 L 3.17 17.73 Z" />
      <path d="M 3.17 6.27 L 7.83 1.61 L 25.49 1.61 L 20.83 6.27" />
      <path d="M 20.83 6.27 L 25.49 1.61 L 25.49 13.07 L 20.83 17.73" />
      {children}
    </svg>
  );
});

export default NeutroWilling;
