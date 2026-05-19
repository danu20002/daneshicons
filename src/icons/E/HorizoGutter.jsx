import React from 'react';

export const iconData = {
  "id": "HorizoGutter",
  "name": "HorizoGutter",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.87 22.52 L 10.27 14.48 L 1.48 13.87 L 9.52 10.27 L 10.13 1.48 L 13.73 9.52 L 22.52 10.13 L 14.48 13.73 Z"
      }
    ]
  ]
};

export const HorizoGutter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.87 22.52 L 10.27 14.48 L 1.48 13.87 L 9.52 10.27 L 10.13 1.48 L 13.73 9.52 L 22.52 10.13 L 14.48 13.73 Z" />
      {children}
    </svg>
  );
});

export default HorizoGutter;
