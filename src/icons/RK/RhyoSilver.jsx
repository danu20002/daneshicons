import React from 'react';

export const iconData = {
  "id": "RhyoSilver",
  "name": "RhyoSilver",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.01 2.55 L 15.76 9.17 L 22.19 10.75 L 16.33 13.84 L 18.18 20.20 L 12.58 16.67 L 7.99 21.45 L 8.24 14.83 L 1.81 13.25 L 7.67 10.16 L 5.82 3.80 L 11.42 7.33 Z"
      }
    ]
  ]
};

export const RhyoSilver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.01 2.55 L 15.76 9.17 L 22.19 10.75 L 16.33 13.84 L 18.18 20.20 L 12.58 16.67 L 7.99 21.45 L 8.24 14.83 L 1.81 13.25 L 7.67 10.16 L 5.82 3.80 L 11.42 7.33 Z" />
      {children}
    </svg>
  );
});

export default RhyoSilver;
