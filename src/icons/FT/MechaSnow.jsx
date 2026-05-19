import React from 'react';

export const iconData = {
  "id": "MechaSnow",
  "name": "MechaSnow",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.79 12.84 L 13.74 15.64 L 5.88 20.93 L 7.97 11.69 L 7.33 2.23 L 14.28 8.67 Z"
      }
    ]
  ]
};

export const MechaSnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.79 12.84 L 13.74 15.64 L 5.88 20.93 L 7.97 11.69 L 7.33 2.23 L 14.28 8.67 Z" />
      {children}
    </svg>
  );
});

export default MechaSnow;
