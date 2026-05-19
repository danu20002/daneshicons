import React from 'react';

export const iconData = {
  "id": "VarioloKitchen",
  "name": "VarioloKitchen",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.57 8.52 L 10.73 21.16 L 4.70 6.32 Z"
      }
    ]
  ]
};

export const VarioloKitchen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.57 8.52 L 10.73 21.16 L 4.70 6.32 Z" />
      {children}
    </svg>
  );
});

export default VarioloKitchen;
