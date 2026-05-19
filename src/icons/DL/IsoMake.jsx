import React from 'react';

export const iconData = {
  "id": "IsoMake",
  "name": "IsoMake",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.99 2.59 L 19.98 6.91 L 20.96 15.06 L 15.19 20.91 L 7.02 20.05 L 2.60 13.13 L 5.26 5.35 Z"
      }
    ]
  ]
};

export const IsoMake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.99 2.59 L 19.98 6.91 L 20.96 15.06 L 15.19 20.91 L 7.02 20.05 L 2.60 13.13 L 5.26 5.35 Z" />
      {children}
    </svg>
  );
});

export default IsoMake;
