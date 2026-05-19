import React from 'react';

export const iconData = {
  "id": "SpumosoFury",
  "name": "SpumosoFury",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 12.63 L 11.37 21.32 L 2.68 11.37 L 12.63 2.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 14.16 L 9.84 17.68 L 6.32 9.84 L 14.16 6.32 Z"
      }
    ]
  ]
};

export const SpumosoFury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 12.63 L 11.37 21.32 L 2.68 11.37 L 12.63 2.68 Z" />
      <path d="M 17.68 14.16 L 9.84 17.68 L 6.32 9.84 L 14.16 6.32 Z" />
      {children}
    </svg>
  );
});

export default SpumosoFury;
