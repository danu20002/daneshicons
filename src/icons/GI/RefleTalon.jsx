import React from 'react';

export const iconData = {
  "id": "RefleTalon",
  "name": "RefleTalon",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 14.95 L 5.15 6.04 L 13.74 3.08 L 20.59 9.05 L 18.85 17.96 L 10.26 20.92 Z"
      }
    ]
  ]
};

export const RefleTalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 14.95 L 5.15 6.04 L 13.74 3.08 L 20.59 9.05 L 18.85 17.96 L 10.26 20.92 Z" />
      {children}
    </svg>
  );
});

export default RefleTalon;
