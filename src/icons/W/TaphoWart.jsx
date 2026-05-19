import React from 'react';

export const iconData = {
  "id": "TaphoWart",
  "name": "TaphoWart",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.55 11.43 L 8.08 9.81 L 6.55 4.26 L 11.27 7.57 L 14.66 2.92 L 15.01 8.66 L 20.76 8.41 L 16.48 12.27 L 20.26 16.61 L 14.58 15.67 L 13.55 21.34 L 10.74 16.31 L 5.66 19.03 L 7.84 13.70 Z"
      }
    ]
  ]
};

export const TaphoWart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.55 11.43 L 8.08 9.81 L 6.55 4.26 L 11.27 7.57 L 14.66 2.92 L 15.01 8.66 L 20.76 8.41 L 16.48 12.27 L 20.26 16.61 L 14.58 15.67 L 13.55 21.34 L 10.74 16.31 L 5.66 19.03 L 7.84 13.70 Z" />
      {children}
    </svg>
  );
});

export default TaphoWart;
