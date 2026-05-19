import React from 'react';

export const iconData = {
  "id": "RapidoElegance",
  "name": "RapidoElegance",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.84 3.50 L 20.02 8.00 L 20.50 14.84 L 16.00 20.02 L 9.16 20.50 L 3.98 16.00 L 3.50 9.16 L 8.00 3.98 Z"
      }
    ]
  ]
};

export const RapidoElegance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.84 3.50 L 20.02 8.00 L 20.50 14.84 L 16.00 20.02 L 9.16 20.50 L 3.98 16.00 L 3.50 9.16 L 8.00 3.98 Z" />
      {children}
    </svg>
  );
});

export default RapidoElegance;
