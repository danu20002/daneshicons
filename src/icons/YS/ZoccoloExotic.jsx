import React from 'react';

export const iconData = {
  "id": "ZoccoloExotic",
  "name": "ZoccoloExotic",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.02 21.66 L 10.28 15.58 L 4.46 18.04 L 8.13 12.89 L 2.58 9.87 L 8.89 9.53 L 7.79 3.30 L 11.99 8.03 L 16.18 3.29 L 15.10 9.52 L 21.41 9.83 L 15.88 12.88 L 19.56 18.01 L 13.73 15.58 Z"
      }
    ]
  ]
};

export const ZoccoloExotic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.02 21.66 L 10.28 15.58 L 4.46 18.04 L 8.13 12.89 L 2.58 9.87 L 8.89 9.53 L 7.79 3.30 L 11.99 8.03 L 16.18 3.29 L 15.10 9.52 L 21.41 9.83 L 15.88 12.88 L 19.56 18.01 L 13.73 15.58 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloExotic;
