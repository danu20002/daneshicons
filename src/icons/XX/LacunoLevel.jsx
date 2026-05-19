import React from 'react';

export const iconData = {
  "id": "LacunoLevel",
  "name": "LacunoLevel",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.33 L 6.65 5.82 L 13.50 3.96 L 19.22 8.16 L 19.50 15.25 L 14.14 19.89 L 7.17 18.59 Z"
      }
    ]
  ]
};

export const LacunoLevel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.33 L 6.65 5.82 L 13.50 3.96 L 19.22 8.16 L 19.50 15.25 L 14.14 19.89 L 7.17 18.59 Z" />
      {children}
    </svg>
  );
});

export default LacunoLevel;
