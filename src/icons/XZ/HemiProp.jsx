import React from 'react';

export const iconData = {
  "id": "HemiProp",
  "name": "HemiProp",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.69 13.28 L 14.47 13.85 L 16.24 21.90 L 11.63 15.06 L 5.55 20.62 L 9.16 13.22 L 1.31 10.72 L 9.53 10.15 L 7.76 2.10 L 12.37 8.94 L 18.45 3.38 L 14.84 10.78 Z"
      }
    ]
  ]
};

export const HemiProp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.69 13.28 L 14.47 13.85 L 16.24 21.90 L 11.63 15.06 L 5.55 20.62 L 9.16 13.22 L 1.31 10.72 L 9.53 10.15 L 7.76 2.10 L 12.37 8.94 L 18.45 3.38 L 14.84 10.78 Z" />
      {children}
    </svg>
  );
});

export default HemiProp;
