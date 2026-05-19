import React from 'react';

export const iconData = {
  "id": "VipereCannon",
  "name": "VipereCannon",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.04 11.71 L 15.07 20.51 L 4.85 17.55 L 4.51 6.92 L 14.52 3.31 Z"
      }
    ]
  ]
};

export const VipereCannon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.04 11.71 L 15.07 20.51 L 4.85 17.55 L 4.51 6.92 L 14.52 3.31 Z" />
      {children}
    </svg>
  );
});

export default VipereCannon;
