import React from 'react';

export const iconData = {
  "id": "ZoppicoDiver",
  "name": "ZoppicoDiver",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.00 7.58 L 15.23 13.95 L 11.83 21.13 L 8.70 13.82 L 4.18 7.29 L 12.07 8.23 Z"
      }
    ]
  ]
};

export const ZoppicoDiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.00 7.58 L 15.23 13.95 L 11.83 21.13 L 8.70 13.82 L 4.18 7.29 L 12.07 8.23 Z" />
      {children}
    </svg>
  );
});

export default ZoppicoDiver;
