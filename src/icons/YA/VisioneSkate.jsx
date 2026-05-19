import React from 'react';

export const iconData = {
  "id": "VisioneSkate",
  "name": "VisioneSkate",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.81 20.57 L 9.51 14.78 L 3.17 10.15 L 10.84 8.45 L 18.02 5.28 L 15.66 12.77 Z"
      }
    ]
  ]
};

export const VisioneSkate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.81 20.57 L 9.51 14.78 L 3.17 10.15 L 10.84 8.45 L 18.02 5.28 L 15.66 12.77 Z" />
      {children}
    </svg>
  );
});

export default VisioneSkate;
