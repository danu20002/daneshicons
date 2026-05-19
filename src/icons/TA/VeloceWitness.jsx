import React from 'react';

export const iconData = {
  "id": "VeloceWitness",
  "name": "VeloceWitness",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.29 7.87 C 18.93 6.79, 4.41 9.32, 15.65 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 3.55 C 12.42 17.93, 16.89 8.58, 16.76 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.99 9.40 C 12.94 18.55, 7.82 4.88, 14.54 21.39"
      }
    ]
  ]
};

export const VeloceWitness = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.29 7.87 C 18.93 6.79, 4.41 9.32, 15.65 16.45" />
      <path d="M 7.44 3.55 C 12.42 17.93, 16.89 8.58, 16.76 15.40" />
      <path d="M 8.99 9.40 C 12.94 18.55, 7.82 4.88, 14.54 21.39" />
      {children}
    </svg>
  );
});

export default VeloceWitness;
