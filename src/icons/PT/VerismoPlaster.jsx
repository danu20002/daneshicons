import React from 'react';

export const iconData = {
  "id": "VerismoPlaster",
  "name": "VerismoPlaster",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 5.55 L 19.41 5.55 L 19.41 18.45 L 4.59 18.45 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 5.55 L 7.90 2.25 L 22.71 2.25 L 19.41 5.55"
      }
    ],
    [
      "path",
      {
        "d": "M 19.41 5.55 L 22.71 2.25 L 22.71 15.15 L 19.41 18.45"
      }
    ]
  ]
};

export const VerismoPlaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 5.55 L 19.41 5.55 L 19.41 18.45 L 4.59 18.45 Z" />
      <path d="M 4.59 5.55 L 7.90 2.25 L 22.71 2.25 L 19.41 5.55" />
      <path d="M 19.41 5.55 L 22.71 2.25 L 22.71 15.15 L 19.41 18.45" />
      {children}
    </svg>
  );
});

export default VerismoPlaster;
