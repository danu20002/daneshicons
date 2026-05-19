import React from 'react';

export const iconData = {
  "id": "ZefiroDual",
  "name": "ZefiroDual",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.20 5.34 A 6.61 2.98 31 0 0 14.79 11.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 17.38 L 10.73 8.77 L 11.56 12.27 L 17.94 6.95 L 14.59 9.43 L 19.50 7.99 L 14.42 18.15"
      }
    ]
  ]
};

export const ZefiroDual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.20 5.34 A 6.61 2.98 31 0 0 14.79 11.13" />
      <path d="M 7.99 17.38 L 10.73 8.77 L 11.56 12.27 L 17.94 6.95 L 14.59 9.43 L 19.50 7.99 L 14.42 18.15" />
      {children}
    </svg>
  );
});

export default ZefiroDual;
