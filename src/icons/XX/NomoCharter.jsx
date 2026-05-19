import React from 'react';

export const iconData = {
  "id": "NomoCharter",
  "name": "NomoCharter",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.83 6.27 L 17.73 18.83 L 5.17 17.73 L 6.27 5.17 Z"
      }
    ]
  ]
};

export const NomoCharter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.83 6.27 L 17.73 18.83 L 5.17 17.73 L 6.27 5.17 Z" />
      {children}
    </svg>
  );
});

export default NomoCharter;
