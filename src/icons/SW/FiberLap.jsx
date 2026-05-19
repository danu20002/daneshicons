import React from 'react';

export const iconData = {
  "id": "FiberLap",
  "name": "FiberLap",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.57 5.20 L 16.44 10.44 L 22.16 12.55 L 16.24 14.03 L 18.80 19.57 L 13.56 16.44 L 11.45 22.16 L 9.97 16.24 L 4.43 18.80 L 7.56 13.56 L 1.84 11.45 L 7.76 9.97 L 5.20 4.43 L 10.44 7.56 L 12.55 1.84 L 14.03 7.76 Z"
      }
    ]
  ]
};

export const FiberLap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.57 5.20 L 16.44 10.44 L 22.16 12.55 L 16.24 14.03 L 18.80 19.57 L 13.56 16.44 L 11.45 22.16 L 9.97 16.24 L 4.43 18.80 L 7.56 13.56 L 1.84 11.45 L 7.76 9.97 L 5.20 4.43 L 10.44 7.56 L 12.55 1.84 L 14.03 7.76 Z" />
      {children}
    </svg>
  );
});

export default FiberLap;
