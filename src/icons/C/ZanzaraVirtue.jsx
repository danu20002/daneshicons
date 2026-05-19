import React from 'react';

export const iconData = {
  "id": "ZanzaraVirtue",
  "name": "ZanzaraVirtue",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 18.65 L 2.32 10.53 L 7.11 3.52 L 15.58 2.89 L 21.36 9.12 L 20.08 17.52 L 12.72 21.76 Z"
      }
    ]
  ]
};

export const ZanzaraVirtue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 18.65 L 2.32 10.53 L 7.11 3.52 L 15.58 2.89 L 21.36 9.12 L 20.08 17.52 L 12.72 21.76 Z" />
      {children}
    </svg>
  );
});

export default ZanzaraVirtue;
