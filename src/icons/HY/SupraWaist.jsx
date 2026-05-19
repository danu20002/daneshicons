import React from 'react';

export const iconData = {
  "id": "SupraWaist",
  "name": "SupraWaist",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.54 14.11 L 8.26 9.63 L 9.89 2.54 L 14.37 8.26 L 21.46 9.89 L 15.74 14.37 L 14.11 21.46 L 9.63 15.74 Z"
      }
    ]
  ]
};

export const SupraWaist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.54 14.11 L 8.26 9.63 L 9.89 2.54 L 14.37 8.26 L 21.46 9.89 L 15.74 14.37 L 14.11 21.46 L 9.63 15.74 Z" />
      {children}
    </svg>
  );
});

export default SupraWaist;
