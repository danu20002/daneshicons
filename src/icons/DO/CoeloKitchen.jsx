import React from 'react';

export const iconData = {
  "id": "CoeloKitchen",
  "name": "CoeloKitchen",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.85 5.60 L 17.98 12.20 L 18.40 18.85 L 11.80 17.98 L 5.15 18.40 L 6.02 11.80 L 5.60 5.15 L 12.20 6.02 Z"
      }
    ]
  ]
};

export const CoeloKitchen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.85 5.60 L 17.98 12.20 L 18.40 18.85 L 11.80 17.98 L 5.15 18.40 L 6.02 11.80 L 5.60 5.15 L 12.20 6.02 Z" />
      {children}
    </svg>
  );
});

export default CoeloKitchen;
