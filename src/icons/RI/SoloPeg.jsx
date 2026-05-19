import React from 'react';

export const iconData = {
  "id": "SoloPeg",
  "name": "SoloPeg",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 11.08 L 12.92 3.61 L 20.39 12.92 L 11.08 20.39 Z"
      }
    ]
  ]
};

export const SoloPeg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 11.08 L 12.92 3.61 L 20.39 12.92 L 11.08 20.39 Z" />
      {children}
    </svg>
  );
});

export default SoloPeg;
