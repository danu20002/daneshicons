import React from 'react';

export const iconData = {
  "id": "SchemaCore",
  "name": "SchemaCore",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.02 6.43 L 17.57 19.02 L 4.98 17.57 L 6.43 4.98 Z"
      }
    ]
  ]
};

export const SchemaCore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.02 6.43 L 17.57 19.02 L 4.98 17.57 L 6.43 4.98 Z" />
      {children}
    </svg>
  );
});

export default SchemaCore;
