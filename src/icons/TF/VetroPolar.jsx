import React from 'react';

export const iconData = {
  "id": "VetroPolar",
  "name": "VetroPolar",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.19 10.22 L 11.25 10.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 9.75 A 5.29 4.65 69 0 1 11.18 6.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 9.09 L 6.54 17.73 L 17.86 8.44"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 3.35 L 20.74 7.20 L 20.23 21.54"
      }
    ]
  ]
};

export const VetroPolar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.19 10.22 L 11.25 10.06" />
      <path d="M 6.81 9.75 A 5.29 4.65 69 0 1 11.18 6.33" />
      <path d="M 16.14 9.09 L 6.54 17.73 L 17.86 8.44" />
      <path d="M 18.47 3.35 L 20.74 7.20 L 20.23 21.54" />
      {children}
    </svg>
  );
});

export default VetroPolar;
