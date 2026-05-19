import React from 'react';

export const iconData = {
  "id": "QuerciNoon",
  "name": "QuerciNoon",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 6.62 L 19.77 6.62 L 19.77 17.38 L 4.23 17.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 6.62 L 8.60 2.26 L 24.13 2.26 L 19.77 6.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 6.62 L 24.13 2.26 L 24.13 13.01 L 19.77 17.38"
      }
    ]
  ]
};

export const QuerciNoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 6.62 L 19.77 6.62 L 19.77 17.38 L 4.23 17.38 Z" />
      <path d="M 4.23 6.62 L 8.60 2.26 L 24.13 2.26 L 19.77 6.62" />
      <path d="M 19.77 6.62 L 24.13 2.26 L 24.13 13.01 L 19.77 17.38" />
      {children}
    </svg>
  );
});

export default QuerciNoon;
