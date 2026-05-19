import React from 'react';

export const iconData = {
  "id": "MagnetStool",
  "name": "MagnetStool",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.48 15.16 L 21.13 9.73"
      }
    ],
    [
      "path",
      {
        "d": "M 18.32 6.67 L 19.80 20.95"
      }
    ]
  ]
};

export const MagnetStool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.48 15.16 L 21.13 9.73" />
      <path d="M 18.32 6.67 L 19.80 20.95" />
      {children}
    </svg>
  );
});

export default MagnetStool;
