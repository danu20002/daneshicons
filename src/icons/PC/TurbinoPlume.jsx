import React from 'react';

export const iconData = {
  "id": "TurbinoPlume",
  "name": "TurbinoPlume",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.48 15.23 L 8.77 20.48 L 3.52 8.77 L 15.23 3.52 Z"
      }
    ]
  ]
};

export const TurbinoPlume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.48 15.23 L 8.77 20.48 L 3.52 8.77 L 15.23 3.52 Z" />
      {children}
    </svg>
  );
});

export default TurbinoPlume;
