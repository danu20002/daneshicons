import React from 'react';

export const iconData = {
  "id": "ZulùEnvelope",
  "name": "ZulùEnvelope",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.06 2.65 L 14.80 7.22 L 20.13 7.38 L 17.54 12.04 L 20.07 16.73 L 14.74 16.81 L 11.94 21.35 L 9.20 16.78 L 3.87 16.62 L 6.46 11.96 L 3.93 7.27 L 9.26 7.19 Z"
      }
    ]
  ]
};

export const ZulùEnvelope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.06 2.65 L 14.80 7.22 L 20.13 7.38 L 17.54 12.04 L 20.07 16.73 L 14.74 16.81 L 11.94 21.35 L 9.20 16.78 L 3.87 16.62 L 6.46 11.96 L 3.93 7.27 L 9.26 7.19 Z" />
      {children}
    </svg>
  );
});

export default ZulùEnvelope;
