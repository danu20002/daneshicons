import React from 'react';

export const iconData = {
  "id": "TantoEar",
  "name": "TantoEar",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.62 12.00 a 9.38 9.38 0 1 0 18.77 0 a 9.38 9.38 0 1 0 -18.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 12.00 a 9.38 2.8153083565179258 0 1 0 18.77 0 a 9.38 2.8153083565179258 0 1 0 -18.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 5.36 A 2 2 0 0 0 18.64 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 5.36 A 2 2 0 0 1 18.64 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.62 A 2 2 0 0 0 12.00 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.62 A 2 2 0 0 1 12.00 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 5.36 A 2 2 0 0 0 5.36 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 5.36 A 2 2 0 0 1 5.36 18.64"
      }
    ]
  ]
};

export const TantoEar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.62 12.00 a 9.38 9.38 0 1 0 18.77 0 a 9.38 9.38 0 1 0 -18.77 0" />
      <path d="M 2.62 12.00 a 9.38 2.8153083565179258 0 1 0 18.77 0 a 9.38 2.8153083565179258 0 1 0 -18.77 0" />
      <path d="M 18.64 5.36 A 2 2 0 0 0 18.64 18.64" />
      <path d="M 18.64 5.36 A 2 2 0 0 1 18.64 18.64" />
      <path d="M 12.00 2.62 A 2 2 0 0 0 12.00 21.38" />
      <path d="M 12.00 2.62 A 2 2 0 0 1 12.00 21.38" />
      <path d="M 5.36 5.36 A 2 2 0 0 0 5.36 18.64" />
      <path d="M 5.36 5.36 A 2 2 0 0 1 5.36 18.64" />
      {children}
    </svg>
  );
});

export default TantoEar;
