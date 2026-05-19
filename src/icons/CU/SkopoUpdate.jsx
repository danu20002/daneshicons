import React from 'react';

export const iconData = {
  "id": "SkopoUpdate",
  "name": "SkopoUpdate",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.64 21.90 L 7.75 15.00 L 1.54 11.86 L 7.83 8.89 L 8.90 2.01 L 13.67 7.07 L 20.54 5.97 L 17.20 12.07 L 20.38 18.26 L 13.54 16.97 Z"
      }
    ]
  ]
};

export const SkopoUpdate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.64 21.90 L 7.75 15.00 L 1.54 11.86 L 7.83 8.89 L 8.90 2.01 L 13.67 7.07 L 20.54 5.97 L 17.20 12.07 L 20.38 18.26 L 13.54 16.97 Z" />
      {children}
    </svg>
  );
});

export default SkopoUpdate;
