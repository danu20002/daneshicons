import React from 'react';

export const iconData = {
  "id": "VerniceWest",
  "name": "VerniceWest",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 12.00 L 17.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 12.00 L 14.27 10.07"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 12.00 L 14.27 13.93"
      }
    ]
  ]
};

export const VerniceWest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 12.00 L 17.48 12.00" />
      <path d="M 17.48 12.00 L 14.27 10.07" />
      <path d="M 17.48 12.00 L 14.27 13.93" />
      {children}
    </svg>
  );
});

export default VerniceWest;
