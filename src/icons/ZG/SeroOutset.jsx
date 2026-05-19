import React from 'react';

export const iconData = {
  "id": "SeroOutset",
  "name": "SeroOutset",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 5.34 L 20.29 5.34 L 20.29 18.66 L 3.71 18.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 5.34 L 7.10 1.95 L 23.68 1.95 L 20.29 5.34"
      }
    ],
    [
      "path",
      {
        "d": "M 20.29 5.34 L 23.68 1.95 L 23.68 15.27 L 20.29 18.66"
      }
    ]
  ]
};

export const SeroOutset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 5.34 L 20.29 5.34 L 20.29 18.66 L 3.71 18.66 Z" />
      <path d="M 3.71 5.34 L 7.10 1.95 L 23.68 1.95 L 20.29 5.34" />
      <path d="M 20.29 5.34 L 23.68 1.95 L 23.68 15.27 L 20.29 18.66" />
      {children}
    </svg>
  );
});

export default SeroOutset;
