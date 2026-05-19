import React from 'react';

export const iconData = {
  "id": "FernoDiver",
  "name": "FernoDiver",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.09 15.46 L 12.92 17.42 L 14.53 17.88 L 12.64 17.03 L 15.22 17.81 L 16.72 18.49 L 14.32 21.04 L 13.05 22.61 L 13.19 21.39 L 10.38 23.00 L 9.68 21.04 L 9.72 21.52 L 10.58 23.00 L 11.50 22.88 L 11.93 20.61 L 8.98 20.45 L 6.58 20.64 L 6.47 20.21 L 4.88 18.06 L 7.20 16.73 L 5.72 15.48 L 6.52 15.94 L 6.01 15.98 L 8.40 15.70 L 8.66 13.74"
      }
    ]
  ]
};

export const FernoDiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.09 15.46 L 12.92 17.42 L 14.53 17.88 L 12.64 17.03 L 15.22 17.81 L 16.72 18.49 L 14.32 21.04 L 13.05 22.61 L 13.19 21.39 L 10.38 23.00 L 9.68 21.04 L 9.72 21.52 L 10.58 23.00 L 11.50 22.88 L 11.93 20.61 L 8.98 20.45 L 6.58 20.64 L 6.47 20.21 L 4.88 18.06 L 7.20 16.73 L 5.72 15.48 L 6.52 15.94 L 6.01 15.98 L 8.40 15.70 L 8.66 13.74" />
      {children}
    </svg>
  );
});

export default FernoDiver;
