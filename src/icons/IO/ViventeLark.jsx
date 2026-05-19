import React from 'react';

export const iconData = {
  "id": "ViventeLark",
  "name": "ViventeLark",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.76 4.27 L 16.31 19.99 L 2.92 11.74 Z"
      }
    ]
  ]
};

export const ViventeLark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.76 4.27 L 16.31 19.99 L 2.92 11.74 Z" />
      {children}
    </svg>
  );
});

export default ViventeLark;
