import React from 'react';

export const iconData = {
  "id": "TroficoEmblem",
  "name": "TroficoEmblem",
  "category": "HK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.79 L 2.50 10.50 L 3.00 12.61 L 3.50 13.68 L 4.00 13.46 L 4.50 12.00 L 5.00 9.63 L 5.50 6.86 L 6.00 4.29 L 6.50 2.48 L 7.00 1.83 L 7.50 2.48 L 8.00 4.29 L 8.50 6.86 L 9.00 9.63 L 9.50 12.00 L 10.00 13.46 L 10.50 13.68 L 11.00 12.61 L 11.50 10.50 L 12.00 7.79 L 12.50 5.08 L 13.00 2.97 L 13.50 1.90 L 14.00 2.12 L 14.50 3.58 L 15.00 5.95 L 15.50 8.72 L 16.00 11.29 L 16.50 13.10 L 17.00 13.75 L 17.50 13.10 L 18.00 11.29 L 18.50 8.72 L 19.00 5.95 L 19.50 3.58 L 20.00 2.12 L 20.50 1.90 L 21.00 2.97 L 21.50 5.08 L 22.00 7.79"
      }
    ]
  ]
};

export const TroficoEmblem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.79 L 2.50 10.50 L 3.00 12.61 L 3.50 13.68 L 4.00 13.46 L 4.50 12.00 L 5.00 9.63 L 5.50 6.86 L 6.00 4.29 L 6.50 2.48 L 7.00 1.83 L 7.50 2.48 L 8.00 4.29 L 8.50 6.86 L 9.00 9.63 L 9.50 12.00 L 10.00 13.46 L 10.50 13.68 L 11.00 12.61 L 11.50 10.50 L 12.00 7.79 L 12.50 5.08 L 13.00 2.97 L 13.50 1.90 L 14.00 2.12 L 14.50 3.58 L 15.00 5.95 L 15.50 8.72 L 16.00 11.29 L 16.50 13.10 L 17.00 13.75 L 17.50 13.10 L 18.00 11.29 L 18.50 8.72 L 19.00 5.95 L 19.50 3.58 L 20.00 2.12 L 20.50 1.90 L 21.00 2.97 L 21.50 5.08 L 22.00 7.79" />
      {children}
    </svg>
  );
});

export default TroficoEmblem;
