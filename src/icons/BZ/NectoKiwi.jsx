import React from 'react';

export const iconData = {
  "id": "NectoKiwi",
  "name": "NectoKiwi",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 5.28 L 21.70 12.20 L 18.72 19.00 L 11.80 21.70 L 5.00 18.72 L 2.30 11.80 L 5.28 5.00 L 12.20 2.30 Z"
      }
    ]
  ]
};

export const NectoKiwi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 5.28 L 21.70 12.20 L 18.72 19.00 L 11.80 21.70 L 5.00 18.72 L 2.30 11.80 L 5.28 5.00 L 12.20 2.30 Z" />
      {children}
    </svg>
  );
});

export default NectoKiwi;
