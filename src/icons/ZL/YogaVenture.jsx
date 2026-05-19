import React from 'react';

export const iconData = {
  "id": "YogaVenture",
  "name": "YogaVenture",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.15 2.88 L 15.38 7.54 L 20.47 8.44 L 17.55 12.70 L 19.32 17.56 L 14.17 17.16 L 10.85 21.12 L 8.62 16.46 L 3.53 15.56 L 6.45 11.30 L 4.68 6.44 L 9.83 6.84 Z"
      }
    ]
  ]
};

export const YogaVenture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.15 2.88 L 15.38 7.54 L 20.47 8.44 L 17.55 12.70 L 19.32 17.56 L 14.17 17.16 L 10.85 21.12 L 8.62 16.46 L 3.53 15.56 L 6.45 11.30 L 4.68 6.44 L 9.83 6.84 Z" />
      {children}
    </svg>
  );
});

export default YogaVenture;
