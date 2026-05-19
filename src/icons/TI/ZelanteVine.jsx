import React from 'react';

export const iconData = {
  "id": "ZelanteVine",
  "name": "ZelanteVine",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.72 6.92 L 5.96 7.13 L 3.36 6.12 L 6.15 8.42 L 4.46 11.18 L 6.52 10.33 L 6.91 9.70 L 6.47 7.25 L 7.63 6.04 L 9.15 4.96 L 9.45 7.21 L 7.52 4.94 L 10.12 7.34 L 10.15 5.18 L 12.08 5.89 L 10.44 8.53 L 13.35 8.86 L 10.78 10.08 L 13.08 9.97 L 11.80 12.70 L 13.56 14.37 L 11.04 16.05 L 13.48 17.02 L 11.85 16.12 L 9.19 17.97 L 10.59 20.18 L 8.99 19.36 L 6.12 20.06 L 5.07 22.26 L 3.62 22.20 L 5.54 22.44 L 4.39 23.00 L 4.95 22.33 L 3.19 23.00"
      }
    ]
  ]
};

export const ZelanteVine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.72 6.92 L 5.96 7.13 L 3.36 6.12 L 6.15 8.42 L 4.46 11.18 L 6.52 10.33 L 6.91 9.70 L 6.47 7.25 L 7.63 6.04 L 9.15 4.96 L 9.45 7.21 L 7.52 4.94 L 10.12 7.34 L 10.15 5.18 L 12.08 5.89 L 10.44 8.53 L 13.35 8.86 L 10.78 10.08 L 13.08 9.97 L 11.80 12.70 L 13.56 14.37 L 11.04 16.05 L 13.48 17.02 L 11.85 16.12 L 9.19 17.97 L 10.59 20.18 L 8.99 19.36 L 6.12 20.06 L 5.07 22.26 L 3.62 22.20 L 5.54 22.44 L 4.39 23.00 L 4.95 22.33 L 3.19 23.00" />
      {children}
    </svg>
  );
});

export default ZelanteVine;
