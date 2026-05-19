import React from 'react';

export const iconData = {
  "id": "StipiteSkunk",
  "name": "StipiteSkunk",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.38 14.28 L 8.96 11.02 L 4.72 3.94 L 11.33 8.88 L 15.34 1.66 L 14.37 9.86 L 22.62 9.72 L 15.04 12.98 L 19.28 20.06 L 12.67 15.12 L 8.66 22.34 L 9.63 14.14 Z"
      }
    ]
  ]
};

export const StipiteSkunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.38 14.28 L 8.96 11.02 L 4.72 3.94 L 11.33 8.88 L 15.34 1.66 L 14.37 9.86 L 22.62 9.72 L 15.04 12.98 L 19.28 20.06 L 12.67 15.12 L 8.66 22.34 L 9.63 14.14 Z" />
      {children}
    </svg>
  );
});

export default StipiteSkunk;
