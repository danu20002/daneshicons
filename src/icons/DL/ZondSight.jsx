import React from 'react';

export const iconData = {
  "id": "ZondSight",
  "name": "ZondSight",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.98 19.35 L 3.13 12.65 L 5.96 5.47 L 13.34 3.20 L 19.71 7.56 L 20.28 15.26 L 14.61 20.51 Z"
      }
    ]
  ]
};

export const ZondSight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.98 19.35 L 3.13 12.65 L 5.96 5.47 L 13.34 3.20 L 19.71 7.56 L 20.28 15.26 L 14.61 20.51 Z" />
      {children}
    </svg>
  );
});

export default ZondSight;
