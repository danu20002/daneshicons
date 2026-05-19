import React from 'react';

export const iconData = {
  "id": "VelenoGentle",
  "name": "VelenoGentle",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 6.52 L 11.87 3.05 L 18.91 6.32 L 20.75 13.86 L 16.00 20.00 L 8.24 20.12 L 3.31 14.12 Z"
      }
    ]
  ]
};

export const VelenoGentle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 6.52 L 11.87 3.05 L 18.91 6.32 L 20.75 13.86 L 16.00 20.00 L 8.24 20.12 L 3.31 14.12 Z" />
      {children}
    </svg>
  );
});

export default VelenoGentle;
