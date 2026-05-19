import React from 'react';

export const iconData = {
  "id": "AutoFlow",
  "name": "AutoFlow",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 12.00 a 7.84 7.84 0 1 0 15.69 0 a 7.84 7.84 0 1 0 -15.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 12.00 L 21.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.19 17.19 L 18.61 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.34 L 12.00 21.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 17.19 L 5.39 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 12.00 L 2.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 6.81 L 5.39 5.39"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.66 L 12.00 2.66"
      }
    ],
    [
      "path",
      {
        "d": "M 17.19 6.81 L 18.61 5.39"
      }
    ]
  ]
};

export const AutoFlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 12.00 a 7.84 7.84 0 1 0 15.69 0 a 7.84 7.84 0 1 0 -15.69 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0" />
      <path d="M 19.34 12.00 L 21.34 12.00" />
      <path d="M 17.19 17.19 L 18.61 18.61" />
      <path d="M 12.00 19.34 L 12.00 21.34" />
      <path d="M 6.81 17.19 L 5.39 18.61" />
      <path d="M 4.66 12.00 L 2.66 12.00" />
      <path d="M 6.81 6.81 L 5.39 5.39" />
      <path d="M 12.00 4.66 L 12.00 2.66" />
      <path d="M 17.19 6.81 L 18.61 5.39" />
      {children}
    </svg>
  );
});

export default AutoFlow;
