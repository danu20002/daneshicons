import React from 'react';

export const iconData = {
  "id": "ZanzaraMerge",
  "name": "ZanzaraMerge",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.62 20.86 L 11.35 16.78 L 6.14 19.57 L 7.53 13.83 L 2.52 10.71 L 8.18 9.04 L 8.38 3.14 L 12.65 7.22 L 17.86 4.43 L 16.47 10.17 L 21.48 13.29 L 15.82 14.96 Z"
      }
    ]
  ]
};

export const ZanzaraMerge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.62 20.86 L 11.35 16.78 L 6.14 19.57 L 7.53 13.83 L 2.52 10.71 L 8.18 9.04 L 8.38 3.14 L 12.65 7.22 L 17.86 4.43 L 16.47 10.17 L 21.48 13.29 L 15.82 14.96 Z" />
      {children}
    </svg>
  );
});

export default ZanzaraMerge;
