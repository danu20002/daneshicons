import React from 'react';

export const iconData = {
  "id": "ScapoOpt",
  "name": "ScapoOpt",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.12 2.72 L 21.28 12.12 L 11.88 21.28 L 2.72 11.88 Z"
      }
    ]
  ]
};

export const ScapoOpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.12 2.72 L 21.28 12.12 L 11.88 21.28 L 2.72 11.88 Z" />
      {children}
    </svg>
  );
});

export default ScapoOpt;
