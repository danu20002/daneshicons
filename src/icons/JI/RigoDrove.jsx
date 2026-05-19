import React from 'react';

export const iconData = {
  "id": "RigoDrove",
  "name": "RigoDrove",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 9.54 L 19.95 16.47 L 14.46 20.78 L 7.53 19.95 L 3.22 14.46 L 4.05 7.53 L 9.54 3.22 L 16.47 4.05 Z"
      }
    ]
  ]
};

export const RigoDrove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 9.54 L 19.95 16.47 L 14.46 20.78 L 7.53 19.95 L 3.22 14.46 L 4.05 7.53 L 9.54 3.22 L 16.47 4.05 Z" />
      {children}
    </svg>
  );
});

export default RigoDrove;
