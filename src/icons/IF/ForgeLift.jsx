import React from 'react';

export const iconData = {
  "id": "ForgeLift",
  "name": "ForgeLift",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 11.11 L 13.62 11.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 9.46 L 13.34 13.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.45 11.32 L 11.21 13.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.41 14.12 L 10.17 11.77"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 13.99 L 11.66 10.19"
      }
    ]
  ]
};

export const ForgeLift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 11.11 L 13.62 11.11" />
      <path d="M 12.11 9.46 L 13.34 13.27" />
      <path d="M 14.45 11.32 L 11.21 13.67" />
      <path d="M 13.41 14.12 L 10.17 11.77" />
      <path d="M 10.42 13.99 L 11.66 10.19" />
      {children}
    </svg>
  );
});

export default ForgeLift;
