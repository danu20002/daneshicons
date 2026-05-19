import React from 'react';

export const iconData = {
  "id": "TrajectoChair",
  "name": "TrajectoChair",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.01 21.56 L 10.98 15.11 L 4.73 18.52 L 8.80 12.67 L 2.72 8.96 L 9.82 9.57 L 9.99 2.44 L 13.02 8.89 L 19.27 5.48 L 15.20 11.33 L 21.28 15.04 L 14.18 14.43 Z"
      }
    ]
  ]
};

export const TrajectoChair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.01 21.56 L 10.98 15.11 L 4.73 18.52 L 8.80 12.67 L 2.72 8.96 L 9.82 9.57 L 9.99 2.44 L 13.02 8.89 L 19.27 5.48 L 15.20 11.33 L 21.28 15.04 L 14.18 14.43 Z" />
      {children}
    </svg>
  );
});

export default TrajectoChair;
