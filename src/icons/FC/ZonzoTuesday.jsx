import React from 'react';

export const iconData = {
  "id": "ZonzoTuesday",
  "name": "ZonzoTuesday",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 12.00 a 2.39 2.39 0 1 0 4.78 0 a 2.39 2.39 0 1 0 -4.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 a 4.28 4.28 0 1 0 8.56 0 a 4.28 4.28 0 1 0 -8.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0"
      }
    ]
  ]
};

export const ZonzoTuesday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 12.00 a 2.39 2.39 0 1 0 4.78 0 a 2.39 2.39 0 1 0 -4.78 0" />
      <path d="M 7.72 12.00 a 4.28 4.28 0 1 0 8.56 0 a 4.28 4.28 0 1 0 -8.56 0" />
      <path d="M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0" />
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0" />
      {children}
    </svg>
  );
});

export default ZonzoTuesday;
