import React from 'react';

export const iconData = {
  "id": "MetaJolt",
  "name": "MetaJolt",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 7.95 L 10.71 3.89 L 17.53 5.94 L 20.19 12.55 L 16.68 18.74 L 9.64 19.86 L 4.38 15.06 Z"
      }
    ]
  ]
};

export const MetaJolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 7.95 L 10.71 3.89 L 17.53 5.94 L 20.19 12.55 L 16.68 18.74 L 9.64 19.86 L 4.38 15.06 Z" />
      {children}
    </svg>
  );
});

export default MetaJolt;
