import React from 'react';

export const iconData = {
  "id": "ZinzinoGrab",
  "name": "ZinzinoGrab",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 7.03 L 9.11 3.09 L 15.52 3.32 L 20.28 7.61 L 21.16 13.96 L 17.76 19.39 L 11.66 21.36 L 5.72 18.96 L 2.72 13.29 Z"
      }
    ]
  ]
};

export const ZinzinoGrab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 7.03 L 9.11 3.09 L 15.52 3.32 L 20.28 7.61 L 21.16 13.96 L 17.76 19.39 L 11.66 21.36 L 5.72 18.96 L 2.72 13.29 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoGrab;
