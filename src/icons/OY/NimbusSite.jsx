import React from 'react';

export const iconData = {
  "id": "NimbusSite",
  "name": "NimbusSite",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.29 20.88 L 12.63 21.20 L 12.56 19.34 L 9.67 20.93 L 9.56 20.02 L 11.35 17.66 L 9.38 18.03 L 9.73 16.70 L 9.43 19.33 L 7.98 19.15 L 5.34 17.53 L 4.54 16.55 L 6.46 17.59 L 9.24 18.75 L 10.57 19.26 L 10.34 20.31 L 12.38 19.65 L 13.79 19.18 L 14.05 21.23 L 13.71 23.00 L 12.21 20.42 L 13.00 21.93 L 10.89 23.00 L 8.69 23.00 L 10.67 23.00 L 9.09 23.00 L 8.22 23.00 L 8.10 23.00 L 7.09 23.00 L 8.59 23.00 L 8.23 21.47 L 10.19 23.00 L 11.23 22.88"
      }
    ]
  ]
};

export const NimbusSite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.29 20.88 L 12.63 21.20 L 12.56 19.34 L 9.67 20.93 L 9.56 20.02 L 11.35 17.66 L 9.38 18.03 L 9.73 16.70 L 9.43 19.33 L 7.98 19.15 L 5.34 17.53 L 4.54 16.55 L 6.46 17.59 L 9.24 18.75 L 10.57 19.26 L 10.34 20.31 L 12.38 19.65 L 13.79 19.18 L 14.05 21.23 L 13.71 23.00 L 12.21 20.42 L 13.00 21.93 L 10.89 23.00 L 8.69 23.00 L 10.67 23.00 L 9.09 23.00 L 8.22 23.00 L 8.10 23.00 L 7.09 23.00 L 8.59 23.00 L 8.23 21.47 L 10.19 23.00 L 11.23 22.88" />
      {children}
    </svg>
  );
});

export default NimbusSite;
