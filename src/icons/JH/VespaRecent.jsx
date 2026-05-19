import React from 'react';

export const iconData = {
  "id": "VespaRecent",
  "name": "VespaRecent",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.14 16.19 L 13.18 20.20 L 6.32 18.03 L 3.74 11.32 L 7.38 5.12 L 14.50 4.10 L 19.73 9.03 Z"
      }
    ]
  ]
};

export const VespaRecent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.14 16.19 L 13.18 20.20 L 6.32 18.03 L 3.74 11.32 L 7.38 5.12 L 14.50 4.10 L 19.73 9.03 Z" />
      {children}
    </svg>
  );
});

export default VespaRecent;
