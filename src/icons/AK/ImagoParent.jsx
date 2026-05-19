import React from 'react';

export const iconData = {
  "id": "ImagoParent",
  "name": "ImagoParent",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 5.95 L 20.94 5.95 L 20.94 18.05 L 3.06 18.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.06 5.95 L 6.19 2.82 L 24.08 2.82 L 20.94 5.95"
      }
    ],
    [
      "path",
      {
        "d": "M 20.94 5.95 L 24.08 2.82 L 24.08 14.91 L 20.94 18.05"
      }
    ]
  ]
};

export const ImagoParent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 5.95 L 20.94 5.95 L 20.94 18.05 L 3.06 18.05 Z" />
      <path d="M 3.06 5.95 L 6.19 2.82 L 24.08 2.82 L 20.94 5.95" />
      <path d="M 20.94 5.95 L 24.08 2.82 L 24.08 14.91 L 20.94 18.05" />
      {children}
    </svg>
  );
});

export default ImagoParent;
