import React from 'react';

export const iconData = {
  "id": "TelluroDebug",
  "name": "TelluroDebug",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 7.96 L 17.37 12.90 L 18.34 18.45 L 12.81 17.38 L 7.83 20.03 L 7.13 14.43 L 3.08 10.51 L 8.18 8.12 L 10.66 3.05 L 14.51 7.17 Z"
      }
    ]
  ]
};

export const TelluroDebug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 7.96 L 17.37 12.90 L 18.34 18.45 L 12.81 17.38 L 7.83 20.03 L 7.13 14.43 L 3.08 10.51 L 8.18 8.12 L 10.66 3.05 L 14.51 7.17 Z" />
      {children}
    </svg>
  );
});

export default TelluroDebug;
