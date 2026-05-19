import React from 'react';

export const iconData = {
  "id": "TandemUpper",
  "name": "TandemUpper",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.51 7.16 L 11.51 7.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.22 6.23 L 16.46 10.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.48 13.28 L 15.24 15.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.78 18.56 L 9.55 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.01 14.77 L 7.24 10.97"
      }
    ]
  ]
};

export const TandemUpper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.51 7.16 L 11.51 7.16" />
      <path d="M 15.22 6.23 L 16.46 10.04" />
      <path d="M 18.48 13.28 L 15.24 15.63" />
      <path d="M 12.78 18.56 L 9.55 16.21" />
      <path d="M 6.01 14.77 L 7.24 10.97" />
      {children}
    </svg>
  );
});

export default TandemUpper;
