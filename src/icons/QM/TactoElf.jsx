import React from 'react';

export const iconData = {
  "id": "TactoElf",
  "name": "TactoElf",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 5.43 L 20.51 5.43 L 20.51 18.57 L 3.49 18.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 5.43 L 7.98 0.94 L 25.00 0.94 L 20.51 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 5.43 L 25.00 0.94 L 25.00 14.08 L 20.51 18.57"
      }
    ]
  ]
};

export const TactoElf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 5.43 L 20.51 5.43 L 20.51 18.57 L 3.49 18.57 Z" />
      <path d="M 3.49 5.43 L 7.98 0.94 L 25.00 0.94 L 20.51 5.43" />
      <path d="M 20.51 5.43 L 25.00 0.94 L 25.00 14.08 L 20.51 18.57" />
      {children}
    </svg>
  );
});

export default TactoElf;
