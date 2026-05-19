import React from 'react';

export const iconData = {
  "id": "PrimoNote",
  "name": "PrimoNote",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.58 11.19 C 15.96 4.60, 16.61 3.69, 10.13 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 13.16 A 5.98 5.07 29 0 1 12.32 4.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 2.90 L 10.41 21.98 L 4.66 18.95"
      }
    ]
  ]
};

export const PrimoNote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.58 11.19 C 15.96 4.60, 16.61 3.69, 10.13 14.43" />
      <path d="M 3.01 13.16 A 5.98 5.07 29 0 1 12.32 4.29" />
      <path d="M 3.39 2.90 L 10.41 21.98 L 4.66 18.95" />
      {children}
    </svg>
  );
});

export default PrimoNote;
