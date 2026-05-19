import React from 'react';

export const iconData = {
  "id": "SuperCrop",
  "name": "SuperCrop",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 6.57 L 20.77 6.57 L 20.77 17.43 L 3.23 17.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 6.57 L 7.44 2.36 L 24.97 2.36 L 20.77 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.77 6.57 L 24.97 2.36 L 24.97 13.23 L 20.77 17.43"
      }
    ]
  ]
};

export const SuperCrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 6.57 L 20.77 6.57 L 20.77 17.43 L 3.23 17.43 Z" />
      <path d="M 3.23 6.57 L 7.44 2.36 L 24.97 2.36 L 20.77 6.57" />
      <path d="M 20.77 6.57 L 24.97 2.36 L 24.97 13.23 L 20.77 17.43" />
      {children}
    </svg>
  );
});

export default SuperCrop;
