import React from 'react';

export const iconData = {
  "id": "UndatoSyndrome",
  "name": "UndatoSyndrome",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 12.00 a 8.04 8.04 0 1 0 16.08 0 a 8.04 8.04 0 1 0 -16.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 12.00 L 21.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 17.33 L 18.75 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.54 L 12.00 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 17.33 L 5.25 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 12.00 L 2.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 6.67 L 5.25 5.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.46 L 12.00 2.46"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 6.67 L 18.75 5.25"
      }
    ]
  ]
};

export const UndatoSyndrome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 12.00 a 8.04 8.04 0 1 0 16.08 0 a 8.04 8.04 0 1 0 -16.08 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0" />
      <path d="M 19.54 12.00 L 21.54 12.00" />
      <path d="M 17.33 17.33 L 18.75 18.75" />
      <path d="M 12.00 19.54 L 12.00 21.54" />
      <path d="M 6.67 17.33 L 5.25 18.75" />
      <path d="M 4.46 12.00 L 2.46 12.00" />
      <path d="M 6.67 6.67 L 5.25 5.25" />
      <path d="M 12.00 4.46 L 12.00 2.46" />
      <path d="M 17.33 6.67 L 18.75 5.25" />
      {children}
    </svg>
  );
});

export default UndatoSyndrome;
