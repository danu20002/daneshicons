import React from 'react';

export const iconData = {
  "id": "ZebraHand",
  "name": "ZebraHand",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.66 20.09 L 12.25 16.12 L 6.37 20.83 L 8.16 13.51 L 1.86 9.37 L 9.38 8.81 L 11.37 1.55 L 14.22 8.52 L 21.75 8.17 L 15.99 13.04 Z"
      }
    ]
  ]
};

export const ZebraHand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.66 20.09 L 12.25 16.12 L 6.37 20.83 L 8.16 13.51 L 1.86 9.37 L 9.38 8.81 L 11.37 1.55 L 14.22 8.52 L 21.75 8.17 L 15.99 13.04 Z" />
      {children}
    </svg>
  );
});

export default ZebraHand;
