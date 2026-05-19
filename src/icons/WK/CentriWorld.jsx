import React from 'react';

export const iconData = {
  "id": "CentriWorld",
  "name": "CentriWorld",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.67 7.96 L 18.21 18.05 L 8.16 19.78 L 3.42 10.75 L 10.53 3.45 Z"
      }
    ]
  ]
};

export const CentriWorld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.67 7.96 L 18.21 18.05 L 8.16 19.78 L 3.42 10.75 L 10.53 3.45 Z" />
      {children}
    </svg>
  );
});

export default CentriWorld;
