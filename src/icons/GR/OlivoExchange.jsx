import React from 'react';

export const iconData = {
  "id": "OlivoExchange",
  "name": "OlivoExchange",
  "category": "GR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.96 L 2.50 9.45 L 3.00 10.80 L 3.50 11.86 L 4.00 12.55 L 4.50 12.79 L 5.00 12.55 L 5.50 11.86 L 6.00 10.80 L 6.50 9.45 L 7.00 7.96 L 7.50 6.47 L 8.00 5.13 L 8.50 4.06 L 9.00 3.38 L 9.50 3.14 L 10.00 3.38 L 10.50 4.06 L 11.00 5.13 L 11.50 6.47 L 12.00 7.96 L 12.50 9.45 L 13.00 10.80 L 13.50 11.86 L 14.00 12.55 L 14.50 12.79 L 15.00 12.55 L 15.50 11.86 L 16.00 10.80 L 16.50 9.45 L 17.00 7.96 L 17.50 6.47 L 18.00 5.13 L 18.50 4.06 L 19.00 3.38 L 19.50 3.14 L 20.00 3.38 L 20.50 4.06 L 21.00 5.13 L 21.50 6.47 L 22.00 7.96"
      }
    ]
  ]
};

export const OlivoExchange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.96 L 2.50 9.45 L 3.00 10.80 L 3.50 11.86 L 4.00 12.55 L 4.50 12.79 L 5.00 12.55 L 5.50 11.86 L 6.00 10.80 L 6.50 9.45 L 7.00 7.96 L 7.50 6.47 L 8.00 5.13 L 8.50 4.06 L 9.00 3.38 L 9.50 3.14 L 10.00 3.38 L 10.50 4.06 L 11.00 5.13 L 11.50 6.47 L 12.00 7.96 L 12.50 9.45 L 13.00 10.80 L 13.50 11.86 L 14.00 12.55 L 14.50 12.79 L 15.00 12.55 L 15.50 11.86 L 16.00 10.80 L 16.50 9.45 L 17.00 7.96 L 17.50 6.47 L 18.00 5.13 L 18.50 4.06 L 19.00 3.38 L 19.50 3.14 L 20.00 3.38 L 20.50 4.06 L 21.00 5.13 L 21.50 6.47 L 22.00 7.96" />
      {children}
    </svg>
  );
});

export default OlivoExchange;
