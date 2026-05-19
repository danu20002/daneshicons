import React from 'react';

export const iconData = {
  "id": "VolleyCrane",
  "name": "VolleyCrane",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.57 20.54 L 13.96 22.40 L 14.62 23.00 L 15.79 23.00 L 18.58 23.00 L 20.73 20.14 L 19.24 19.03 L 22.22 18.01 L 21.59 19.28 L 20.47 20.82 L 18.90 21.36 L 18.44 21.34 L 19.20 21.76 L 17.99 20.26 L 19.93 19.81 L 17.80 19.09 L 16.89 17.30 L 18.47 14.88 L 18.40 12.52 L 17.08 15.02 L 16.05 14.38 L 14.15 14.30 L 13.39 13.34 L 11.45 10.98"
      }
    ]
  ]
};

export const VolleyCrane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.57 20.54 L 13.96 22.40 L 14.62 23.00 L 15.79 23.00 L 18.58 23.00 L 20.73 20.14 L 19.24 19.03 L 22.22 18.01 L 21.59 19.28 L 20.47 20.82 L 18.90 21.36 L 18.44 21.34 L 19.20 21.76 L 17.99 20.26 L 19.93 19.81 L 17.80 19.09 L 16.89 17.30 L 18.47 14.88 L 18.40 12.52 L 17.08 15.02 L 16.05 14.38 L 14.15 14.30 L 13.39 13.34 L 11.45 10.98" />
      {children}
    </svg>
  );
});

export default VolleyCrane;
