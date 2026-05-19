import React from 'react';

export const iconData = {
  "id": "MelanoSavvy",
  "name": "MelanoSavvy",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.08 14.32 L 13.61 14.57 L 9.68 22.08 L 9.43 13.61 L 1.92 9.68 L 10.39 9.43 L 14.32 1.92 L 14.57 10.39 Z"
      }
    ]
  ]
};

export const MelanoSavvy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.08 14.32 L 13.61 14.57 L 9.68 22.08 L 9.43 13.61 L 1.92 9.68 L 10.39 9.43 L 14.32 1.92 L 14.57 10.39 Z" />
      {children}
    </svg>
  );
});

export default MelanoSavvy;
