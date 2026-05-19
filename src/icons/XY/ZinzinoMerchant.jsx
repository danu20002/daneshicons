import React from 'react';

export const iconData = {
  "id": "ZinzinoMerchant",
  "name": "ZinzinoMerchant",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.56 3.90 L 15.30 3.84 L 20.10 8.56 L 20.16 15.30 L 15.44 20.10 L 8.70 20.16 L 3.90 15.44 L 3.84 8.70 Z"
      }
    ]
  ]
};

export const ZinzinoMerchant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.56 3.90 L 15.30 3.84 L 20.10 8.56 L 20.16 15.30 L 15.44 20.10 L 8.70 20.16 L 3.90 15.44 L 3.84 8.70 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoMerchant;
