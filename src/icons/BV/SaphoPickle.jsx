import React from 'react';

export const iconData = {
  "id": "SaphoPickle",
  "name": "SaphoPickle",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 2.662479199748486 0 1 0 17.75 0 a 8.87 2.662479199748486 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 0 12.00 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 1 12.00 20.87"
      }
    ]
  ]
};

export const SaphoPickle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0" />
      <path d="M 3.13 12.00 a 8.87 2.662479199748486 0 1 0 17.75 0 a 8.87 2.662479199748486 0 1 0 -17.75 0" />
      <path d="M 12.00 3.13 A 2 2 0 0 0 12.00 20.87" />
      <path d="M 12.00 3.13 A 2 2 0 0 1 12.00 20.87" />
      {children}
    </svg>
  );
});

export default SaphoPickle;
