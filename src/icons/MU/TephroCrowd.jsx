import React from 'react';

export const iconData = {
  "id": "TephroCrowd",
  "name": "TephroCrowd",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 6.86 a 6.86 2.0566481294855476 0 1 0 13.71 0 a 6.86 2.0566481294855476 0 1 0 -13.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 10.29 a 8.40 2.518869248844529 0 1 0 16.79 0 a 8.40 2.518869248844529 0 1 0 -16.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 13.71 a 8.40 2.518869248844529 0 1 0 16.79 0 a 8.40 2.518869248844529 0 1 0 -16.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 17.14 a 6.86 2.056648129485547 0 1 0 13.71 0 a 6.86 2.056648129485547 0 1 0 -13.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.43 A 2 2 0 0 0 12.00 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.43 A 2 2 0 0 1 12.00 20.57"
      }
    ]
  ]
};

export const TephroCrowd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      <path d="M 5.14 6.86 a 6.86 2.0566481294855476 0 1 0 13.71 0 a 6.86 2.0566481294855476 0 1 0 -13.71 0" />
      <path d="M 3.60 10.29 a 8.40 2.518869248844529 0 1 0 16.79 0 a 8.40 2.518869248844529 0 1 0 -16.79 0" />
      <path d="M 3.60 13.71 a 8.40 2.518869248844529 0 1 0 16.79 0 a 8.40 2.518869248844529 0 1 0 -16.79 0" />
      <path d="M 5.14 17.14 a 6.86 2.056648129485547 0 1 0 13.71 0 a 6.86 2.056648129485547 0 1 0 -13.71 0" />
      <path d="M 12.00 3.43 A 2 2 0 0 0 12.00 20.57" />
      <path d="M 12.00 3.43 A 2 2 0 0 1 12.00 20.57" />
      {children}
    </svg>
  );
});

export default TephroCrowd;
