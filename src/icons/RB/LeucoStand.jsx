import React from 'react';

export const iconData = {
  "id": "LeucoStand",
  "name": "LeucoStand",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 13.41 L 13.45 21.02 L 3.87 16.17 L 5.52 5.56 L 16.13 3.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.63 14.88 L 11.00 18.25 L 5.75 12.98 L 9.14 6.36 L 16.48 7.54 Z"
      }
    ]
  ]
};

export const LeucoStand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 13.41 L 13.45 21.02 L 3.87 16.17 L 5.52 5.56 L 16.13 3.85 Z" />
      <path d="M 17.63 14.88 L 11.00 18.25 L 5.75 12.98 L 9.14 6.36 L 16.48 7.54 Z" />
      {children}
    </svg>
  );
});

export default LeucoStand;
