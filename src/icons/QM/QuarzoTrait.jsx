import React from 'react';

export const iconData = {
  "id": "QuarzoTrait",
  "name": "QuarzoTrait",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 5.45 L 19.75 5.45 L 19.75 18.55 L 4.25 18.55 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 5.45 L 8.31 1.39 L 23.81 1.39 L 19.75 5.45"
      }
    ],
    [
      "path",
      {
        "d": "M 19.75 5.45 L 23.81 1.39 L 23.81 14.49 L 19.75 18.55"
      }
    ]
  ]
};

export const QuarzoTrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 5.45 L 19.75 5.45 L 19.75 18.55 L 4.25 18.55 Z" />
      <path d="M 4.25 5.45 L 8.31 1.39 L 23.81 1.39 L 19.75 5.45" />
      <path d="M 19.75 5.45 L 23.81 1.39 L 23.81 14.49 L 19.75 18.55" />
      {children}
    </svg>
  );
});

export default QuarzoTrait;
