import React from 'react';

export const iconData = {
  "id": "DiscoStill",
  "name": "DiscoStill",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 14.81 L 5.17 18.21 L 10.04 2.98 Z"
      }
    ]
  ]
};

export const DiscoStill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 14.81 L 5.17 18.21 L 10.04 2.98 Z" />
      {children}
    </svg>
  );
});

export default DiscoStill;
