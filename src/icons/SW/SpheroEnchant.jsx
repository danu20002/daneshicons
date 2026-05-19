import React from 'react';

export const iconData = {
  "id": "SpheroEnchant",
  "name": "SpheroEnchant",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.47 1.36 L 15.16 7.05 L 21.45 7.09 L 17.86 12.26 L 20.98 17.73 L 14.71 17.21 L 11.53 22.64 L 8.84 16.95 L 2.55 16.91 L 6.14 11.74 L 3.02 6.27 L 9.29 6.79 Z"
      }
    ]
  ]
};

export const SpheroEnchant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.47 1.36 L 15.16 7.05 L 21.45 7.09 L 17.86 12.26 L 20.98 17.73 L 14.71 17.21 L 11.53 22.64 L 8.84 16.95 L 2.55 16.91 L 6.14 11.74 L 3.02 6.27 L 9.29 6.79 Z" />
      {children}
    </svg>
  );
});

export default SpheroEnchant;
