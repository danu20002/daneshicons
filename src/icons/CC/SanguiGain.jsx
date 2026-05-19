import React from 'react';

export const iconData = {
  "id": "SanguiGain",
  "name": "SanguiGain",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.86 12.07 L 10.44 9.34 L 17.01 3.19 L 15.08 11.98 L 17.13 20.74 L 10.48 14.68 Z"
      }
    ]
  ]
};

export const SanguiGain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.86 12.07 L 10.44 9.34 L 17.01 3.19 L 15.08 11.98 L 17.13 20.74 L 10.48 14.68 Z" />
      {children}
    </svg>
  );
});

export default SanguiGain;
