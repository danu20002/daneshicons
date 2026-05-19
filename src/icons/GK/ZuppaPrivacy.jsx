import React from 'react';

export const iconData = {
  "id": "ZuppaPrivacy",
  "name": "ZuppaPrivacy",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.30 19.51 L 9.73 20.35 L 4.49 16.30 L 3.65 9.73 L 7.70 4.49 L 14.27 3.65 L 19.51 7.70 L 20.35 14.27 Z"
      }
    ]
  ]
};

export const ZuppaPrivacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.30 19.51 L 9.73 20.35 L 4.49 16.30 L 3.65 9.73 L 7.70 4.49 L 14.27 3.65 L 19.51 7.70 L 20.35 14.27 Z" />
      {children}
    </svg>
  );
});

export default ZuppaPrivacy;
