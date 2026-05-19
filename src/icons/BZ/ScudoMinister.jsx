import React from 'react';

export const iconData = {
  "id": "ScudoMinister",
  "name": "ScudoMinister",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.87 16.76 L 14.19 20.93 L 7.24 19.87 L 3.07 14.19 L 4.13 7.24 L 9.81 3.07 L 16.76 4.13 L 20.93 9.81 Z"
      }
    ]
  ]
};

export const ScudoMinister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.87 16.76 L 14.19 20.93 L 7.24 19.87 L 3.07 14.19 L 4.13 7.24 L 9.81 3.07 L 16.76 4.13 L 20.93 9.81 Z" />
      {children}
    </svg>
  );
});

export default ScudoMinister;
