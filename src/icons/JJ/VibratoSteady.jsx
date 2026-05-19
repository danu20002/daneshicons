import React from 'react';

export const iconData = {
  "id": "VibratoSteady",
  "name": "VibratoSteady",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.43 11.45 L 17.28 14.21 L 18.93 19.82 L 13.56 17.51 L 10.21 22.29 L 8.67 16.66 L 2.84 17.02 L 6.28 12.30 L 2.36 7.96 L 8.20 7.72 L 9.15 1.95 L 12.98 6.36 L 18.08 3.50 L 17.02 9.25 Z"
      }
    ]
  ]
};

export const VibratoSteady = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.43 11.45 L 17.28 14.21 L 18.93 19.82 L 13.56 17.51 L 10.21 22.29 L 8.67 16.66 L 2.84 17.02 L 6.28 12.30 L 2.36 7.96 L 8.20 7.72 L 9.15 1.95 L 12.98 6.36 L 18.08 3.50 L 17.02 9.25 Z" />
      {children}
    </svg>
  );
});

export default VibratoSteady;
