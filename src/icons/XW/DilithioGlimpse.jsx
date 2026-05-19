import React from 'react';

export const iconData = {
  "id": "DilithioGlimpse",
  "name": "DilithioGlimpse",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 10.50 L 9.25 19.76 L 6.65 5.74 Z"
      }
    ]
  ]
};

export const DilithioGlimpse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 10.50 L 9.25 19.76 L 6.65 5.74 Z" />
      {children}
    </svg>
  );
});

export default DilithioGlimpse;
