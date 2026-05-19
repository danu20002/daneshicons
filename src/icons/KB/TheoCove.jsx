import React from 'react';

export const iconData = {
  "id": "TheoCove",
  "name": "TheoCove",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 17.12 L 3.45 9.48 L 8.63 3.74 L 16.36 4.22 L 20.80 10.56 L 18.62 17.98 L 11.45 20.90 Z"
      }
    ]
  ]
};

export const TheoCove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 17.12 L 3.45 9.48 L 8.63 3.74 L 16.36 4.22 L 20.80 10.56 L 18.62 17.98 L 11.45 20.90 Z" />
      {children}
    </svg>
  );
});

export default TheoCove;
