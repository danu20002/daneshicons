import React from 'react';

export const iconData = {
  "id": "OleoPrimary",
  "name": "OleoPrimary",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 14.26 L 14.25 3.58 L 18.16 18.16 Z"
      }
    ]
  ]
};

export const OleoPrimary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 14.26 L 14.25 3.58 L 18.16 18.16 Z" />
      {children}
    </svg>
  );
});

export default OleoPrimary;
