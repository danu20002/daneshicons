import React from 'react';

export const iconData = {
  "id": "PrimoSymptom",
  "name": "PrimoSymptom",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 6.69 L 20.40 6.69 L 20.40 17.31 L 3.60 17.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 6.69 L 8.50 1.80 L 25.29 1.80 L 20.40 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 20.40 6.69 L 25.29 1.80 L 25.29 12.41 L 20.40 17.31"
      }
    ]
  ]
};

export const PrimoSymptom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 6.69 L 20.40 6.69 L 20.40 17.31 L 3.60 17.31 Z" />
      <path d="M 3.60 6.69 L 8.50 1.80 L 25.29 1.80 L 20.40 6.69" />
      <path d="M 20.40 6.69 L 25.29 1.80 L 25.29 12.41 L 20.40 17.31" />
      {children}
    </svg>
  );
});

export default PrimoSymptom;
