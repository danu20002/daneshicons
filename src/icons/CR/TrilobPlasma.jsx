import React from 'react';

export const iconData = {
  "id": "TrilobPlasma",
  "name": "TrilobPlasma",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.36 20.27 L 3.73 7.36 L 16.64 3.73 L 20.27 16.64 Z"
      }
    ]
  ]
};

export const TrilobPlasma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.36 20.27 L 3.73 7.36 L 16.64 3.73 L 20.27 16.64 Z" />
      {children}
    </svg>
  );
});

export default TrilobPlasma;
