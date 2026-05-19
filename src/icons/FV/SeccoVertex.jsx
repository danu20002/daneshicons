import React from 'react';

export const iconData = {
  "id": "SeccoVertex",
  "name": "SeccoVertex",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 12.00 a 5.56 5.56 0 1 0 11.12 0 a 5.56 5.56 0 1 0 -11.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 12.00 a 6.99 6.99 0 1 0 13.97 0 a 6.99 6.99 0 1 0 -13.97 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0"
      }
    ]
  ]
};

export const SeccoVertex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0" />
      <path d="M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0" />
      <path d="M 6.44 12.00 a 5.56 5.56 0 1 0 11.12 0 a 5.56 5.56 0 1 0 -11.12 0" />
      <path d="M 5.01 12.00 a 6.99 6.99 0 1 0 13.97 0 a 6.99 6.99 0 1 0 -13.97 0" stroke-dasharray="6 3" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" />
      {children}
    </svg>
  );
});

export default SeccoVertex;
