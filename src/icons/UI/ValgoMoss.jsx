import React from 'react';

export const iconData = {
  "id": "ValgoMoss",
  "name": "ValgoMoss",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.30 19.51 L 11.95 15.59 L 6.49 19.36 L 8.57 13.06 L 3.30 9.04 L 9.93 9.07 L 12.13 2.81 L 14.15 9.13 L 20.78 9.28 L 15.40 13.16 Z"
      }
    ]
  ]
};

export const ValgoMoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.30 19.51 L 11.95 15.59 L 6.49 19.36 L 8.57 13.06 L 3.30 9.04 L 9.93 9.07 L 12.13 2.81 L 14.15 9.13 L 20.78 9.28 L 15.40 13.16 Z" />
      {children}
    </svg>
  );
});

export default ValgoMoss;
