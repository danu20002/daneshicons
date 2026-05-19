import React from 'react';

export const iconData = {
  "id": "RhyoDesign",
  "name": "RhyoDesign",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.87 12.00 L 19.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.87 L 12.00 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 7.01 L 16.99 16.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 16.99 L 16.99 7.01"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 12.00 a 9.51 9.51 0 1 0 19.01 0 a 9.51 9.51 0 1 0 -19.01 0"
      }
    ]
  ]
};

export const RhyoDesign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.87 12.00 L 19.13 12.00" />
      <path d="M 12.00 4.87 L 12.00 19.13" />
      <path d="M 7.01 7.01 L 16.99 16.99" />
      <path d="M 7.01 16.99 L 16.99 7.01" />
      <path d="M 2.49 12.00 a 9.51 9.51 0 1 0 19.01 0 a 9.51 9.51 0 1 0 -19.01 0" />
      {children}
    </svg>
  );
});

export default RhyoDesign;
