import React from 'react';

export const iconData = {
  "id": "VisionePlan",
  "name": "VisionePlan",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.94 13.04 L 15.07 19.40 L 7.12 18.36 L 4.06 10.96 L 8.93 4.60 L 16.88 5.64 Z"
      }
    ]
  ]
};

export const VisionePlan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.94 13.04 L 15.07 19.40 L 7.12 18.36 L 4.06 10.96 L 8.93 4.60 L 16.88 5.64 Z" />
      {children}
    </svg>
  );
});

export default VisionePlan;
