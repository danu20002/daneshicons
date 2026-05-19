import React from 'react';

export const iconData = {
  "id": "TrappoQuiet",
  "name": "TrappoQuiet",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.18 4.12 L 18.62 6.88 L 18.92 16.72 L 9.65 20.04 L 3.63 12.25 Z"
      }
    ]
  ]
};

export const TrappoQuiet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.18 4.12 L 18.62 6.88 L 18.92 16.72 L 9.65 20.04 L 3.63 12.25 Z" />
      {children}
    </svg>
  );
});

export default TrappoQuiet;
