import React from 'react';

export const iconData = {
  "id": "PiezoOffend",
  "name": "PiezoOffend",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.62 5.94 L 13.38 4.01 L 19.11 8.10 L 19.48 15.12 L 14.22 19.80 L 7.29 18.60 L 3.91 12.43 Z"
      }
    ]
  ]
};

export const PiezoOffend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.62 5.94 L 13.38 4.01 L 19.11 8.10 L 19.48 15.12 L 14.22 19.80 L 7.29 18.60 L 3.91 12.43 Z" />
      {children}
    </svg>
  );
});

export default PiezoOffend;
