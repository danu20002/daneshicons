import React from 'react';

export const iconData = {
  "id": "PneumoChance",
  "name": "PneumoChance",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.38 4.33 L 15.94 10.55 L 21.83 13.69 L 15.23 14.68 L 15.45 21.36 L 11.29 16.14 L 5.62 19.67 L 8.06 13.45 L 2.17 10.31 L 8.77 9.32 L 8.55 2.64 L 12.71 7.86 Z"
      }
    ]
  ]
};

export const PneumoChance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.38 4.33 L 15.94 10.55 L 21.83 13.69 L 15.23 14.68 L 15.45 21.36 L 11.29 16.14 L 5.62 19.67 L 8.06 13.45 L 2.17 10.31 L 8.77 9.32 L 8.55 2.64 L 12.71 7.86 Z" />
      {children}
    </svg>
  );
});

export default PneumoChance;
