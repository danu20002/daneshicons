import React from 'react';

export const iconData = {
  "id": "FissioDwarf",
  "name": "FissioDwarf",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.88 L 2.50 9.92 L 3.00 11.53 L 3.50 12.33 L 4.00 12.17 L 4.50 11.07 L 5.00 9.27 L 5.50 7.17 L 6.00 5.23 L 6.50 3.86 L 7.00 3.37 L 7.50 3.86 L 8.00 5.23 L 8.50 7.17 L 9.00 9.27 L 9.50 11.07 L 10.00 12.17 L 10.50 12.33 L 11.00 11.53 L 11.50 9.92 L 12.00 7.88 L 12.50 5.83 L 13.00 4.23 L 13.50 3.42 L 14.00 3.59 L 14.50 4.69 L 15.00 6.48 L 15.50 8.58 L 16.00 10.53 L 16.50 11.89 L 17.00 12.39 L 17.50 11.89 L 18.00 10.53 L 18.50 8.58 L 19.00 6.48 L 19.50 4.69 L 20.00 3.59 L 20.50 3.42 L 21.00 4.23 L 21.50 5.83 L 22.00 7.88"
      }
    ]
  ]
};

export const FissioDwarf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.88 L 2.50 9.92 L 3.00 11.53 L 3.50 12.33 L 4.00 12.17 L 4.50 11.07 L 5.00 9.27 L 5.50 7.17 L 6.00 5.23 L 6.50 3.86 L 7.00 3.37 L 7.50 3.86 L 8.00 5.23 L 8.50 7.17 L 9.00 9.27 L 9.50 11.07 L 10.00 12.17 L 10.50 12.33 L 11.00 11.53 L 11.50 9.92 L 12.00 7.88 L 12.50 5.83 L 13.00 4.23 L 13.50 3.42 L 14.00 3.59 L 14.50 4.69 L 15.00 6.48 L 15.50 8.58 L 16.00 10.53 L 16.50 11.89 L 17.00 12.39 L 17.50 11.89 L 18.00 10.53 L 18.50 8.58 L 19.00 6.48 L 19.50 4.69 L 20.00 3.59 L 20.50 3.42 L 21.00 4.23 L 21.50 5.83 L 22.00 7.88" />
      {children}
    </svg>
  );
});

export default FissioDwarf;
