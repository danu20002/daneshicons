import React from 'react';

export const iconData = {
  "id": "TrocleaSpend",
  "name": "TrocleaSpend",
  "category": "ZR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.19 L 2.50 7.75 L 3.00 9.16 L 3.50 10.27 L 4.00 10.99 L 4.50 11.24 L 5.00 10.99 L 5.50 10.27 L 6.00 9.16 L 6.50 7.75 L 7.00 6.19 L 7.50 4.64 L 8.00 3.23 L 8.50 2.12 L 9.00 1.40 L 9.50 1.15 L 10.00 1.40 L 10.50 2.12 L 11.00 3.23 L 11.50 4.64 L 12.00 6.19 L 12.50 7.75 L 13.00 9.16 L 13.50 10.27 L 14.00 10.99 L 14.50 11.24 L 15.00 10.99 L 15.50 10.27 L 16.00 9.16 L 16.50 7.75 L 17.00 6.19 L 17.50 4.64 L 18.00 3.23 L 18.50 2.12 L 19.00 1.40 L 19.50 1.15 L 20.00 1.40 L 20.50 2.12 L 21.00 3.23 L 21.50 4.64 L 22.00 6.19"
      }
    ]
  ]
};

export const TrocleaSpend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.19 L 2.50 7.75 L 3.00 9.16 L 3.50 10.27 L 4.00 10.99 L 4.50 11.24 L 5.00 10.99 L 5.50 10.27 L 6.00 9.16 L 6.50 7.75 L 7.00 6.19 L 7.50 4.64 L 8.00 3.23 L 8.50 2.12 L 9.00 1.40 L 9.50 1.15 L 10.00 1.40 L 10.50 2.12 L 11.00 3.23 L 11.50 4.64 L 12.00 6.19 L 12.50 7.75 L 13.00 9.16 L 13.50 10.27 L 14.00 10.99 L 14.50 11.24 L 15.00 10.99 L 15.50 10.27 L 16.00 9.16 L 16.50 7.75 L 17.00 6.19 L 17.50 4.64 L 18.00 3.23 L 18.50 2.12 L 19.00 1.40 L 19.50 1.15 L 20.00 1.40 L 20.50 2.12 L 21.00 3.23 L 21.50 4.64 L 22.00 6.19" />
      {children}
    </svg>
  );
});

export default TrocleaSpend;
