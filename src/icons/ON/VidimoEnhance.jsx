import React from 'react';

export const iconData = {
  "id": "VidimoEnhance",
  "name": "VidimoEnhance",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 10.87 L 8.97 9.73 L 8.27 3.29 L 12.45 8.24 L 17.68 4.41 L 15.48 10.51 L 21.41 13.13 L 15.03 14.27 L 15.73 20.71 L 11.55 15.76 L 6.32 19.59 L 8.52 13.49 Z"
      }
    ]
  ]
};

export const VidimoEnhance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 10.87 L 8.97 9.73 L 8.27 3.29 L 12.45 8.24 L 17.68 4.41 L 15.48 10.51 L 21.41 13.13 L 15.03 14.27 L 15.73 20.71 L 11.55 15.76 L 6.32 19.59 L 8.52 13.49 Z" />
      {children}
    </svg>
  );
});

export default VidimoEnhance;
