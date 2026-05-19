import React from 'react';

export const iconData = {
  "id": "ZurigoReward",
  "name": "ZurigoReward",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.63 1.56 L 14.81 7.92 L 21.18 6.76 L 16.95 11.65 L 21.82 15.91 L 15.36 15.65 L 15.06 22.12 L 11.24 16.90 L 6.00 20.70 L 7.69 14.46 L 1.46 12.74 L 7.39 10.16 L 4.85 4.22 L 10.56 7.25 Z"
      }
    ]
  ]
};

export const ZurigoReward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.63 1.56 L 14.81 7.92 L 21.18 6.76 L 16.95 11.65 L 21.82 15.91 L 15.36 15.65 L 15.06 22.12 L 11.24 16.90 L 6.00 20.70 L 7.69 14.46 L 1.46 12.74 L 7.39 10.16 L 4.85 4.22 L 10.56 7.25 Z" />
      {children}
    </svg>
  );
});

export default ZurigoReward;
