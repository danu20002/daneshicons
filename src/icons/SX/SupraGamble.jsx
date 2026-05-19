import React from 'react';

export const iconData = {
  "id": "SupraGamble",
  "name": "SupraGamble",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.01 19.35 L 7.70 13.14 L 3.16 8.57 L 9.59 8.26 L 12.53 2.53 L 14.81 8.55 L 21.17 9.58 L 16.15 13.61 L 17.14 19.97 L 11.75 16.44 Z"
      }
    ]
  ]
};

export const SupraGamble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.01 19.35 L 7.70 13.14 L 3.16 8.57 L 9.59 8.26 L 12.53 2.53 L 14.81 8.55 L 21.17 9.58 L 16.15 13.61 L 17.14 19.97 L 11.75 16.44 Z" />
      {children}
    </svg>
  );
});

export default SupraGamble;
