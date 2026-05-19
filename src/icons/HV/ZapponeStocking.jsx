import React from 'react';

export const iconData = {
  "id": "ZapponeStocking",
  "name": "ZapponeStocking",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 20.53 L 2.71 11.02 L 10.06 2.86 L 20.10 7.33 L 18.94 18.26 Z"
      }
    ]
  ]
};

export const ZapponeStocking = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 20.53 L 2.71 11.02 L 10.06 2.86 L 20.10 7.33 L 18.94 18.26 Z" />
      {children}
    </svg>
  );
});

export default ZapponeStocking;
