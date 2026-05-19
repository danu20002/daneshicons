import React from 'react';

export const iconData = {
  "id": "SextoPatent",
  "name": "SextoPatent",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.94 20.45 L 7.70 14.94 L 2.65 12.71 L 7.30 9.74 L 6.71 4.26 L 11.60 6.80 L 16.06 3.55 L 16.30 9.06 L 21.35 11.29 L 16.70 14.26 L 17.29 19.74 L 12.40 17.20 Z"
      }
    ]
  ]
};

export const SextoPatent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.94 20.45 L 7.70 14.94 L 2.65 12.71 L 7.30 9.74 L 6.71 4.26 L 11.60 6.80 L 16.06 3.55 L 16.30 9.06 L 21.35 11.29 L 16.70 14.26 L 17.29 19.74 L 12.40 17.20 Z" />
      {children}
    </svg>
  );
});

export default SextoPatent;
