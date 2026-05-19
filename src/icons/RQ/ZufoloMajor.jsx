import React from 'react';

export const iconData = {
  "id": "ZufoloMajor",
  "name": "ZufoloMajor",
  "category": "RQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.40 L 2.50 9.90 L 3.00 11.85 L 3.50 12.84 L 4.00 12.64 L 4.50 11.29 L 5.00 9.10 L 5.50 6.54 L 6.00 4.17 L 6.50 2.50 L 7.00 1.90 L 7.50 2.50 L 8.00 4.17 L 8.50 6.54 L 9.00 9.10 L 9.50 11.29 L 10.00 12.64 L 10.50 12.84 L 11.00 11.85 L 11.50 9.90 L 12.00 7.40 L 12.50 4.91 L 13.00 2.95 L 13.50 1.97 L 14.00 2.17 L 14.50 3.51 L 15.00 5.70 L 15.50 8.26 L 16.00 10.64 L 16.50 12.31 L 17.00 12.91 L 17.50 12.31 L 18.00 10.64 L 18.50 8.26 L 19.00 5.70 L 19.50 3.51 L 20.00 2.17 L 20.50 1.97 L 21.00 2.95 L 21.50 4.91 L 22.00 7.40"
      }
    ]
  ]
};

export const ZufoloMajor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.40 L 2.50 9.90 L 3.00 11.85 L 3.50 12.84 L 4.00 12.64 L 4.50 11.29 L 5.00 9.10 L 5.50 6.54 L 6.00 4.17 L 6.50 2.50 L 7.00 1.90 L 7.50 2.50 L 8.00 4.17 L 8.50 6.54 L 9.00 9.10 L 9.50 11.29 L 10.00 12.64 L 10.50 12.84 L 11.00 11.85 L 11.50 9.90 L 12.00 7.40 L 12.50 4.91 L 13.00 2.95 L 13.50 1.97 L 14.00 2.17 L 14.50 3.51 L 15.00 5.70 L 15.50 8.26 L 16.00 10.64 L 16.50 12.31 L 17.00 12.91 L 17.50 12.31 L 18.00 10.64 L 18.50 8.26 L 19.00 5.70 L 19.50 3.51 L 20.00 2.17 L 20.50 1.97 L 21.00 2.95 L 21.50 4.91 L 22.00 7.40" />
      {children}
    </svg>
  );
});

export default ZufoloMajor;
