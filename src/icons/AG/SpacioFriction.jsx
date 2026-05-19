import React from 'react';

export const iconData = {
  "id": "SpacioFriction",
  "name": "SpacioFriction",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 12.52 3.20 8.09 Q 7.30 8.14 11.39 8.20 Q 13.35 8.70 15.32 9.20 Q 15.14 9.94 14.96 10.68 Q 16.66 13.18 18.36 15.69 Q 17.05 16.40 15.74 17.12 Q 14.11 18.63 12.49 20.14 Q 8.96 18.54 5.44 16.94 Z"
      }
    ]
  ]
};

export const SpacioFriction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 12.52 3.20 8.09 Q 7.30 8.14 11.39 8.20 Q 13.35 8.70 15.32 9.20 Q 15.14 9.94 14.96 10.68 Q 16.66 13.18 18.36 15.69 Q 17.05 16.40 15.74 17.12 Q 14.11 18.63 12.49 20.14 Q 8.96 18.54 5.44 16.94 Z" />
      {children}
    </svg>
  );
});

export default SpacioFriction;
