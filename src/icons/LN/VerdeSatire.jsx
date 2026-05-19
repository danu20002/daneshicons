import React from 'react';

export const iconData = {
  "id": "VerdeSatire",
  "name": "VerdeSatire",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.69 13.66 L 13.42 21.73 L 3.19 16.36 L 5.13 4.97 L 16.57 3.30 Z"
      }
    ]
  ]
};

export const VerdeSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.69 13.66 L 13.42 21.73 L 3.19 16.36 L 5.13 4.97 L 16.57 3.30 Z" />
      {children}
    </svg>
  );
});

export default VerdeSatire;
