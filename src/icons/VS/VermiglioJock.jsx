import React from 'react';

export const iconData = {
  "id": "VermiglioJock",
  "name": "VermiglioJock",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.51 5.79 L 18.21 5.51 L 18.49 18.21 L 5.79 18.49 Z"
      }
    ]
  ]
};

export const VermiglioJock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.51 5.79 L 18.21 5.51 L 18.49 18.21 L 5.79 18.49 Z" />
      {children}
    </svg>
  );
});

export default VermiglioJock;
