import React from 'react';

export const iconData = {
  "id": "FastoIgnore",
  "name": "FastoIgnore",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 6.58 L 12.24 8.31 L 20.76 7.67 L 15.08 14.05 L 11.37 21.75 L 8.68 13.64 Z"
      }
    ]
  ]
};

export const FastoIgnore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 6.58 L 12.24 8.31 L 20.76 7.67 L 15.08 14.05 L 11.37 21.75 L 8.68 13.64 Z" />
      {children}
    </svg>
  );
});

export default FastoIgnore;
