import React from 'react';

export const iconData = {
  "id": "EtherGap",
  "name": "EtherGap",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.45 20.54 L 3.46 15.45 L 8.55 3.46 L 20.54 8.55 Z"
      }
    ]
  ]
};

export const EtherGap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.45 20.54 L 3.46 15.45 L 8.55 3.46 L 20.54 8.55 Z" />
      {children}
    </svg>
  );
});

export default EtherGap;
