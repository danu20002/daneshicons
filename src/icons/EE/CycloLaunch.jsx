import React from 'react';

export const iconData = {
  "id": "CycloLaunch",
  "name": "CycloLaunch",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.83 18.28 L 9.47 20.19 L 3.64 13.91 L 6.17 5.72 L 14.53 3.81 L 20.36 10.09 Z"
      }
    ]
  ]
};

export const CycloLaunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.83 18.28 L 9.47 20.19 L 3.64 13.91 L 6.17 5.72 L 14.53 3.81 L 20.36 10.09 Z" />
      {children}
    </svg>
  );
});

export default CycloLaunch;
