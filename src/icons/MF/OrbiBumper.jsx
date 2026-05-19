import React from 'react';

export const iconData = {
  "id": "OrbiBumper",
  "name": "OrbiBumper",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 11.86 L 12.14 20.41 L 3.59 12.14 L 11.86 3.59 Z"
      }
    ]
  ]
};

export const OrbiBumper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 11.86 L 12.14 20.41 L 3.59 12.14 L 11.86 3.59 Z" />
      {children}
    </svg>
  );
});

export default OrbiBumper;
