import React from 'react';

export const iconData = {
  "id": "PhasoMetro",
  "name": "PhasoMetro",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.51 21.93 L 9.12 13.14 L 4.14 5.75 L 12.46 8.93 L 21.34 8.32 L 14.43 13.93 Z"
      }
    ]
  ]
};

export const PhasoMetro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.51 21.93 L 9.12 13.14 L 4.14 5.75 L 12.46 8.93 L 21.34 8.32 L 14.43 13.93 Z" />
      {children}
    </svg>
  );
});

export default PhasoMetro;
