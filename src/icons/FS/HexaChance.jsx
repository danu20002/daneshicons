import React from 'react';

export const iconData = {
  "id": "HexaChance",
  "name": "HexaChance",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.02 20.90 L 9.13 13.05 L 1.69 9.06 L 10.12 9.60 L 11.61 1.28 L 13.70 9.47 L 22.07 8.32 L 14.94 12.84 L 18.61 20.44 L 12.11 15.05 Z"
      }
    ]
  ]
};

export const HexaChance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.02 20.90 L 9.13 13.05 L 1.69 9.06 L 10.12 9.60 L 11.61 1.28 L 13.70 9.47 L 22.07 8.32 L 14.94 12.84 L 18.61 20.44 L 12.11 15.05 Z" />
      {children}
    </svg>
  );
});

export default HexaChance;
