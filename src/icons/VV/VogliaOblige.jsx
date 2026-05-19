import React from 'react';

export const iconData = {
  "id": "VogliaOblige",
  "name": "VogliaOblige",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.77 22.18 L 7.75 15.13 L 1.32 12.07 L 7.71 8.93 L 8.63 1.87 L 13.60 6.97 L 20.60 5.67 L 17.28 11.96 L 20.68 18.22 L 13.66 17.01 Z"
      }
    ]
  ]
};

export const VogliaOblige = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.77 22.18 L 7.75 15.13 L 1.32 12.07 L 7.71 8.93 L 8.63 1.87 L 13.60 6.97 L 20.60 5.67 L 17.28 11.96 L 20.68 18.22 L 13.66 17.01 Z" />
      {children}
    </svg>
  );
});

export default VogliaOblige;
