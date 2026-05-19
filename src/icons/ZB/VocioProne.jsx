import React from 'react';

export const iconData = {
  "id": "VocioProne",
  "name": "VocioProne",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.27 14.46 L 9.99 12.38 L 19.37 17.20 L 14.25 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.23 8.80 C 15.11 9.92, 19.85 5.53, 20.62 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 9.41 C 15.05 2.76, 9.25 18.56, 13.83 14.21"
      }
    ]
  ]
};

export const VocioProne = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.27 14.46 L 9.99 12.38 L 19.37 17.20 L 14.25 20.07" />
      <path d="M 13.23 8.80 C 15.11 9.92, 19.85 5.53, 20.62 3.40" />
      <path d="M 5.12 9.41 C 15.05 2.76, 9.25 18.56, 13.83 14.21" />
      {children}
    </svg>
  );
});

export default VocioProne;
