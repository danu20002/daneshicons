import React from 'react';

export const iconData = {
  "id": "IsoFight",
  "name": "IsoFight",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 21.44 L 8.65 14.09 L 1.85 11.29 L 8.98 9.46 L 9.54 2.12 L 13.48 8.34 L 20.63 6.61 L 15.94 12.28 L 19.80 18.54 L 12.95 15.83 Z"
      }
    ]
  ]
};

export const IsoFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 21.44 L 8.65 14.09 L 1.85 11.29 L 8.98 9.46 L 9.54 2.12 L 13.48 8.34 L 20.63 6.61 L 15.94 12.28 L 19.80 18.54 L 12.95 15.83 Z" />
      {children}
    </svg>
  );
});

export default IsoFight;
