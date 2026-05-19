import React from 'react';

export const iconData = {
  "id": "KleptoFoliage",
  "name": "KleptoFoliage",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.39 19.68 L 4.32 18.39 L 5.61 4.32 L 19.68 5.61 Z"
      }
    ]
  ]
};

export const KleptoFoliage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.39 19.68 L 4.32 18.39 L 5.61 4.32 L 19.68 5.61 Z" />
      {children}
    </svg>
  );
});

export default KleptoFoliage;
