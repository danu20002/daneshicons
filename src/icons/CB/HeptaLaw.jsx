import React from 'react';

export const iconData = {
  "id": "HeptaLaw",
  "name": "HeptaLaw",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.24 15.87 L 13.32 15.22 L 8.13 21.24 L 8.78 13.32 L 2.76 8.13 L 10.68 8.78 L 15.87 2.76 L 15.22 10.68 Z"
      }
    ]
  ]
};

export const HeptaLaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.24 15.87 L 13.32 15.22 L 8.13 21.24 L 8.78 13.32 L 2.76 8.13 L 10.68 8.78 L 15.87 2.76 L 15.22 10.68 Z" />
      {children}
    </svg>
  );
});

export default HeptaLaw;
