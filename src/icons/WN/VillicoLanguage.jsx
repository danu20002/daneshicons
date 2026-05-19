import React from 'react';

export const iconData = {
  "id": "VillicoLanguage",
  "name": "VillicoLanguage",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.25 20.66 L 10.26 15.83 L 3.34 15.25 L 8.17 10.26 L 8.75 3.34 L 13.74 8.17 L 20.66 8.75 L 15.83 13.74 Z"
      }
    ]
  ]
};

export const VillicoLanguage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.25 20.66 L 10.26 15.83 L 3.34 15.25 L 8.17 10.26 L 8.75 3.34 L 13.74 8.17 L 20.66 8.75 L 15.83 13.74 Z" />
      {children}
    </svg>
  );
});

export default VillicoLanguage;
