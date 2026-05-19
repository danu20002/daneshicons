import React from 'react';

export const iconData = {
  "id": "VividoMonth",
  "name": "VividoMonth",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.65 14.23 18.53 8.63 Q 19.22 13.10 19.91 17.57 Q 15.87 15.58 11.84 13.60 Q 11.29 16.85 10.75 20.10 Q 10.76 19.97 10.77 19.84 Z"
      }
    ]
  ]
};

export const VividoMonth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.65 14.23 18.53 8.63 Q 19.22 13.10 19.91 17.57 Q 15.87 15.58 11.84 13.60 Q 11.29 16.85 10.75 20.10 Q 10.76 19.97 10.77 19.84 Z" />
      {children}
    </svg>
  );
});

export default VividoMonth;
