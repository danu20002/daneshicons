import React from 'react';

export const iconData = {
  "id": "ZappinoVictim",
  "name": "ZappinoVictim",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.08 3.45 L 14.79 9.76 L 21.23 9.86 L 15.49 12.78 L 19.43 17.88 L 13.56 15.22 L 12.03 21.47 L 10.46 15.23 L 4.61 17.93 L 8.52 12.81 L 2.76 9.92 L 9.20 9.78 L 7.86 3.48 L 11.99 8.42 Z"
      }
    ]
  ]
};

export const ZappinoVictim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.08 3.45 L 14.79 9.76 L 21.23 9.86 L 15.49 12.78 L 19.43 17.88 L 13.56 15.22 L 12.03 21.47 L 10.46 15.23 L 4.61 17.93 L 8.52 12.81 L 2.76 9.92 L 9.20 9.78 L 7.86 3.48 L 11.99 8.42 Z" />
      {children}
    </svg>
  );
});

export default ZappinoVictim;
