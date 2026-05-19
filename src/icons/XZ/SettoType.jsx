import React from 'react';

export const iconData = {
  "id": "SettoType",
  "name": "SettoType",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.61 1.17 L 15.06 9.27 L 22.83 12.61 L 14.73 15.06 L 11.39 22.83 L 8.94 14.73 L 1.17 11.39 L 9.27 8.94 Z"
      }
    ]
  ]
};

export const SettoType = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.61 1.17 L 15.06 9.27 L 22.83 12.61 L 14.73 15.06 L 11.39 22.83 L 8.94 14.73 L 1.17 11.39 L 9.27 8.94 Z" />
      {children}
    </svg>
  );
});

export default SettoType;
