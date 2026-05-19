import React from 'react';

export const iconData = {
  "id": "JuvioVapor",
  "name": "JuvioVapor",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.66 12.00 Q 14.00 12.54 19.50 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 16.33 Q 13.46 13.46 16.33 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.33 19.50 Q 12.54 14.00 12.00 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.66 Q 11.46 14.00 7.67 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 19.50 Q 10.54 13.46 4.50 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 16.33 Q 10.00 12.54 3.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 12.00 Q 10.00 11.46 4.50 7.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 7.67 Q 10.54 10.54 7.67 4.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 4.50 Q 11.46 10.00 12.00 3.34"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.34 Q 12.54 10.00 16.33 4.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.33 4.50 Q 13.46 10.54 19.50 7.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 7.67 Q 14.00 11.46 20.66 12.00"
      }
    ]
  ]
};

export const JuvioVapor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.66 12.00 Q 14.00 12.54 19.50 16.33" />
      <path d="M 19.50 16.33 Q 13.46 13.46 16.33 19.50" />
      <path d="M 16.33 19.50 Q 12.54 14.00 12.00 20.66" />
      <path d="M 12.00 20.66 Q 11.46 14.00 7.67 19.50" />
      <path d="M 7.67 19.50 Q 10.54 13.46 4.50 16.33" />
      <path d="M 4.50 16.33 Q 10.00 12.54 3.34 12.00" />
      <path d="M 3.34 12.00 Q 10.00 11.46 4.50 7.67" />
      <path d="M 4.50 7.67 Q 10.54 10.54 7.67 4.50" />
      <path d="M 7.67 4.50 Q 11.46 10.00 12.00 3.34" />
      <path d="M 12.00 3.34 Q 12.54 10.00 16.33 4.50" />
      <path d="M 16.33 4.50 Q 13.46 10.54 19.50 7.67" />
      <path d="M 19.50 7.67 Q 14.00 11.46 20.66 12.00" />
      {children}
    </svg>
  );
});

export default JuvioVapor;
