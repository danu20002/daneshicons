import React from 'react';

export const iconData = {
  "id": "ZambelloCopper",
  "name": "ZambelloCopper",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 6.98 L 19.85 15.55 L 12.85 20.57 L 5.00 17.02 L 4.15 8.45 L 11.15 3.43 Z"
      }
    ]
  ]
};

export const ZambelloCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 6.98 L 19.85 15.55 L 12.85 20.57 L 5.00 17.02 L 4.15 8.45 L 11.15 3.43 Z" />
      {children}
    </svg>
  );
});

export default ZambelloCopper;
