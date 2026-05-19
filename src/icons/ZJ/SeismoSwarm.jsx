import React from 'react';

export const iconData = {
  "id": "SeismoSwarm",
  "name": "SeismoSwarm",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 16.18 L 5.54 5.63 L 16.06 3.88 L 20.97 13.36 L 13.48 20.95 Z"
      }
    ]
  ]
};

export const SeismoSwarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 16.18 L 5.54 5.63 L 16.06 3.88 L 20.97 13.36 L 13.48 20.95 Z" />
      {children}
    </svg>
  );
});

export default SeismoSwarm;
