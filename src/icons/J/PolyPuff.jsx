import React from 'react';

export const iconData = {
  "id": "PolyPuff",
  "name": "PolyPuff",
  "category": "J",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.79 L 2.50 9.70 L 3.00 11.42 L 3.50 12.79 L 4.00 13.67 L 4.50 13.97 L 5.00 13.67 L 5.50 12.79 L 6.00 11.42 L 6.50 9.70 L 7.00 7.79 L 7.50 5.88 L 8.00 4.16 L 8.50 2.79 L 9.00 1.91 L 9.50 1.61 L 10.00 1.91 L 10.50 2.79 L 11.00 4.16 L 11.50 5.88 L 12.00 7.79 L 12.50 9.70 L 13.00 11.42 L 13.50 12.79 L 14.00 13.67 L 14.50 13.97 L 15.00 13.67 L 15.50 12.79 L 16.00 11.42 L 16.50 9.70 L 17.00 7.79 L 17.50 5.88 L 18.00 4.16 L 18.50 2.79 L 19.00 1.91 L 19.50 1.61 L 20.00 1.91 L 20.50 2.79 L 21.00 4.16 L 21.50 5.88 L 22.00 7.79"
      }
    ]
  ]
};

export const PolyPuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.79 L 2.50 9.70 L 3.00 11.42 L 3.50 12.79 L 4.00 13.67 L 4.50 13.97 L 5.00 13.67 L 5.50 12.79 L 6.00 11.42 L 6.50 9.70 L 7.00 7.79 L 7.50 5.88 L 8.00 4.16 L 8.50 2.79 L 9.00 1.91 L 9.50 1.61 L 10.00 1.91 L 10.50 2.79 L 11.00 4.16 L 11.50 5.88 L 12.00 7.79 L 12.50 9.70 L 13.00 11.42 L 13.50 12.79 L 14.00 13.67 L 14.50 13.97 L 15.00 13.67 L 15.50 12.79 L 16.00 11.42 L 16.50 9.70 L 17.00 7.79 L 17.50 5.88 L 18.00 4.16 L 18.50 2.79 L 19.00 1.91 L 19.50 1.61 L 20.00 1.91 L 20.50 2.79 L 21.00 4.16 L 21.50 5.88 L 22.00 7.79" />
      {children}
    </svg>
  );
});

export default PolyPuff;
