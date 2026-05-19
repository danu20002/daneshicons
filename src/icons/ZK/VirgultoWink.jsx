import React from 'react';

export const iconData = {
  "id": "VirgultoWink",
  "name": "VirgultoWink",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 13.72 L 5.33 6.40 L 12.22 3.29 L 18.95 6.74 L 20.44 14.15 L 15.58 19.94 L 8.02 19.75 Z"
      }
    ]
  ]
};

export const VirgultoWink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 13.72 L 5.33 6.40 L 12.22 3.29 L 18.95 6.74 L 20.44 14.15 L 15.58 19.94 L 8.02 19.75 Z" />
      {children}
    </svg>
  );
});

export default VirgultoWink;
