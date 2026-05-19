import React from 'react';

export const iconData = {
  "id": "ZinniaVarious",
  "name": "ZinniaVarious",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 6.79 L 9.68 9.00 L 9.24 1.87 L 12.48 8.23 L 17.21 2.89 L 15.00 9.68 L 22.13 9.24 L 15.77 12.48 L 21.11 17.21 L 14.32 15.00 L 14.76 22.13 L 11.52 15.77 L 6.79 21.11 L 9.00 14.32 L 1.87 14.76 L 8.23 11.52 Z"
      }
    ]
  ]
};

export const ZinniaVarious = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 6.79 L 9.68 9.00 L 9.24 1.87 L 12.48 8.23 L 17.21 2.89 L 15.00 9.68 L 22.13 9.24 L 15.77 12.48 L 21.11 17.21 L 14.32 15.00 L 14.76 22.13 L 11.52 15.77 L 6.79 21.11 L 9.00 14.32 L 1.87 14.76 L 8.23 11.52 Z" />
      {children}
    </svg>
  );
});

export default ZinniaVarious;
