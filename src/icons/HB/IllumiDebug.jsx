import React from 'react';

export const iconData = {
  "id": "IllumiDebug",
  "name": "IllumiDebug",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.73 3.02 L 20.99 8.29 L 20.98 15.73 L 15.71 20.99 L 8.27 20.98 L 3.01 15.71 L 3.02 8.27 L 8.29 3.01 Z"
      }
    ]
  ]
};

export const IllumiDebug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.73 3.02 L 20.99 8.29 L 20.98 15.73 L 15.71 20.99 L 8.27 20.98 L 3.01 15.71 L 3.02 8.27 L 8.29 3.01 Z" />
      {children}
    </svg>
  );
});

export default IllumiDebug;
