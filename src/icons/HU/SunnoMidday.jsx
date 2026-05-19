import React from 'react';

export const iconData = {
  "id": "SunnoMidday",
  "name": "SunnoMidday",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.61 17.74 L 6.26 17.61 L 6.39 6.26 L 17.74 6.39 Z"
      }
    ]
  ]
};

export const SunnoMidday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.61 17.74 L 6.26 17.61 L 6.39 6.26 L 17.74 6.39 Z" />
      {children}
    </svg>
  );
});

export default SunnoMidday;
