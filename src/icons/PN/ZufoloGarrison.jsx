import React from 'react';

export const iconData = {
  "id": "ZufoloGarrison",
  "name": "ZufoloGarrison",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.53 12.00 Q 15.19 15.19 12.00 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.53 Q 8.81 15.19 3.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 12.00 Q 8.81 8.81 12.00 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.47 Q 15.19 8.81 20.53 12.00"
      }
    ]
  ]
};

export const ZufoloGarrison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.53 12.00 Q 15.19 15.19 12.00 20.53" />
      <path d="M 12.00 20.53 Q 8.81 15.19 3.47 12.00" />
      <path d="M 3.47 12.00 Q 8.81 8.81 12.00 3.47" />
      <path d="M 12.00 3.47 Q 15.19 8.81 20.53 12.00" />
      {children}
    </svg>
  );
});

export default ZufoloGarrison;
