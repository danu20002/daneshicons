import React from 'react';

export const iconData = {
  "id": "PlutoTorso",
  "name": "PlutoTorso",
  "category": "ID",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.31 L 2.50 8.43 L 3.00 9.44 L 3.50 10.24 L 4.00 10.76 L 4.50 10.93 L 5.00 10.76 L 5.50 10.24 L 6.00 9.44 L 6.50 8.43 L 7.00 7.31 L 7.50 6.19 L 8.00 5.17 L 8.50 4.37 L 9.00 3.86 L 9.50 3.68 L 10.00 3.86 L 10.50 4.37 L 11.00 5.17 L 11.50 6.19 L 12.00 7.31 L 12.50 8.43 L 13.00 9.44 L 13.50 10.24 L 14.00 10.76 L 14.50 10.93 L 15.00 10.76 L 15.50 10.24 L 16.00 9.44 L 16.50 8.43 L 17.00 7.31 L 17.50 6.19 L 18.00 5.17 L 18.50 4.37 L 19.00 3.86 L 19.50 3.68 L 20.00 3.86 L 20.50 4.37 L 21.00 5.17 L 21.50 6.19 L 22.00 7.31"
      }
    ]
  ]
};

export const PlutoTorso = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.31 L 2.50 8.43 L 3.00 9.44 L 3.50 10.24 L 4.00 10.76 L 4.50 10.93 L 5.00 10.76 L 5.50 10.24 L 6.00 9.44 L 6.50 8.43 L 7.00 7.31 L 7.50 6.19 L 8.00 5.17 L 8.50 4.37 L 9.00 3.86 L 9.50 3.68 L 10.00 3.86 L 10.50 4.37 L 11.00 5.17 L 11.50 6.19 L 12.00 7.31 L 12.50 8.43 L 13.00 9.44 L 13.50 10.24 L 14.00 10.76 L 14.50 10.93 L 15.00 10.76 L 15.50 10.24 L 16.00 9.44 L 16.50 8.43 L 17.00 7.31 L 17.50 6.19 L 18.00 5.17 L 18.50 4.37 L 19.00 3.86 L 19.50 3.68 L 20.00 3.86 L 20.50 4.37 L 21.00 5.17 L 21.50 6.19 L 22.00 7.31" />
      {children}
    </svg>
  );
});

export default PlutoTorso;
