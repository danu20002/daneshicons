import React from 'react';

export const iconData = {
  "id": "StipiteItem",
  "name": "StipiteItem",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 14.83 L 14.79 20.04 L 7.45 19.20 L 3.54 12.93 L 6.00 5.96 L 12.98 3.54 L 19.22 7.49 Z"
      }
    ]
  ]
};

export const StipiteItem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 14.83 L 14.79 20.04 L 7.45 19.20 L 3.54 12.93 L 6.00 5.96 L 12.98 3.54 L 19.22 7.49 Z" />
      {children}
    </svg>
  );
});

export default StipiteItem;
