import React from 'react';

export const iconData = {
  "id": "VimineFade",
  "name": "VimineFade",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.60 13.56 L 7.95 11.32 L 5.81 14.80 L 21.27 6.86 L 8.77 11.27 L 15.50 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.32 20.71 C 6.54 11.53, 16.10 5.49, 4.84 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 22.00 C 5.66 9.51, 2.09 6.01, 3.88 17.95"
      }
    ]
  ]
};

export const VimineFade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.60 13.56 L 7.95 11.32 L 5.81 14.80 L 21.27 6.86 L 8.77 11.27 L 15.50 21.87" />
      <path d="M 17.32 20.71 C 6.54 11.53, 16.10 5.49, 4.84 3.33" />
      <path d="M 16.24 22.00 C 5.66 9.51, 2.09 6.01, 3.88 17.95" />
      {children}
    </svg>
  );
});

export default VimineFade;
