import React from 'react';

export const iconData = {
  "id": "MetaCharter",
  "name": "MetaCharter",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.43 11.66 6.35 6.10 Q 6.88 6.08 7.41 6.06 Q 12.42 5.19 17.42 4.32 Q 16.96 10.77 16.50 17.22 Z"
      }
    ]
  ]
};

export const MetaCharter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.43 11.66 6.35 6.10 Q 6.88 6.08 7.41 6.06 Q 12.42 5.19 17.42 4.32 Q 16.96 10.77 16.50 17.22 Z" />
      {children}
    </svg>
  );
});

export default MetaCharter;
