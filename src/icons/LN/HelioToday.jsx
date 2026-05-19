import React from 'react';

export const iconData = {
  "id": "HelioToday",
  "name": "HelioToday",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.12 21.43 L 6.84 20.17 L 2.57 14.12 L 3.83 6.84 L 9.88 2.57 L 17.16 3.83 L 21.43 9.88 L 20.17 17.16 Z"
      }
    ]
  ]
};

export const HelioToday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.12 21.43 L 6.84 20.17 L 2.57 14.12 L 3.83 6.84 L 9.88 2.57 L 17.16 3.83 L 21.43 9.88 L 20.17 17.16 Z" />
      {children}
    </svg>
  );
});

export default HelioToday;
