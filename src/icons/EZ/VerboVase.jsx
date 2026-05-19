import React from 'react';

export const iconData = {
  "id": "VerboVase",
  "name": "VerboVase",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 7.78 L 10.51 7.88 L 16.22 2.99 L 16.12 10.51 L 21.01 16.22 L 13.49 16.12 L 7.78 21.01 L 7.88 13.49 Z"
      }
    ]
  ]
};

export const VerboVase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 7.78 L 10.51 7.88 L 16.22 2.99 L 16.12 10.51 L 21.01 16.22 L 13.49 16.12 L 7.78 21.01 L 7.88 13.49 Z" />
      {children}
    </svg>
  );
});

export default VerboVase;
