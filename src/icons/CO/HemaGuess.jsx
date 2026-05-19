import React from 'react';

export const iconData = {
  "id": "HemaGuess",
  "name": "HemaGuess",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.73 12.00 a 9.27 9.27 0 1 0 18.54 0 a 9.27 9.27 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 8.91 a 8.74 2.622117905631823 0 1 0 17.48 0 a 8.74 2.622117905631823 0 1 0 -17.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 15.09 a 8.74 2.622117905631823 0 1 0 17.48 0 a 8.74 2.622117905631823 0 1 0 -17.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.73 A 2 2 0 0 0 12.00 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.73 A 2 2 0 0 1 12.00 21.27"
      }
    ]
  ]
};

export const HemaGuess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.73 12.00 a 9.27 9.27 0 1 0 18.54 0 a 9.27 9.27 0 1 0 -18.54 0" />
      <path d="M 3.26 8.91 a 8.74 2.622117905631823 0 1 0 17.48 0 a 8.74 2.622117905631823 0 1 0 -17.48 0" />
      <path d="M 3.26 15.09 a 8.74 2.622117905631823 0 1 0 17.48 0 a 8.74 2.622117905631823 0 1 0 -17.48 0" />
      <path d="M 12.00 2.73 A 2 2 0 0 0 12.00 21.27" />
      <path d="M 12.00 2.73 A 2 2 0 0 1 12.00 21.27" />
      {children}
    </svg>
  );
});

export default HemaGuess;
