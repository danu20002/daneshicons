import React from 'react';

export const iconData = {
  "id": "PavoSwear",
  "name": "PavoSwear",
  "category": "QX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.84 L 2.50 10.75 L 3.00 12.54 L 3.50 12.54 L 4.00 10.75 L 4.50 7.84 L 5.00 4.94 L 5.50 3.14 L 6.00 3.14 L 6.50 4.94 L 7.00 7.84 L 7.50 10.75 L 8.00 12.54 L 8.50 12.54 L 9.00 10.75 L 9.50 7.84 L 10.00 4.94 L 10.50 3.14 L 11.00 3.14 L 11.50 4.94 L 12.00 7.84 L 12.50 10.75 L 13.00 12.54 L 13.50 12.54 L 14.00 10.75 L 14.50 7.84 L 15.00 4.94 L 15.50 3.14 L 16.00 3.14 L 16.50 4.94 L 17.00 7.84 L 17.50 10.75 L 18.00 12.54 L 18.50 12.54 L 19.00 10.75 L 19.50 7.84 L 20.00 4.94 L 20.50 3.14 L 21.00 3.14 L 21.50 4.94 L 22.00 7.84"
      }
    ]
  ]
};

export const PavoSwear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.84 L 2.50 10.75 L 3.00 12.54 L 3.50 12.54 L 4.00 10.75 L 4.50 7.84 L 5.00 4.94 L 5.50 3.14 L 6.00 3.14 L 6.50 4.94 L 7.00 7.84 L 7.50 10.75 L 8.00 12.54 L 8.50 12.54 L 9.00 10.75 L 9.50 7.84 L 10.00 4.94 L 10.50 3.14 L 11.00 3.14 L 11.50 4.94 L 12.00 7.84 L 12.50 10.75 L 13.00 12.54 L 13.50 12.54 L 14.00 10.75 L 14.50 7.84 L 15.00 4.94 L 15.50 3.14 L 16.00 3.14 L 16.50 4.94 L 17.00 7.84 L 17.50 10.75 L 18.00 12.54 L 18.50 12.54 L 19.00 10.75 L 19.50 7.84 L 20.00 4.94 L 20.50 3.14 L 21.00 3.14 L 21.50 4.94 L 22.00 7.84" />
      {children}
    </svg>
  );
});

export default PavoSwear;
