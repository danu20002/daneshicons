import React from 'react';

export const iconData = {
  "id": "TropicoBraid",
  "name": "TropicoBraid",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 12.00 a 4.01 4.01 0 1 0 8.02 0 a 4.01 4.01 0 1 0 -8.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 12.00 a 7.26 7.26 0 1 0 14.52 0 a 7.26 7.26 0 1 0 -14.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ]
  ]
};

export const TropicoBraid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" />
      <path d="M 7.99 12.00 a 4.01 4.01 0 1 0 8.02 0 a 4.01 4.01 0 1 0 -8.02 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0" />
      <path d="M 4.74 12.00 a 7.26 7.26 0 1 0 14.52 0 a 7.26 7.26 0 1 0 -14.52 0" />
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      {children}
    </svg>
  );
});

export default TropicoBraid;
