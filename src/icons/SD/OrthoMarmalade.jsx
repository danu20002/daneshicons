import React from 'react';

export const iconData = {
  "id": "OrthoMarmalade",
  "name": "OrthoMarmalade",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.56 17.48 L 15.05 16.95 L 13.05 22.11 L 10.03 17.47 L 4.75 19.12 L 6.50 13.87 L 1.91 10.77 L 7.11 8.86 L 6.67 3.35 L 11.40 6.22 L 15.44 2.44 L 16.15 7.93 L 21.62 8.73 L 17.77 12.70 Z"
      }
    ]
  ]
};

export const OrthoMarmalade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.56 17.48 L 15.05 16.95 L 13.05 22.11 L 10.03 17.47 L 4.75 19.12 L 6.50 13.87 L 1.91 10.77 L 7.11 8.86 L 6.67 3.35 L 11.40 6.22 L 15.44 2.44 L 16.15 7.93 L 21.62 8.73 L 17.77 12.70 Z" />
      {children}
    </svg>
  );
});

export default OrthoMarmalade;
