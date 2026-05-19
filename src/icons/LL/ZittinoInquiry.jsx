import React from 'react';

export const iconData = {
  "id": "ZittinoInquiry",
  "name": "ZittinoInquiry",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.47 9.55 L 17.26 20.25 L 5.78 19.55 L 2.89 8.41 L 12.60 2.23 Z"
      }
    ]
  ]
};

export const ZittinoInquiry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.47 9.55 L 17.26 20.25 L 5.78 19.55 L 2.89 8.41 L 12.60 2.23 Z" />
      {children}
    </svg>
  );
});

export default ZittinoInquiry;
