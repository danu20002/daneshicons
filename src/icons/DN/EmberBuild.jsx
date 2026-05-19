import React from 'react';

export const iconData = {
  "id": "EmberBuild",
  "name": "EmberBuild",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.51 1.71 L 13.27 7.91 L 20.70 5.50 L 16.28 11.94 L 20.87 18.27 L 13.38 16.05 L 8.78 22.37 L 8.57 14.56 L 1.14 12.14 L 8.51 9.53 Z"
      }
    ]
  ]
};

export const EmberBuild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.51 1.71 L 13.27 7.91 L 20.70 5.50 L 16.28 11.94 L 20.87 18.27 L 13.38 16.05 L 8.78 22.37 L 8.57 14.56 L 1.14 12.14 L 8.51 9.53 Z" />
      {children}
    </svg>
  );
});

export default EmberBuild;
