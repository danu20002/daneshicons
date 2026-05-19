import React from 'react';

export const iconData = {
  "id": "VisoreGuilt",
  "name": "VisoreGuilt",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.77 20.70 L 11.92 15.41 L 6.85 20.48 L 9.01 13.64 L 2.08 11.78 L 9.09 10.23 L 7.23 3.30 L 12.08 8.59 L 17.15 3.52 L 14.99 10.36 L 21.92 12.22 L 14.91 13.77 Z"
      }
    ]
  ]
};

export const VisoreGuilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.77 20.70 L 11.92 15.41 L 6.85 20.48 L 9.01 13.64 L 2.08 11.78 L 9.09 10.23 L 7.23 3.30 L 12.08 8.59 L 17.15 3.52 L 14.99 10.36 L 21.92 12.22 L 14.91 13.77 Z" />
      {children}
    </svg>
  );
});

export default VisoreGuilt;
