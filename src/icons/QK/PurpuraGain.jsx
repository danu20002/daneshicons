import React from 'react';

export const iconData = {
  "id": "PurpuraGain",
  "name": "PurpuraGain",
  "category": "QK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.53 15.96 L 21.14 13.64 L 22.98 16.13 L 23.00 14.51 L 22.82 12.59 L 22.18 11.53 L 19.66 9.88 L 21.04 10.21 L 19.87 7.96 L 19.62 5.16 L 20.34 4.89 L 20.93 4.73 L 21.32 2.24 L 20.96 1.12 L 21.78 3.81 L 22.93 6.07"
      }
    ]
  ]
};

export const PurpuraGain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.53 15.96 L 21.14 13.64 L 22.98 16.13 L 23.00 14.51 L 22.82 12.59 L 22.18 11.53 L 19.66 9.88 L 21.04 10.21 L 19.87 7.96 L 19.62 5.16 L 20.34 4.89 L 20.93 4.73 L 21.32 2.24 L 20.96 1.12 L 21.78 3.81 L 22.93 6.07" />
      {children}
    </svg>
  );
});

export default PurpuraGain;
