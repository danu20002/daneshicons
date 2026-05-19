import React from 'react';

export const iconData = {
  "id": "YogaMail",
  "name": "YogaMail",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.26 16.13 L 8.78 13.72 L 11.11 13.47 L 8.30 14.79 L 8.95 14.74 L 7.05 11.89 L 5.84 13.49 L 5.33 12.35 L 4.43 10.55 L 2.54 10.37 L 1.00 8.74 L 1.00 7.32 L 1.00 6.09 L 3.46 6.95 L 4.55 8.39 L 7.11 9.59 L 6.75 12.10"
      }
    ]
  ]
};

export const YogaMail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.26 16.13 L 8.78 13.72 L 11.11 13.47 L 8.30 14.79 L 8.95 14.74 L 7.05 11.89 L 5.84 13.49 L 5.33 12.35 L 4.43 10.55 L 2.54 10.37 L 1.00 8.74 L 1.00 7.32 L 1.00 6.09 L 3.46 6.95 L 4.55 8.39 L 7.11 9.59 L 6.75 12.10" />
      {children}
    </svg>
  );
});

export default YogaMail;
