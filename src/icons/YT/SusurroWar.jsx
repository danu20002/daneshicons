import React from 'react';

export const iconData = {
  "id": "SusurroWar",
  "name": "SusurroWar",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 9.84 L 10.11 8.94 L 14.16 2.86 L 15.06 10.11 L 21.14 14.16 L 13.89 15.06 L 9.84 21.14 L 8.94 13.89 Z"
      }
    ]
  ]
};

export const SusurroWar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 9.84 L 10.11 8.94 L 14.16 2.86 L 15.06 10.11 L 21.14 14.16 L 13.89 15.06 L 9.84 21.14 L 8.94 13.89 Z" />
      {children}
    </svg>
  );
});

export default SusurroWar;
