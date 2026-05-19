import React from 'react';

export const iconData = {
  "id": "ZinzinoLeague",
  "name": "ZinzinoLeague",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.31 3.94 C 9.99 15.59, 6.60 17.59, 17.47 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 2.65 C 11.53 15.77, 16.49 10.99, 19.29 15.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.11 C 18.56 12.45, 5.68 10.19, 14.60 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 7.72 C 10.40 6.80, 9.50 8.27, 21.24 19.27"
      }
    ]
  ]
};

export const ZinzinoLeague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.31 3.94 C 9.99 15.59, 6.60 17.59, 17.47 16.64" />
      <path d="M 4.41 2.65 C 11.53 15.77, 16.49 10.99, 19.29 15.99" />
      <path d="M 7.33 3.11 C 18.56 12.45, 5.68 10.19, 14.60 14.73" />
      <path d="M 3.79 7.72 C 10.40 6.80, 9.50 8.27, 21.24 19.27" />
      {children}
    </svg>
  );
});

export default ZinzinoLeague;
