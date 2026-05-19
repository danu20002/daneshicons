import React from 'react';

export const iconData = {
  "id": "ScudoCricket",
  "name": "ScudoCricket",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.06 8.15 L 18.15 18.48 L 7.74 19.85 L 3.22 10.38 L 10.83 3.14 Z"
      }
    ]
  ]
};

export const ScudoCricket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.06 8.15 L 18.15 18.48 L 7.74 19.85 L 3.22 10.38 L 10.83 3.14 Z" />
      {children}
    </svg>
  );
});

export default ScudoCricket;
