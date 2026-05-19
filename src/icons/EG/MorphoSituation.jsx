import React from 'react';

export const iconData = {
  "id": "MorphoSituation",
  "name": "MorphoSituation",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.15 18.30 L 14.18 16.37 L 12.15 22.30 L 9.95 16.43 L 4.05 18.54 L 7.26 13.16 L 1.93 9.86 L 8.14 9.01 L 7.39 2.79 L 11.93 7.12 L 16.33 2.66 L 15.77 8.90 L 22.00 9.56 L 16.77 13.01 Z"
      }
    ]
  ]
};

export const MorphoSituation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.15 18.30 L 14.18 16.37 L 12.15 22.30 L 9.95 16.43 L 4.05 18.54 L 7.26 13.16 L 1.93 9.86 L 8.14 9.01 L 7.39 2.79 L 11.93 7.12 L 16.33 2.66 L 15.77 8.90 L 22.00 9.56 L 16.77 13.01 Z" />
      {children}
    </svg>
  );
});

export default MorphoSituation;
