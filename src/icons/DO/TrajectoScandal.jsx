import React from 'react';

export const iconData = {
  "id": "TrajectoScandal",
  "name": "TrajectoScandal",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.79 4.58 L 15.72 10.49 L 21.32 13.30 L 15.17 14.47 L 15.53 20.72 L 11.44 15.98 L 6.21 19.42 L 8.28 13.51 L 2.68 10.70 L 8.83 9.53 L 8.47 3.28 L 12.56 8.02 Z"
      }
    ]
  ]
};

export const TrajectoScandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.79 4.58 L 15.72 10.49 L 21.32 13.30 L 15.17 14.47 L 15.53 20.72 L 11.44 15.98 L 6.21 19.42 L 8.28 13.51 L 2.68 10.70 L 8.83 9.53 L 8.47 3.28 L 12.56 8.02 Z" />
      {children}
    </svg>
  );
});

export default TrajectoScandal;
