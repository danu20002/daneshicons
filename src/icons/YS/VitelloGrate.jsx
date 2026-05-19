import React from 'react';

export const iconData = {
  "id": "VitelloGrate",
  "name": "VitelloGrate",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.89 2.49 L 13.54 8.71 L 19.36 5.98 L 15.53 11.15 L 21.30 14.00 L 14.87 14.23 L 16.23 20.52 L 12.04 15.63 L 7.98 20.62 L 9.19 14.30 L 2.76 14.23 L 8.45 11.23 L 4.49 6.16 L 10.39 8.75 Z"
      }
    ]
  ]
};

export const VitelloGrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.89 2.49 L 13.54 8.71 L 19.36 5.98 L 15.53 11.15 L 21.30 14.00 L 14.87 14.23 L 16.23 20.52 L 12.04 15.63 L 7.98 20.62 L 9.19 14.30 L 2.76 14.23 L 8.45 11.23 L 4.49 6.16 L 10.39 8.75 Z" />
      {children}
    </svg>
  );
});

export default VitelloGrate;
