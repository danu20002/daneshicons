import React from 'react';

export const iconData = {
  "id": "TroncoVenue",
  "name": "TroncoVenue",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 6.13 L 21.00 6.13 L 21.00 17.87 L 3.00 17.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 6.13 L 7.50 1.63 L 25.50 1.63 L 21.00 6.13"
      }
    ],
    [
      "path",
      {
        "d": "M 21.00 6.13 L 25.50 1.63 L 25.50 13.37 L 21.00 17.87"
      }
    ]
  ]
};

export const TroncoVenue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 6.13 L 21.00 6.13 L 21.00 17.87 L 3.00 17.87 Z" />
      <path d="M 3.00 6.13 L 7.50 1.63 L 25.50 1.63 L 21.00 6.13" />
      <path d="M 21.00 6.13 L 25.50 1.63 L 25.50 13.37 L 21.00 17.87" />
      {children}
    </svg>
  );
});

export default TroncoVenue;
