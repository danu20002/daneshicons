import React from 'react';

export const iconData = {
  "id": "ZampognaLayout",
  "name": "ZampognaLayout",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.09 4.13 L 15.51 4.37 L 19.87 9.09 L 19.63 15.51 L 14.91 19.87 L 8.49 19.63 L 4.13 14.91 L 4.37 8.49 Z"
      }
    ]
  ]
};

export const ZampognaLayout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.09 4.13 L 15.51 4.37 L 19.87 9.09 L 19.63 15.51 L 14.91 19.87 L 8.49 19.63 L 4.13 14.91 L 4.37 8.49 Z" />
      {children}
    </svg>
  );
});

export default ZampognaLayout;
