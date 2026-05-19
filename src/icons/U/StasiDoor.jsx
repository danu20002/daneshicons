import React from 'react';

export const iconData = {
  "id": "StasiDoor",
  "name": "StasiDoor",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 12.20 L 5.78 4.52 L 13.97 2.47 L 20.68 7.60 L 20.86 16.04 L 14.36 21.44 L 6.09 19.73 Z"
      }
    ]
  ]
};

export const StasiDoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 12.20 L 5.78 4.52 L 13.97 2.47 L 20.68 7.60 L 20.86 16.04 L 14.36 21.44 L 6.09 19.73 Z" />
      {children}
    </svg>
  );
});

export default StasiDoor;
