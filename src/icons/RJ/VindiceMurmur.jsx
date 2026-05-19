import React from 'react';

export const iconData = {
  "id": "VindiceMurmur",
  "name": "VindiceMurmur",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.66 12.70 L 14.01 20.45 L 4.58 16.52 L 5.41 6.34 L 15.35 3.98 Z"
      }
    ]
  ]
};

export const VindiceMurmur = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.66 12.70 L 14.01 20.45 L 4.58 16.52 L 5.41 6.34 L 15.35 3.98 Z" />
      {children}
    </svg>
  );
});

export default VindiceMurmur;
