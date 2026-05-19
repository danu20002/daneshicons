import React from 'react';

export const iconData = {
  "id": "NigroViper",
  "name": "NigroViper",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.13 2.85 L 21.05 10.25 L 16.46 20.06 L 5.71 18.74 L 3.65 8.10 Z"
      }
    ]
  ]
};

export const NigroViper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.13 2.85 L 21.05 10.25 L 16.46 20.06 L 5.71 18.74 L 3.65 8.10 Z" />
      {children}
    </svg>
  );
});

export default NigroViper;
