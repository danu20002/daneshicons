import React from 'react';

export const iconData = {
  "id": "SextoPlumber",
  "name": "SextoPlumber",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 21.05 L 2.38 11.65 L 9.36 2.74 L 19.99 6.62 L 19.58 17.94 Z"
      }
    ]
  ]
};

export const SextoPlumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 21.05 L 2.38 11.65 L 9.36 2.74 L 19.99 6.62 L 19.58 17.94 Z" />
      {children}
    </svg>
  );
});

export default SextoPlumber;
