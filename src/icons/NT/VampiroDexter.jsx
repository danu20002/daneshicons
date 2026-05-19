import React from 'react';

export const iconData = {
  "id": "VampiroDexter",
  "name": "VampiroDexter",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.48 2.98 L 15.69 10.45 L 22.28 14.42 L 14.61 15.03 L 12.87 22.52 L 9.92 15.42 L 2.27 16.08 L 8.11 11.08 L 5.11 4.00 L 11.67 8.01 Z"
      }
    ]
  ]
};

export const VampiroDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.48 2.98 L 15.69 10.45 L 22.28 14.42 L 14.61 15.03 L 12.87 22.52 L 9.92 15.42 L 2.27 16.08 L 8.11 11.08 L 5.11 4.00 L 11.67 8.01 Z" />
      {children}
    </svg>
  );
});

export default VampiroDexter;
