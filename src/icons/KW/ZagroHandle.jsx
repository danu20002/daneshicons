import React from 'react';

export const iconData = {
  "id": "ZagroHandle",
  "name": "ZagroHandle",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 18.78 L 6.66 12.75 L 3.39 7.42 L 9.64 7.16 L 13.69 2.39 L 15.88 8.26 L 21.66 10.64 L 16.76 14.53 L 16.28 20.76 L 11.07 17.31 Z"
      }
    ]
  ]
};

export const ZagroHandle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 18.78 L 6.66 12.75 L 3.39 7.42 L 9.64 7.16 L 13.69 2.39 L 15.88 8.26 L 21.66 10.64 L 16.76 14.53 L 16.28 20.76 L 11.07 17.31 Z" />
      {children}
    </svg>
  );
});

export default ZagroHandle;
