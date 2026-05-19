import React from 'react';

export const iconData = {
  "id": "TessoDrill",
  "name": "TessoDrill",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.62 3.22 L 21.78 13.68 L 13.42 21.82 L 3.10 16.39 L 5.08 4.89 Z"
      }
    ]
  ]
};

export const TessoDrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.62 3.22 L 21.78 13.68 L 13.42 21.82 L 3.10 16.39 L 5.08 4.89 Z" />
      {children}
    </svg>
  );
});

export default TessoDrill;
