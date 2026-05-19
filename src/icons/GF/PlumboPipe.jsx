import React from 'react';

export const iconData = {
  "id": "PlumboPipe",
  "name": "PlumboPipe",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.67 0 a 9.83 9.83 0 1 0 -19.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 8.72 a 9.27 2.7815266882131295 0 1 0 18.54 0 a 9.27 2.7815266882131295 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 15.28 a 9.27 2.7815266882131295 0 1 0 18.54 0 a 9.27 2.7815266882131295 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 0 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 1 12.00 21.83"
      }
    ]
  ]
};

export const PlumboPipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.67 0 a 9.83 9.83 0 1 0 -19.67 0" />
      <path d="M 2.73 8.72 a 9.27 2.7815266882131295 0 1 0 18.54 0 a 9.27 2.7815266882131295 0 1 0 -18.54 0" />
      <path d="M 2.73 15.28 a 9.27 2.7815266882131295 0 1 0 18.54 0 a 9.27 2.7815266882131295 0 1 0 -18.54 0" />
      <path d="M 12.00 2.17 A 2 2 0 0 0 12.00 21.83" />
      <path d="M 12.00 2.17 A 2 2 0 0 1 12.00 21.83" />
      {children}
    </svg>
  );
});

export default PlumboPipe;
