import React from 'react';

export const iconData = {
  "id": "ScapoGirder",
  "name": "ScapoGirder",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.49 12.65 L 9.10 9.43 L 11.35 1.49 L 14.57 9.10 L 22.51 11.35 L 14.90 14.57 L 12.65 22.51 L 9.43 14.90 Z"
      }
    ]
  ]
};

export const ScapoGirder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.49 12.65 L 9.10 9.43 L 11.35 1.49 L 14.57 9.10 L 22.51 11.35 L 14.90 14.57 L 12.65 22.51 L 9.43 14.90 Z" />
      {children}
    </svg>
  );
});

export default ScapoGirder;
