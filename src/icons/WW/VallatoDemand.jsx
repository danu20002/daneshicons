import React from 'react';

export const iconData = {
  "id": "VallatoDemand",
  "name": "VallatoDemand",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.09 17.51 A 2.10 5.34 110 0 0 17.93 7.80"
      }
    ],
    [
      "path",
      {
        "d": "M 10.12 18.09 L 18.13 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 6.39 Q 2.94 4.74 6.39 2.11"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 10.46 Q 3.87 11.37 17.87 21.90"
      }
    ]
  ]
};

export const VallatoDemand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.09 17.51 A 2.10 5.34 110 0 0 17.93 7.80" />
      <path d="M 10.12 18.09 L 18.13 16.78" />
      <path d="M 18.91 6.39 Q 2.94 4.74 6.39 2.11" />
      <path d="M 18.09 10.46 Q 3.87 11.37 17.87 21.90" />
      {children}
    </svg>
  );
});

export default VallatoDemand;
