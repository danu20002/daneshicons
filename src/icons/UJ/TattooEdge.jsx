import React from 'react';

export const iconData = {
  "id": "TattooEdge",
  "name": "TattooEdge",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.10 4.36 L 13.80 6.43 L 22.06 9.84 L 15.93 16.34 L 8.84 21.79 L 6.27 13.23 Z"
      }
    ]
  ]
};

export const TattooEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.10 4.36 L 13.80 6.43 L 22.06 9.84 L 15.93 16.34 L 8.84 21.79 L 6.27 13.23 Z" />
      {children}
    </svg>
  );
});

export default TattooEdge;
