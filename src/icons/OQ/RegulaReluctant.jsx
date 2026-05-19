import React from 'react';

export const iconData = {
  "id": "RegulaReluctant",
  "name": "RegulaReluctant",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.00 2.86 C 6.57 10.58, 7.47 19.12, 17.19 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 9.43 C 18.74 4.36, 12.52 9.61, 20.59 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 9.38 C 4.99 15.90, 14.43 19.39, 15.92 15.69"
      }
    ]
  ]
};

export const RegulaReluctant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.00 2.86 C 6.57 10.58, 7.47 19.12, 17.19 16.86" />
      <path d="M 4.54 9.43 C 18.74 4.36, 12.52 9.61, 20.59 14.38" />
      <path d="M 8.18 9.38 C 4.99 15.90, 14.43 19.39, 15.92 15.69" />
      {children}
    </svg>
  );
});

export default RegulaReluctant;
