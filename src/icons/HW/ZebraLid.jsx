import React from 'react';

export const iconData = {
  "id": "ZebraLid",
  "name": "ZebraLid",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.34 21.54 L 3.83 17.60 L 2.14 11.04 L 5.06 4.92 L 11.24 2.12 L 17.77 3.94 L 21.60 9.53 L 20.94 16.28 L 16.10 21.02 Z"
      }
    ]
  ]
};

export const ZebraLid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.34 21.54 L 3.83 17.60 L 2.14 11.04 L 5.06 4.92 L 11.24 2.12 L 17.77 3.94 L 21.60 9.53 L 20.94 16.28 L 16.10 21.02 Z" />
      {children}
    </svg>
  );
});

export default ZebraLid;
