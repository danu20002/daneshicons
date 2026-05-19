import React from 'react';

export const iconData = {
  "id": "SpodoStress",
  "name": "SpodoStress",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 5.67 L 19.52 5.67 L 19.52 18.33 L 4.48 18.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 5.67 L 9.07 1.08 L 24.11 1.08 L 19.52 5.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 5.67 L 24.11 1.08 L 24.11 13.74 L 19.52 18.33"
      }
    ]
  ]
};

export const SpodoStress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 5.67 L 19.52 5.67 L 19.52 18.33 L 4.48 18.33 Z" />
      <path d="M 4.48 5.67 L 9.07 1.08 L 24.11 1.08 L 19.52 5.67" />
      <path d="M 19.52 5.67 L 24.11 1.08 L 24.11 13.74 L 19.52 18.33" />
      {children}
    </svg>
  );
});

export default SpodoStress;
