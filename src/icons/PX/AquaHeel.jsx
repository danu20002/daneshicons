import React from 'react';

export const iconData = {
  "id": "AquaHeel",
  "name": "AquaHeel",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.63 15.63 L 13.17 21.29 L 4.54 17.66 L 3.37 8.37 L 10.83 2.71 L 19.46 6.34 Z"
      }
    ]
  ]
};

export const AquaHeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.63 15.63 L 13.17 21.29 L 4.54 17.66 L 3.37 8.37 L 10.83 2.71 L 19.46 6.34 Z" />
      {children}
    </svg>
  );
});

export default AquaHeel;
