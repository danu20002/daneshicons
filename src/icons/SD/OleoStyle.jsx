import React from 'react';

export const iconData = {
  "id": "OleoStyle",
  "name": "OleoStyle",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 2.41 L 14.97 10.25 L 22.41 12.99 L 14.58 14.28 L 14.28 22.20 L 10.63 15.16 L 3.00 17.32 L 8.57 11.67 L 4.16 5.08 L 11.25 8.64 Z"
      }
    ]
  ]
};

export const OleoStyle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 2.41 L 14.97 10.25 L 22.41 12.99 L 14.58 14.28 L 14.28 22.20 L 10.63 15.16 L 3.00 17.32 L 8.57 11.67 L 4.16 5.08 L 11.25 8.64 Z" />
      {children}
    </svg>
  );
});

export default OleoStyle;
