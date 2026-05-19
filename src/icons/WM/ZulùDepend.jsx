import React from 'react';

export const iconData = {
  "id": "ZulùDepend",
  "name": "ZulùDepend",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.72 21.34 L 2.65 15.26 L 3.62 6.72 L 10.90 2.16 L 19.01 5.01 L 21.83 13.12 L 17.26 20.39 Z"
      }
    ]
  ]
};

export const ZulùDepend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.72 21.34 L 2.65 15.26 L 3.62 6.72 L 10.90 2.16 L 19.01 5.01 L 21.83 13.12 L 17.26 20.39 Z" />
      {children}
    </svg>
  );
});

export default ZulùDepend;
