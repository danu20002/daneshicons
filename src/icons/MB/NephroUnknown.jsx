import React from 'react';

export const iconData = {
  "id": "NephroUnknown",
  "name": "NephroUnknown",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 7.59 a 7.63 2.289529075423525 0 1 0 15.26 0 a 7.63 2.289529075423525 0 1 0 -15.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 2.6437204560264944 0 1 0 17.62 0 a 8.81 2.6437204560264944 0 1 0 -17.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 16.41 a 7.63 2.289529075423525 0 1 0 15.26 0 a 7.63 2.289529075423525 0 1 0 -15.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.19 A 2 2 0 0 0 12.00 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.19 A 2 2 0 0 1 12.00 20.81"
      }
    ]
  ]
};

export const NephroUnknown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0" />
      <path d="M 4.37 7.59 a 7.63 2.289529075423525 0 1 0 15.26 0 a 7.63 2.289529075423525 0 1 0 -15.26 0" />
      <path d="M 3.19 12.00 a 8.81 2.6437204560264944 0 1 0 17.62 0 a 8.81 2.6437204560264944 0 1 0 -17.62 0" />
      <path d="M 4.37 16.41 a 7.63 2.289529075423525 0 1 0 15.26 0 a 7.63 2.289529075423525 0 1 0 -15.26 0" />
      <path d="M 12.00 3.19 A 2 2 0 0 0 12.00 20.81" />
      <path d="M 12.00 3.19 A 2 2 0 0 1 12.00 20.81" />
      {children}
    </svg>
  );
});

export default NephroUnknown;
