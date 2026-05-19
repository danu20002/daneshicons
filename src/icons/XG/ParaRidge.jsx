import React from 'react';

export const iconData = {
  "id": "ParaRidge",
  "name": "ParaRidge",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 17.28 L 8.30 12.84 L 2.98 10.45 L 8.79 9.97 L 6.72 4.53 L 11.16 8.30 L 13.55 2.98 L 14.03 8.79 L 19.47 6.72 L 15.70 11.16 L 21.02 13.55 L 15.21 14.03 L 17.28 19.47 L 12.84 15.70 L 10.45 21.02 L 9.97 15.21 Z"
      }
    ]
  ]
};

export const ParaRidge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 17.28 L 8.30 12.84 L 2.98 10.45 L 8.79 9.97 L 6.72 4.53 L 11.16 8.30 L 13.55 2.98 L 14.03 8.79 L 19.47 6.72 L 15.70 11.16 L 21.02 13.55 L 15.21 14.03 L 17.28 19.47 L 12.84 15.70 L 10.45 21.02 L 9.97 15.21 Z" />
      {children}
    </svg>
  );
});

export default ParaRidge;
