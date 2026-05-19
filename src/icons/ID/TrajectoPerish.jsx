import React from 'react';

export const iconData = {
  "id": "TrajectoPerish",
  "name": "TrajectoPerish",
  "category": "ID",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.65 L 2.50 11.50 L 3.00 13.88 L 3.50 13.88 L 4.00 11.50 L 4.50 7.65 L 5.00 3.80 L 5.50 1.42 L 6.00 1.42 L 6.50 3.80 L 7.00 7.65 L 7.50 11.50 L 8.00 13.88 L 8.50 13.88 L 9.00 11.50 L 9.50 7.65 L 10.00 3.80 L 10.50 1.42 L 11.00 1.42 L 11.50 3.80 L 12.00 7.65 L 12.50 11.50 L 13.00 13.88 L 13.50 13.88 L 14.00 11.50 L 14.50 7.65 L 15.00 3.80 L 15.50 1.42 L 16.00 1.42 L 16.50 3.80 L 17.00 7.65 L 17.50 11.50 L 18.00 13.88 L 18.50 13.88 L 19.00 11.50 L 19.50 7.65 L 20.00 3.80 L 20.50 1.42 L 21.00 1.42 L 21.50 3.80 L 22.00 7.65"
      }
    ]
  ]
};

export const TrajectoPerish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.65 L 2.50 11.50 L 3.00 13.88 L 3.50 13.88 L 4.00 11.50 L 4.50 7.65 L 5.00 3.80 L 5.50 1.42 L 6.00 1.42 L 6.50 3.80 L 7.00 7.65 L 7.50 11.50 L 8.00 13.88 L 8.50 13.88 L 9.00 11.50 L 9.50 7.65 L 10.00 3.80 L 10.50 1.42 L 11.00 1.42 L 11.50 3.80 L 12.00 7.65 L 12.50 11.50 L 13.00 13.88 L 13.50 13.88 L 14.00 11.50 L 14.50 7.65 L 15.00 3.80 L 15.50 1.42 L 16.00 1.42 L 16.50 3.80 L 17.00 7.65 L 17.50 11.50 L 18.00 13.88 L 18.50 13.88 L 19.00 11.50 L 19.50 7.65 L 20.00 3.80 L 20.50 1.42 L 21.00 1.42 L 21.50 3.80 L 22.00 7.65" />
      {children}
    </svg>
  );
});

export default TrajectoPerish;
