import React from 'react';

export const iconData = {
  "id": "SeccoHot",
  "name": "SeccoHot",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 19.93 L 9.15 13.92 L 2.92 13.33 L 8.72 10.97 L 5.30 5.73 L 10.76 8.80 L 12.72 2.85 L 13.73 9.03 L 19.61 6.86 L 15.40 11.50 L 20.76 14.74 L 14.51 14.35 L 15.32 20.56 L 11.73 15.43 Z"
      }
    ]
  ]
};

export const SeccoHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 19.93 L 9.15 13.92 L 2.92 13.33 L 8.72 10.97 L 5.30 5.73 L 10.76 8.80 L 12.72 2.85 L 13.73 9.03 L 19.61 6.86 L 15.40 11.50 L 20.76 14.74 L 14.51 14.35 L 15.32 20.56 L 11.73 15.43 Z" />
      {children}
    </svg>
  );
});

export default SeccoHot;
