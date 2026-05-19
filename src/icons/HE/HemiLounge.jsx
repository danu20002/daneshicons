import React from 'react';

export const iconData = {
  "id": "HemiLounge",
  "name": "HemiLounge",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 9.82 L 15.47 12.52 L 19.76 16.68 L 14.08 14.82 L 14.18 20.79 L 11.48 15.47 L 7.32 19.76 L 9.18 14.08 L 3.21 14.18 L 8.53 11.48 L 4.24 7.32 L 9.92 9.18 L 9.82 3.21 L 12.52 8.53 L 16.68 4.24 L 14.82 9.92 Z"
      }
    ]
  ]
};

export const HemiLounge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 9.82 L 15.47 12.52 L 19.76 16.68 L 14.08 14.82 L 14.18 20.79 L 11.48 15.47 L 7.32 19.76 L 9.18 14.08 L 3.21 14.18 L 8.53 11.48 L 4.24 7.32 L 9.92 9.18 L 9.82 3.21 L 12.52 8.53 L 16.68 4.24 L 14.82 9.92 Z" />
      {children}
    </svg>
  );
});

export default HemiLounge;
