import React from 'react';

export const iconData = {
  "id": "StromboMoss",
  "name": "StromboMoss",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.19 4.04 L 19.96 16.19 L 7.81 19.96 L 4.04 7.81 Z"
      }
    ]
  ]
};

export const StromboMoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.19 4.04 L 19.96 16.19 L 7.81 19.96 L 4.04 7.81 Z" />
      {children}
    </svg>
  );
});

export default StromboMoss;
