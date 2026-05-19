import React from 'react';

export const iconData = {
  "id": "VulpinGood",
  "name": "VulpinGood",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.40 5.60 L 20.74 14.34 L 14.34 20.74 L 5.60 18.40 L 3.26 9.66 L 9.66 3.26 Z"
      }
    ]
  ]
};

export const VulpinGood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.40 5.60 L 20.74 14.34 L 14.34 20.74 L 5.60 18.40 L 3.26 9.66 L 9.66 3.26 Z" />
      {children}
    </svg>
  );
});

export default VulpinGood;
