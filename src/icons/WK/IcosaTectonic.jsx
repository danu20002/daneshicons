import React from 'react';

export const iconData = {
  "id": "IcosaTectonic",
  "name": "IcosaTectonic",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.86 21.46 L 3.90 17.01 L 3.03 8.79 L 8.92 2.98 L 17.13 3.97 L 21.48 11.00 L 18.69 18.79 Z"
      }
    ]
  ]
};

export const IcosaTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.86 21.46 L 3.90 17.01 L 3.03 8.79 L 8.92 2.98 L 17.13 3.97 L 21.48 11.00 L 18.69 18.79 Z" />
      {children}
    </svg>
  );
});

export default IcosaTectonic;
