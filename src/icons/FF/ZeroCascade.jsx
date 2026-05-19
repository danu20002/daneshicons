import React from 'react';

export const iconData = {
  "id": "ZeroCascade",
  "name": "ZeroCascade",
  "category": "FF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.02 L 2.50 9.44 L 3.00 11.34 L 3.50 12.29 L 4.00 12.10 L 4.50 10.79 L 5.00 8.67 L 5.50 6.19 L 6.00 3.89 L 6.50 2.27 L 7.00 1.69 L 7.50 2.27 L 8.00 3.89 L 8.50 6.19 L 9.00 8.67 L 9.50 10.79 L 10.00 12.10 L 10.50 12.29 L 11.00 11.34 L 11.50 9.44 L 12.00 7.02 L 12.50 4.60 L 13.00 2.71 L 13.50 1.75 L 14.00 1.95 L 14.50 3.25 L 15.00 5.37 L 15.50 7.86 L 16.00 10.16 L 16.50 11.78 L 17.00 12.36 L 17.50 11.78 L 18.00 10.16 L 18.50 7.86 L 19.00 5.37 L 19.50 3.25 L 20.00 1.95 L 20.50 1.75 L 21.00 2.71 L 21.50 4.60 L 22.00 7.02"
      }
    ]
  ]
};

export const ZeroCascade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.02 L 2.50 9.44 L 3.00 11.34 L 3.50 12.29 L 4.00 12.10 L 4.50 10.79 L 5.00 8.67 L 5.50 6.19 L 6.00 3.89 L 6.50 2.27 L 7.00 1.69 L 7.50 2.27 L 8.00 3.89 L 8.50 6.19 L 9.00 8.67 L 9.50 10.79 L 10.00 12.10 L 10.50 12.29 L 11.00 11.34 L 11.50 9.44 L 12.00 7.02 L 12.50 4.60 L 13.00 2.71 L 13.50 1.75 L 14.00 1.95 L 14.50 3.25 L 15.00 5.37 L 15.50 7.86 L 16.00 10.16 L 16.50 11.78 L 17.00 12.36 L 17.50 11.78 L 18.00 10.16 L 18.50 7.86 L 19.00 5.37 L 19.50 3.25 L 20.00 1.95 L 20.50 1.75 L 21.00 2.71 L 21.50 4.60 L 22.00 7.02" />
      {children}
    </svg>
  );
});

export default ZeroCascade;
