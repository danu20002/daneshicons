import React from 'react';

export const iconData = {
  "id": "VirileGlue",
  "name": "VirileGlue",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.83 20.54 L 2.59 10.67 L 10.36 2.64 L 20.40 7.54 L 18.83 18.61 Z"
      }
    ]
  ]
};

export const VirileGlue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.83 20.54 L 2.59 10.67 L 10.36 2.64 L 20.40 7.54 L 18.83 18.61 Z" />
      {children}
    </svg>
  );
});

export default VirileGlue;
