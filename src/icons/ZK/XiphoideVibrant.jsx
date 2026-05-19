import React from 'react';

export const iconData = {
  "id": "XiphoideVibrant",
  "name": "XiphoideVibrant",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 8.25 L 8.75 3.46 L 15.75 3.66 L 20.54 8.75 L 20.34 15.75 L 15.25 20.54 L 8.25 20.34 L 3.46 15.25 Z"
      }
    ]
  ]
};

export const XiphoideVibrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 8.25 L 8.75 3.46 L 15.75 3.66 L 20.54 8.75 L 20.34 15.75 L 15.25 20.54 L 8.25 20.34 L 3.46 15.25 Z" />
      {children}
    </svg>
  );
});

export default XiphoideVibrant;
