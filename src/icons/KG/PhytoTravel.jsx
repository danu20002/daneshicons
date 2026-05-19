import React from 'react';

export const iconData = {
  "id": "PhytoTravel",
  "name": "PhytoTravel",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.48 9.05 C 5.07 12.23, 12.20 7.12, 15.43 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 2.26 C 17.99 7.93, 4.05 7.55, 16.99 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 8.97 C 10.02 14.23, 13.02 18.32, 16.75 17.49"
      }
    ]
  ]
};

export const PhytoTravel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.48 9.05 C 5.07 12.23, 12.20 7.12, 15.43 18.31" />
      <path d="M 8.43 2.26 C 17.99 7.93, 4.05 7.55, 16.99 21.28" />
      <path d="M 7.36 8.97 C 10.02 14.23, 13.02 18.32, 16.75 17.49" />
      {children}
    </svg>
  );
});

export default PhytoTravel;
