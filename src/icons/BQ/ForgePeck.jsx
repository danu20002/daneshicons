import React from 'react';

export const iconData = {
  "id": "ForgePeck",
  "name": "ForgePeck",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.88 10.33 L 11.88 10.33"
      }
    ],
    [
      "path",
      {
        "d": "M 13.67 7.88 L 13.67 11.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 13.67 L 12.12 13.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 16.12 L 10.33 12.12"
      }
    ]
  ]
};

export const ForgePeck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.88 10.33 L 11.88 10.33" />
      <path d="M 13.67 7.88 L 13.67 11.88" />
      <path d="M 16.12 13.67 L 12.12 13.67" />
      <path d="M 10.33 16.12 L 10.33 12.12" />
      {children}
    </svg>
  );
});

export default ForgePeck;
