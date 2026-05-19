import React from 'react';

export const iconData = {
  "id": "ToccoSqueeze",
  "name": "ToccoSqueeze",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 0 14.24 0 a 7.12 7.12 0 1 0 -14.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 12.00 a 4.27 4.27 0 1 1 8.53 0 a 4.27 4.27 0 1 1 -8.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 12.00 L 20.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 17.73 L 16.31 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 17.73 L 7.69 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 12.00 L 3.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 6.27 L 7.69 4.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 6.27 L 16.31 4.54"
      }
    ]
  ]
};

export const ToccoSqueeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 0 14.24 0 a 7.12 7.12 0 1 0 -14.24 0" />
      <path d="M 7.73 12.00 a 4.27 4.27 0 1 1 8.53 0 a 4.27 4.27 0 1 1 -8.53 0" />
      <path d="M 18.62 12.00 L 20.62 12.00" />
      <path d="M 15.31 17.73 L 16.31 19.46" />
      <path d="M 8.69 17.73 L 7.69 19.46" />
      <path d="M 5.38 12.00 L 3.38 12.00" />
      <path d="M 8.69 6.27 L 7.69 4.54" />
      <path d="M 15.31 6.27 L 16.31 4.54" />
      {children}
    </svg>
  );
});

export default ToccoSqueeze;
