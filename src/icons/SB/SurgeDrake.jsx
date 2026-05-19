import React from 'react';

export const iconData = {
  "id": "SurgeDrake",
  "name": "SurgeDrake",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.08 21.13 L 2.87 16.08 L 7.92 2.87 L 21.13 7.92 Z"
      }
    ]
  ]
};

export const SurgeDrake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.08 21.13 L 2.87 16.08 L 7.92 2.87 L 21.13 7.92 Z" />
      {children}
    </svg>
  );
});

export default SurgeDrake;
