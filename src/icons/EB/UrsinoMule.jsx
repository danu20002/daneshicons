import React from 'react';

export const iconData = {
  "id": "UrsinoMule",
  "name": "UrsinoMule",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 5.96 L 20.66 5.96 L 20.66 18.04 L 3.34 18.04 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 5.96 L 7.43 1.87 L 24.74 1.87 L 20.66 5.96"
      }
    ],
    [
      "path",
      {
        "d": "M 20.66 5.96 L 24.74 1.87 L 24.74 13.96 L 20.66 18.04"
      }
    ]
  ]
};

export const UrsinoMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 5.96 L 20.66 5.96 L 20.66 18.04 L 3.34 18.04 Z" />
      <path d="M 3.34 5.96 L 7.43 1.87 L 24.74 1.87 L 20.66 5.96" />
      <path d="M 20.66 5.96 L 24.74 1.87 L 24.74 13.96 L 20.66 18.04" />
      {children}
    </svg>
  );
});

export default UrsinoMule;
