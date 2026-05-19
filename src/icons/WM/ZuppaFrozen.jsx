import React from 'react';

export const iconData = {
  "id": "ZuppaFrozen",
  "name": "ZuppaFrozen",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.74 10.97 L 19.62 18.16 L 13.03 21.74 L 5.84 19.62 L 2.26 13.03 L 4.38 5.84 L 10.97 2.26 L 18.16 4.38 Z"
      }
    ]
  ]
};

export const ZuppaFrozen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.74 10.97 L 19.62 18.16 L 13.03 21.74 L 5.84 19.62 L 2.26 13.03 L 4.38 5.84 L 10.97 2.26 L 18.16 4.38 Z" />
      {children}
    </svg>
  );
});

export default ZuppaFrozen;
