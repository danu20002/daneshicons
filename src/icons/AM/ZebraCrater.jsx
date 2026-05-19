import React from 'react';

export const iconData = {
  "id": "ZebraCrater",
  "name": "ZebraCrater",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.28 17.25 L 12.73 20.16 L 6.75 18.28 L 3.84 12.73 L 5.72 6.75 L 11.27 3.84 L 17.25 5.72 L 20.16 11.27 Z"
      }
    ]
  ]
};

export const ZebraCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.28 17.25 L 12.73 20.16 L 6.75 18.28 L 3.84 12.73 L 5.72 6.75 L 11.27 3.84 L 17.25 5.72 L 20.16 11.27 Z" />
      {children}
    </svg>
  );
});

export default ZebraCrater;
