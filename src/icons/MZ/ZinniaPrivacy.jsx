import React from 'react';

export const iconData = {
  "id": "ZinniaPrivacy",
  "name": "ZinniaPrivacy",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 3.68 L 16.47 3.10 L 21.94 11.42 L 17.48 20.32 L 7.53 20.90 L 2.06 12.58 Z"
      }
    ]
  ]
};

export const ZinniaPrivacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 3.68 L 16.47 3.10 L 21.94 11.42 L 17.48 20.32 L 7.53 20.90 L 2.06 12.58 Z" />
      {children}
    </svg>
  );
});

export default ZinniaPrivacy;
