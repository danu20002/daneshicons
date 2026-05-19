import React from 'react';

export const iconData = {
  "id": "PhonoPass",
  "name": "PhonoPass",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.99 21.20 L 3.87 16.74 L 4.98 5.73 L 15.79 3.39 L 21.36 12.95 Z"
      }
    ]
  ]
};

export const PhonoPass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.99 21.20 L 3.87 16.74 L 4.98 5.73 L 15.79 3.39 L 21.36 12.95 Z" />
      {children}
    </svg>
  );
});

export default PhonoPass;
