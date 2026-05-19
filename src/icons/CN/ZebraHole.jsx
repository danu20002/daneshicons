import React from 'react';

export const iconData = {
  "id": "ZebraHole",
  "name": "ZebraHole",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.43 20.63 L 12.92 23.00 L 14.49 23.00 L 12.80 23.00 L 13.00 23.00 L 14.03 21.08 L 15.21 18.33 L 16.49 20.04 L 18.21 19.86 L 20.32 19.16 L 18.70 20.95 L 21.00 21.61 L 19.78 23.00 L 19.75 20.48 L 17.98 22.25 L 19.06 22.82 L 17.12 22.63 L 15.09 23.00 L 13.42 20.83 L 12.76 18.42 L 15.19 21.38 L 16.40 21.63 L 16.36 20.83 L 14.91 23.00 L 12.26 20.27 L 9.71 19.59 L 6.91 21.04 L 4.17 23.00 L 2.64 20.51"
      }
    ]
  ]
};

export const ZebraHole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.43 20.63 L 12.92 23.00 L 14.49 23.00 L 12.80 23.00 L 13.00 23.00 L 14.03 21.08 L 15.21 18.33 L 16.49 20.04 L 18.21 19.86 L 20.32 19.16 L 18.70 20.95 L 21.00 21.61 L 19.78 23.00 L 19.75 20.48 L 17.98 22.25 L 19.06 22.82 L 17.12 22.63 L 15.09 23.00 L 13.42 20.83 L 12.76 18.42 L 15.19 21.38 L 16.40 21.63 L 16.36 20.83 L 14.91 23.00 L 12.26 20.27 L 9.71 19.59 L 6.91 21.04 L 4.17 23.00 L 2.64 20.51" />
      {children}
    </svg>
  );
});

export default ZebraHole;
