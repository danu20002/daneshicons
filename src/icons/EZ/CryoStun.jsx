import React from 'react';

export const iconData = {
  "id": "CryoStun",
  "name": "CryoStun",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.51 20.47 L 11.76 16.37 L 7.57 20.03 L 8.43 14.53 L 2.96 13.54 L 7.79 10.79 L 5.16 5.89 L 10.32 7.96 L 12.51 2.84 L 14.11 8.17 L 19.48 6.69 L 16.31 11.26 L 20.81 14.53 L 15.26 14.91 Z"
      }
    ]
  ]
};

export const CryoStun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.51 20.47 L 11.76 16.37 L 7.57 20.03 L 8.43 14.53 L 2.96 13.54 L 7.79 10.79 L 5.16 5.89 L 10.32 7.96 L 12.51 2.84 L 14.11 8.17 L 19.48 6.69 L 16.31 11.26 L 20.81 14.53 L 15.26 14.91 Z" />
      {children}
    </svg>
  );
});

export default CryoStun;
