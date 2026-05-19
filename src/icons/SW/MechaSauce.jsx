import React from 'react';

export const iconData = {
  "id": "MechaSauce",
  "name": "MechaSauce",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.15 5.09 L 17.30 11.60 L 21.09 17.62 L 14.01 16.91 L 9.47 22.38 L 7.95 15.43 L 1.34 12.80 L 7.48 9.21 L 7.95 2.11 L 13.26 6.84 Z"
      }
    ]
  ]
};

export const MechaSauce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.15 5.09 L 17.30 11.60 L 21.09 17.62 L 14.01 16.91 L 9.47 22.38 L 7.95 15.43 L 1.34 12.80 L 7.48 9.21 L 7.95 2.11 L 13.26 6.84 Z" />
      {children}
    </svg>
  );
});

export default MechaSauce;
