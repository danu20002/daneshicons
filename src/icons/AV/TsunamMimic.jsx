import React from 'react';

export const iconData = {
  "id": "TsunamMimic",
  "name": "TsunamMimic",
  "category": "AV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.50 L 2.50 8.77 L 3.00 10.54 L 3.50 11.44 L 4.00 11.25 L 4.50 10.03 L 5.00 8.05 L 5.50 5.72 L 6.00 3.56 L 6.50 2.05 L 7.00 1.50 L 7.50 2.05 L 8.00 3.56 L 8.50 5.72 L 9.00 8.05 L 9.50 10.03 L 10.00 11.25 L 10.50 11.44 L 11.00 10.54 L 11.50 8.77 L 12.00 6.50 L 12.50 4.23 L 13.00 2.46 L 13.50 1.56 L 14.00 1.75 L 14.50 2.97 L 15.00 4.96 L 15.50 7.28 L 16.00 9.44 L 16.50 10.95 L 17.00 11.50 L 17.50 10.95 L 18.00 9.44 L 18.50 7.28 L 19.00 4.96 L 19.50 2.97 L 20.00 1.75 L 20.50 1.56 L 21.00 2.46 L 21.50 4.23 L 22.00 6.50"
      }
    ]
  ]
};

export const TsunamMimic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.50 L 2.50 8.77 L 3.00 10.54 L 3.50 11.44 L 4.00 11.25 L 4.50 10.03 L 5.00 8.05 L 5.50 5.72 L 6.00 3.56 L 6.50 2.05 L 7.00 1.50 L 7.50 2.05 L 8.00 3.56 L 8.50 5.72 L 9.00 8.05 L 9.50 10.03 L 10.00 11.25 L 10.50 11.44 L 11.00 10.54 L 11.50 8.77 L 12.00 6.50 L 12.50 4.23 L 13.00 2.46 L 13.50 1.56 L 14.00 1.75 L 14.50 2.97 L 15.00 4.96 L 15.50 7.28 L 16.00 9.44 L 16.50 10.95 L 17.00 11.50 L 17.50 10.95 L 18.00 9.44 L 18.50 7.28 L 19.00 4.96 L 19.50 2.97 L 20.00 1.75 L 20.50 1.56 L 21.00 2.46 L 21.50 4.23 L 22.00 6.50" />
      {children}
    </svg>
  );
});

export default TsunamMimic;
