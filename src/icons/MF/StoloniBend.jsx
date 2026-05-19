import React from 'react';

export const iconData = {
  "id": "StoloniBend",
  "name": "StoloniBend",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.45 3.68 L 21.74 9.98 L 20.32 17.45 L 14.02 21.74 L 6.55 20.32 L 2.26 14.02 L 3.68 6.55 L 9.98 2.26 Z"
      }
    ]
  ]
};

export const StoloniBend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.45 3.68 L 21.74 9.98 L 20.32 17.45 L 14.02 21.74 L 6.55 20.32 L 2.26 14.02 L 3.68 6.55 L 9.98 2.26 Z" />
      {children}
    </svg>
  );
});

export default StoloniBend;
