import React from 'react';

export const iconData = {
  "id": "CosmoRaw",
  "name": "CosmoRaw",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 8.41 L 12.77 2.75 L 21.04 9.87 L 16.82 19.94 L 5.94 19.04 Z"
      }
    ]
  ]
};

export const CosmoRaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 8.41 L 12.77 2.75 L 21.04 9.87 L 16.82 19.94 L 5.94 19.04 Z" />
      {children}
    </svg>
  );
});

export default CosmoRaw;
