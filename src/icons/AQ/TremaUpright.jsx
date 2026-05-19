import React from 'react';

export const iconData = {
  "id": "TremaUpright",
  "name": "TremaUpright",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.38 11.56 L 15.13 14.08 L 15.63 21.74 L 10.99 15.62 L 3.86 18.46 L 8.25 12.16 L 3.34 6.26 L 10.69 8.48 L 14.79 1.99 L 14.94 9.66 Z"
      }
    ]
  ]
};

export const TremaUpright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.38 11.56 L 15.13 14.08 L 15.63 21.74 L 10.99 15.62 L 3.86 18.46 L 8.25 12.16 L 3.34 6.26 L 10.69 8.48 L 14.79 1.99 L 14.94 9.66 Z" />
      {children}
    </svg>
  );
});

export default TremaUpright;
