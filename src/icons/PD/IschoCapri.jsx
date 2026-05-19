import React from 'react';

export const iconData = {
  "id": "IschoCapri",
  "name": "IschoCapri",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.31 4.39 L 19.61 18.31 L 5.69 19.61 L 4.39 5.69 Z"
      }
    ]
  ]
};

export const IschoCapri = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.31 4.39 L 19.61 18.31 L 5.69 19.61 L 4.39 5.69 Z" />
      {children}
    </svg>
  );
});

export default IschoCapri;
