import React from 'react';

export const iconData = {
  "id": "UbertoDebug",
  "name": "UbertoDebug",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.91 2.46 L 19.80 17.56 L 3.29 15.98 Z"
      }
    ]
  ]
};

export const UbertoDebug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.91 2.46 L 19.80 17.56 L 3.29 15.98 Z" />
      {children}
    </svg>
  );
});

export default UbertoDebug;
