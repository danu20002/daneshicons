import React from 'react';

export const iconData = {
  "id": "TrilobVerify",
  "name": "TrilobVerify",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.16 13.65 L 7.73 8.86 L 10.35 1.16 L 15.14 7.73 L 22.84 10.35 L 16.27 15.14 L 13.65 22.84 L 8.86 16.27 Z"
      }
    ]
  ]
};

export const TrilobVerify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.16 13.65 L 7.73 8.86 L 10.35 1.16 L 15.14 7.73 L 22.84 10.35 L 16.27 15.14 L 13.65 22.84 L 8.86 16.27 Z" />
      {children}
    </svg>
  );
});

export default TrilobVerify;
