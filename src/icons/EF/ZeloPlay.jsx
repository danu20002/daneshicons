import React from 'react';

export const iconData = {
  "id": "ZeloPlay",
  "name": "ZeloPlay",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.73 21.30 L 5.81 19.15 L 2.55 11.62 L 6.41 4.37 L 14.48 2.88 L 20.68 8.25 L 20.34 16.45 Z"
      }
    ]
  ]
};

export const ZeloPlay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.73 21.30 L 5.81 19.15 L 2.55 11.62 L 6.41 4.37 L 14.48 2.88 L 20.68 8.25 L 20.34 16.45 Z" />
      {children}
    </svg>
  );
});

export default ZeloPlay;
