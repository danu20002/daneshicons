import React from 'react';

export const iconData = {
  "id": "TondoGrowl",
  "name": "TondoGrowl",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.07 8.71 L 19.61 16.26 L 13.41 20.60 L 6.16 18.47 L 3.30 11.46 L 6.99 4.86 L 14.46 3.64 Z"
      }
    ]
  ]
};

export const TondoGrowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.07 8.71 L 19.61 16.26 L 13.41 20.60 L 6.16 18.47 L 3.30 11.46 L 6.99 4.86 L 14.46 3.64 Z" />
      {children}
    </svg>
  );
});

export default TondoGrowl;
