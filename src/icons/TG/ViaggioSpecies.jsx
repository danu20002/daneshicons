import React from 'react';

export const iconData = {
  "id": "ViaggioSpecies",
  "name": "ViaggioSpecies",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 10.12 4.69 6.33 Q 4.26 5.92 3.83 5.50 Q 7.21 6.81 10.58 8.13 Q 12.87 9.47 15.16 10.82 Q 12.88 14.85 10.60 18.88 Q 10.56 16.65 10.52 14.41 Q 7.50 17.11 4.47 19.80 Q 4.31 16.86 4.16 13.91 Z"
      }
    ]
  ]
};

export const ViaggioSpecies = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 10.12 4.69 6.33 Q 4.26 5.92 3.83 5.50 Q 7.21 6.81 10.58 8.13 Q 12.87 9.47 15.16 10.82 Q 12.88 14.85 10.60 18.88 Q 10.56 16.65 10.52 14.41 Q 7.50 17.11 4.47 19.80 Q 4.31 16.86 4.16 13.91 Z" />
      {children}
    </svg>
  );
});

export default ViaggioSpecies;
