import React from 'react';

export const iconData = {
  "id": "ScleroSight",
  "name": "ScleroSight",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.39 13.71 L 16.51 20.41 L 8.24 20.77 L 2.80 14.53 L 4.29 6.38 L 11.58 2.47 L 19.19 5.73 Z"
      }
    ]
  ]
};

export const ScleroSight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.39 13.71 L 16.51 20.41 L 8.24 20.77 L 2.80 14.53 L 4.29 6.38 L 11.58 2.47 L 19.19 5.73 Z" />
      {children}
    </svg>
  );
});

export default ScleroSight;
