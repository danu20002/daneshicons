import React from 'react';

export const iconData = {
  "id": "LumenLeap",
  "name": "LumenLeap",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.24 5.05 L 20.14 12.19 L 15.90 19.14 L 7.76 18.95 L 3.86 11.81 L 8.10 4.86 Z"
      }
    ]
  ]
};

export const LumenLeap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.24 5.05 L 20.14 12.19 L 15.90 19.14 L 7.76 18.95 L 3.86 11.81 L 8.10 4.86 Z" />
      {children}
    </svg>
  );
});

export default LumenLeap;
