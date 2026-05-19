import React from 'react';

export const iconData = {
  "id": "FantoPrairie",
  "name": "FantoPrairie",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.52 20.43 L 13.97 22.19 L 13.10 22.20 L 10.82 19.50 L 13.17 19.38 L 13.09 18.18 L 15.02 19.70 L 12.91 18.95 L 14.63 16.74 L 12.39 17.20 L 9.77 14.88 L 7.30 13.81 L 9.00 16.22 L 7.38 17.03 L 6.93 18.55 L 4.53 18.09 L 5.40 17.49 L 3.28 16.63 L 1.93 16.63 L 1.00 18.17 L 1.00 15.75 L 1.00 17.32 L 3.29 15.49 L 1.00 15.53 L 1.00 14.31 L 1.00 16.91 L 3.64 17.80 L 2.26 15.21 L 1.00 13.76 L 1.00 12.70"
      }
    ]
  ]
};

export const FantoPrairie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.52 20.43 L 13.97 22.19 L 13.10 22.20 L 10.82 19.50 L 13.17 19.38 L 13.09 18.18 L 15.02 19.70 L 12.91 18.95 L 14.63 16.74 L 12.39 17.20 L 9.77 14.88 L 7.30 13.81 L 9.00 16.22 L 7.38 17.03 L 6.93 18.55 L 4.53 18.09 L 5.40 17.49 L 3.28 16.63 L 1.93 16.63 L 1.00 18.17 L 1.00 15.75 L 1.00 17.32 L 3.29 15.49 L 1.00 15.53 L 1.00 14.31 L 1.00 16.91 L 3.64 17.80 L 2.26 15.21 L 1.00 13.76 L 1.00 12.70" />
      {children}
    </svg>
  );
});

export default FantoPrairie;
