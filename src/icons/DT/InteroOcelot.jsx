import React from 'react';

export const iconData = {
  "id": "InteroOcelot",
  "name": "InteroOcelot",
  "category": "DT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.60 L 2.50 8.15 L 3.00 9.56 L 3.50 10.67 L 4.00 11.38 L 4.50 11.63 L 5.00 11.38 L 5.50 10.67 L 6.00 9.56 L 6.50 8.15 L 7.00 6.60 L 7.50 5.04 L 8.00 3.64 L 8.50 2.52 L 9.00 1.81 L 9.50 1.56 L 10.00 1.81 L 10.50 2.52 L 11.00 3.64 L 11.50 5.04 L 12.00 6.60 L 12.50 8.15 L 13.00 9.56 L 13.50 10.67 L 14.00 11.38 L 14.50 11.63 L 15.00 11.38 L 15.50 10.67 L 16.00 9.56 L 16.50 8.15 L 17.00 6.60 L 17.50 5.04 L 18.00 3.64 L 18.50 2.52 L 19.00 1.81 L 19.50 1.56 L 20.00 1.81 L 20.50 2.52 L 21.00 3.64 L 21.50 5.04 L 22.00 6.60"
      }
    ]
  ]
};

export const InteroOcelot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.60 L 2.50 8.15 L 3.00 9.56 L 3.50 10.67 L 4.00 11.38 L 4.50 11.63 L 5.00 11.38 L 5.50 10.67 L 6.00 9.56 L 6.50 8.15 L 7.00 6.60 L 7.50 5.04 L 8.00 3.64 L 8.50 2.52 L 9.00 1.81 L 9.50 1.56 L 10.00 1.81 L 10.50 2.52 L 11.00 3.64 L 11.50 5.04 L 12.00 6.60 L 12.50 8.15 L 13.00 9.56 L 13.50 10.67 L 14.00 11.38 L 14.50 11.63 L 15.00 11.38 L 15.50 10.67 L 16.00 9.56 L 16.50 8.15 L 17.00 6.60 L 17.50 5.04 L 18.00 3.64 L 18.50 2.52 L 19.00 1.81 L 19.50 1.56 L 20.00 1.81 L 20.50 2.52 L 21.00 3.64 L 21.50 5.04 L 22.00 6.60" />
      {children}
    </svg>
  );
});

export default InteroOcelot;
