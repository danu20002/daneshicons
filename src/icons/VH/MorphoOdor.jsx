import React from 'react';

export const iconData = {
  "id": "MorphoOdor",
  "name": "MorphoOdor",
  "category": "VH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.69 L 2.50 8.76 L 3.00 10.38 L 3.50 11.20 L 4.00 11.03 L 4.50 9.92 L 5.00 8.10 L 5.50 5.97 L 6.00 4.00 L 6.50 2.62 L 7.00 2.12 L 7.50 2.62 L 8.00 4.00 L 8.50 5.97 L 9.00 8.10 L 9.50 9.92 L 10.00 11.03 L 10.50 11.20 L 11.00 10.38 L 11.50 8.76 L 12.00 6.69 L 12.50 4.61 L 13.00 2.99 L 13.50 2.18 L 14.00 2.34 L 14.50 3.46 L 15.00 5.28 L 15.50 7.40 L 16.00 9.37 L 16.50 10.76 L 17.00 11.25 L 17.50 10.76 L 18.00 9.37 L 18.50 7.40 L 19.00 5.28 L 19.50 3.46 L 20.00 2.34 L 20.50 2.18 L 21.00 2.99 L 21.50 4.61 L 22.00 6.69"
      }
    ]
  ]
};

export const MorphoOdor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.69 L 2.50 8.76 L 3.00 10.38 L 3.50 11.20 L 4.00 11.03 L 4.50 9.92 L 5.00 8.10 L 5.50 5.97 L 6.00 4.00 L 6.50 2.62 L 7.00 2.12 L 7.50 2.62 L 8.00 4.00 L 8.50 5.97 L 9.00 8.10 L 9.50 9.92 L 10.00 11.03 L 10.50 11.20 L 11.00 10.38 L 11.50 8.76 L 12.00 6.69 L 12.50 4.61 L 13.00 2.99 L 13.50 2.18 L 14.00 2.34 L 14.50 3.46 L 15.00 5.28 L 15.50 7.40 L 16.00 9.37 L 16.50 10.76 L 17.00 11.25 L 17.50 10.76 L 18.00 9.37 L 18.50 7.40 L 19.00 5.28 L 19.50 3.46 L 20.00 2.34 L 20.50 2.18 L 21.00 2.99 L 21.50 4.61 L 22.00 6.69" />
      {children}
    </svg>
  );
});

export default MorphoOdor;
