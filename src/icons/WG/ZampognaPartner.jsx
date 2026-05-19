import React from 'react';

export const iconData = {
  "id": "ZampognaPartner",
  "name": "ZampognaPartner",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 12.89 L 6.06 15.10 L 7.82 15.41 L 9.99 14.09 L 12.45 12.39 L 14.42 12.74 L 15.79 15.53 L 17.60 13.26 L 19.38 11.71 L 20.49 13.23 L 20.96 15.27 L 23.00 16.48 L 23.00 14.66 L 21.14 16.58 L 20.38 14.31 L 22.26 11.45 L 20.31 9.28 L 22.92 7.02 L 22.10 4.24 L 23.00 5.33 L 20.03 8.27 L 20.19 6.87 L 22.58 9.51 L 23.00 6.61 L 23.00 7.73 L 20.29 8.97 L 18.11 7.65"
      }
    ]
  ]
};

export const ZampognaPartner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.06 12.89 L 6.06 15.10 L 7.82 15.41 L 9.99 14.09 L 12.45 12.39 L 14.42 12.74 L 15.79 15.53 L 17.60 13.26 L 19.38 11.71 L 20.49 13.23 L 20.96 15.27 L 23.00 16.48 L 23.00 14.66 L 21.14 16.58 L 20.38 14.31 L 22.26 11.45 L 20.31 9.28 L 22.92 7.02 L 22.10 4.24 L 23.00 5.33 L 20.03 8.27 L 20.19 6.87 L 22.58 9.51 L 23.00 6.61 L 23.00 7.73 L 20.29 8.97 L 18.11 7.65" />
      {children}
    </svg>
  );
});

export default ZampognaPartner;
