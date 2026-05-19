import React from 'react';

export const iconData = {
  "id": "RubroVessel",
  "name": "RubroVessel",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.20 3.34 L 17.06 9.23 L 22.63 11.45 L 17.32 14.23 L 19.06 19.97 L 13.57 17.55 L 10.17 22.49 L 8.64 16.69 L 2.66 17.11 L 6.24 12.30 L 2.18 7.89 L 8.17 7.68 L 9.09 1.76 L 12.99 6.32 Z"
      }
    ]
  ]
};

export const RubroVessel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.20 3.34 L 17.06 9.23 L 22.63 11.45 L 17.32 14.23 L 19.06 19.97 L 13.57 17.55 L 10.17 22.49 L 8.64 16.69 L 2.66 17.11 L 6.24 12.30 L 2.18 7.89 L 8.17 7.68 L 9.09 1.76 L 12.99 6.32 Z" />
      {children}
    </svg>
  );
});

export default RubroVessel;
