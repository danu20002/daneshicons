import React from 'react';

export const iconData = {
  "id": "BaroCanopy",
  "name": "BaroCanopy",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 20.99 Q 3.44 13.75 7.34 10.63"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 10.05 A 2.17 2.20 108 0 0 15.76 3.04"
      }
    ],
    [
      "path",
      {
        "d": "M 11.57 13.19 A 2.23 4.71 145 0 0 13.42 16.08"
      }
    ]
  ]
};

export const BaroCanopy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 20.99 Q 3.44 13.75 7.34 10.63" />
      <path d="M 20.89 10.05 A 2.17 2.20 108 0 0 15.76 3.04" />
      <path d="M 11.57 13.19 A 2.23 4.71 145 0 0 13.42 16.08" />
      {children}
    </svg>
  );
});

export default BaroCanopy;
