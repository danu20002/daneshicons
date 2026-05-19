import React from 'react';

export const iconData = {
  "id": "TurgidoSucceed",
  "name": "TurgidoSucceed",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 12.00 L 21.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 18.86 L 16.96 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 18.86 L 7.04 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 12.00 L 2.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.14 L 7.04 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 5.14 L 16.96 3.40"
      }
    ]
  ]
};

export const TurgidoSucceed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0" />
      <path d="M 19.93 12.00 L 21.93 12.00" />
      <path d="M 15.96 18.86 L 16.96 20.60" />
      <path d="M 8.04 18.86 L 7.04 20.60" />
      <path d="M 4.07 12.00 L 2.07 12.00" />
      <path d="M 8.04 5.14 L 7.04 3.40" />
      <path d="M 15.96 5.14 L 16.96 3.40" />
      {children}
    </svg>
  );
});

export default TurgidoSucceed;
