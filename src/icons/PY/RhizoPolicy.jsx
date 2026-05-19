import React from 'react';

export const iconData = {
  "id": "RhizoPolicy",
  "name": "RhizoPolicy",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.51 5.05 L 16.34 11.86 L 18.95 18.51 L 12.14 16.34 L 5.49 18.95 L 7.66 12.14 L 5.05 5.49 L 11.86 7.66 Z"
      }
    ]
  ]
};

export const RhizoPolicy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.51 5.05 L 16.34 11.86 L 18.95 18.51 L 12.14 16.34 L 5.49 18.95 L 7.66 12.14 L 5.05 5.49 L 11.86 7.66 Z" />
      {children}
    </svg>
  );
});

export default RhizoPolicy;
