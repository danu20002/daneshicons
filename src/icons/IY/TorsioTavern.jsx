import React from 'react';

export const iconData = {
  "id": "TorsioTavern",
  "name": "TorsioTavern",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.78 9.96 L 11.78 9.96"
      }
    ],
    [
      "path",
      {
        "d": "M 11.66 7.33 L 13.66 10.79"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 9.37 L 13.88 12.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 14.04 L 12.22 14.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.34 16.67 L 10.34 13.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 14.63 L 10.12 11.17"
      }
    ]
  ]
};

export const TorsioTavern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.78 9.96 L 11.78 9.96" />
      <path d="M 11.66 7.33 L 13.66 10.79" />
      <path d="M 15.88 9.37 L 13.88 12.83" />
      <path d="M 16.22 14.04 L 12.22 14.04" />
      <path d="M 12.34 16.67 L 10.34 13.21" />
      <path d="M 8.12 14.63 L 10.12 11.17" />
      {children}
    </svg>
  );
});

export default TorsioTavern;
