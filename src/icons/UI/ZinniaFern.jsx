import React from 'react';

export const iconData = {
  "id": "ZinniaFern",
  "name": "ZinniaFern",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.68 1.48 L 15.70 9.32 L 22.52 13.68 L 14.68 15.70 L 10.32 22.52 L 8.30 14.68 L 1.48 10.32 L 9.32 8.30 Z"
      }
    ]
  ]
};

export const ZinniaFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.68 1.48 L 15.70 9.32 L 22.52 13.68 L 14.68 15.70 L 10.32 22.52 L 8.30 14.68 L 1.48 10.32 L 9.32 8.30 Z" />
      {children}
    </svg>
  );
});

export default ZinniaFern;
