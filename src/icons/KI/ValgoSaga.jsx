import React from 'react';

export const iconData = {
  "id": "ValgoSaga",
  "name": "ValgoSaga",
  "category": "KI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.21 L 2.50 8.81 L 3.00 10.06 L 3.50 10.69 L 4.00 10.56 L 4.50 9.70 L 5.00 8.30 L 5.50 6.66 L 6.00 5.14 L 6.50 4.07 L 7.00 3.68 L 7.50 4.07 L 8.00 5.14 L 8.50 6.66 L 9.00 8.30 L 9.50 9.70 L 10.00 10.56 L 10.50 10.69 L 11.00 10.06 L 11.50 8.81 L 12.00 7.21 L 12.50 5.61 L 13.00 4.36 L 13.50 3.73 L 14.00 3.86 L 14.50 4.72 L 15.00 6.12 L 15.50 7.76 L 16.00 9.28 L 16.50 10.35 L 17.00 10.74 L 17.50 10.35 L 18.00 9.28 L 18.50 7.76 L 19.00 6.12 L 19.50 4.72 L 20.00 3.86 L 20.50 3.73 L 21.00 4.36 L 21.50 5.61 L 22.00 7.21"
      }
    ]
  ]
};

export const ValgoSaga = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.21 L 2.50 8.81 L 3.00 10.06 L 3.50 10.69 L 4.00 10.56 L 4.50 9.70 L 5.00 8.30 L 5.50 6.66 L 6.00 5.14 L 6.50 4.07 L 7.00 3.68 L 7.50 4.07 L 8.00 5.14 L 8.50 6.66 L 9.00 8.30 L 9.50 9.70 L 10.00 10.56 L 10.50 10.69 L 11.00 10.06 L 11.50 8.81 L 12.00 7.21 L 12.50 5.61 L 13.00 4.36 L 13.50 3.73 L 14.00 3.86 L 14.50 4.72 L 15.00 6.12 L 15.50 7.76 L 16.00 9.28 L 16.50 10.35 L 17.00 10.74 L 17.50 10.35 L 18.00 9.28 L 18.50 7.76 L 19.00 6.12 L 19.50 4.72 L 20.00 3.86 L 20.50 3.73 L 21.00 4.36 L 21.50 5.61 L 22.00 7.21" />
      {children}
    </svg>
  );
});

export default ValgoSaga;
