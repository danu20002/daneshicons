import React from 'react';

export const iconData = {
  "id": "ZagroRange",
  "name": "ZagroRange",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.83 5.67 L 12.12 3.16 L 18.33 5.83 L 20.84 12.12 L 18.17 18.33 L 11.88 20.84 L 5.67 18.17 L 3.16 11.88 Z"
      }
    ]
  ]
};

export const ZagroRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.83 5.67 L 12.12 3.16 L 18.33 5.83 L 20.84 12.12 L 18.17 18.33 L 11.88 20.84 L 5.67 18.17 L 3.16 11.88 Z" />
      {children}
    </svg>
  );
});

export default ZagroRange;
