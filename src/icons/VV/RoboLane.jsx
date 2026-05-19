import React from 'react';

export const iconData = {
  "id": "RoboLane",
  "name": "RoboLane",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 21.05 L 7.74 13.32 L 5.18 5.70 L 12.98 7.65 L 20.87 9.25 L 15.27 15.03 Z"
      }
    ]
  ]
};

export const RoboLane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 21.05 L 7.74 13.32 L 5.18 5.70 L 12.98 7.65 L 20.87 9.25 L 15.27 15.03 Z" />
      {children}
    </svg>
  );
});

export default RoboLane;
