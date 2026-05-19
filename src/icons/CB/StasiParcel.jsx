import React from 'react';

export const iconData = {
  "id": "StasiParcel",
  "name": "StasiParcel",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 9.43 L 15.65 14.02 L 14.57 20.93 L 9.98 15.65 L 3.07 14.57 L 8.35 9.98 L 9.43 3.07 L 14.02 8.35 Z"
      }
    ]
  ]
};

export const StasiParcel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 9.43 L 15.65 14.02 L 14.57 20.93 L 9.98 15.65 L 3.07 14.57 L 8.35 9.98 L 9.43 3.07 L 14.02 8.35 Z" />
      {children}
    </svg>
  );
});

export default StasiParcel;
