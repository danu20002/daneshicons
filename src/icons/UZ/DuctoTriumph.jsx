import React from 'react';

export const iconData = {
  "id": "DuctoTriumph",
  "name": "DuctoTriumph",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 2.87 L 19.96 6.94 L 19.27 18.01 L 8.53 20.77 L 2.59 11.41 Z"
      }
    ]
  ]
};

export const DuctoTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 2.87 L 19.96 6.94 L 19.27 18.01 L 8.53 20.77 L 2.59 11.41 Z" />
      {children}
    </svg>
  );
});

export default DuctoTriumph;
