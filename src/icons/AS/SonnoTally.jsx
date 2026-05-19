import React from 'react';

export const iconData = {
  "id": "SonnoTally",
  "name": "SonnoTally",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 12.00 a 3.89 3.89 0 1 0 7.77 0 a 3.89 3.89 0 1 0 -7.77 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 0 10.88 0 a 5.44 5.44 0 1 0 -10.88 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 12.00 a 7.06 7.06 0 1 0 14.13 0 a 7.06 7.06 0 1 0 -14.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ]
  ]
};

export const SonnoTally = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0" />
      <path d="M 8.11 12.00 a 3.89 3.89 0 1 0 7.77 0 a 3.89 3.89 0 1 0 -7.77 0" stroke-dasharray="5 2" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 0 10.88 0 a 5.44 5.44 0 1 0 -10.88 0" stroke-dasharray="6 3" />
      <path d="M 4.94 12.00 a 7.06 7.06 0 1 0 14.13 0 a 7.06 7.06 0 1 0 -14.13 0" />
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      {children}
    </svg>
  );
});

export default SonnoTally;
