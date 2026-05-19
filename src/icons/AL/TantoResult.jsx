import React from 'react';

export const iconData = {
  "id": "TantoResult",
  "name": "TantoResult",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 12.00 a 7.44 7.44 0 1 0 14.87 0 a 7.44 7.44 0 1 0 -14.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 12.00 L 20.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 18.01 L 16.47 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 18.01 L 7.53 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 L 3.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 5.99 L 7.53 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 5.99 L 16.47 4.26"
      }
    ]
  ]
};

export const TantoResult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 12.00 a 7.44 7.44 0 1 0 14.87 0 a 7.44 7.44 0 1 0 -14.87 0" />
      <path d="M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0" />
      <path d="M 18.94 12.00 L 20.94 12.00" />
      <path d="M 15.47 18.01 L 16.47 19.74" />
      <path d="M 8.53 18.01 L 7.53 19.74" />
      <path d="M 5.06 12.00 L 3.06 12.00" />
      <path d="M 8.53 5.99 L 7.53 4.26" />
      <path d="M 15.47 5.99 L 16.47 4.26" />
      {children}
    </svg>
  );
});

export default TantoResult;
