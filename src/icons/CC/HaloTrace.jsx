import React from 'react';

export const iconData = {
  "id": "HaloTrace",
  "name": "HaloTrace",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 5.60 L 17.76 11.43 L 22.00 16.53 L 15.37 16.71 L 13.08 22.93 L 9.61 17.27 L 3.07 18.40 L 6.24 12.57 L 2.00 7.47 L 8.63 7.29 L 10.92 1.07 L 14.39 6.73 Z"
      }
    ]
  ]
};

export const HaloTrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 5.60 L 17.76 11.43 L 22.00 16.53 L 15.37 16.71 L 13.08 22.93 L 9.61 17.27 L 3.07 18.40 L 6.24 12.57 L 2.00 7.47 L 8.63 7.29 L 10.92 1.07 L 14.39 6.73 Z" />
      {children}
    </svg>
  );
});

export default HaloTrace;
