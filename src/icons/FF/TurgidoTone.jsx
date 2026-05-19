import React from 'react';

export const iconData = {
  "id": "TurgidoTone",
  "name": "TurgidoTone",
  "category": "FF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.04 L 2.50 10.14 L 3.00 12.68 L 3.50 12.68 L 4.00 10.14 L 4.50 6.04 L 5.00 1.94 L 5.50 -0.59 L 6.00 -0.59 L 6.50 1.94 L 7.00 6.04 L 7.50 10.14 L 8.00 12.68 L 8.50 12.68 L 9.00 10.14 L 9.50 6.04 L 10.00 1.94 L 10.50 -0.59 L 11.00 -0.59 L 11.50 1.94 L 12.00 6.04 L 12.50 10.14 L 13.00 12.68 L 13.50 12.68 L 14.00 10.14 L 14.50 6.04 L 15.00 1.94 L 15.50 -0.59 L 16.00 -0.59 L 16.50 1.94 L 17.00 6.04 L 17.50 10.14 L 18.00 12.68 L 18.50 12.68 L 19.00 10.14 L 19.50 6.04 L 20.00 1.94 L 20.50 -0.59 L 21.00 -0.59 L 21.50 1.94 L 22.00 6.04"
      }
    ]
  ]
};

export const TurgidoTone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.04 L 2.50 10.14 L 3.00 12.68 L 3.50 12.68 L 4.00 10.14 L 4.50 6.04 L 5.00 1.94 L 5.50 -0.59 L 6.00 -0.59 L 6.50 1.94 L 7.00 6.04 L 7.50 10.14 L 8.00 12.68 L 8.50 12.68 L 9.00 10.14 L 9.50 6.04 L 10.00 1.94 L 10.50 -0.59 L 11.00 -0.59 L 11.50 1.94 L 12.00 6.04 L 12.50 10.14 L 13.00 12.68 L 13.50 12.68 L 14.00 10.14 L 14.50 6.04 L 15.00 1.94 L 15.50 -0.59 L 16.00 -0.59 L 16.50 1.94 L 17.00 6.04 L 17.50 10.14 L 18.00 12.68 L 18.50 12.68 L 19.00 10.14 L 19.50 6.04 L 20.00 1.94 L 20.50 -0.59 L 21.00 -0.59 L 21.50 1.94 L 22.00 6.04" />
      {children}
    </svg>
  );
});

export default TurgidoTone;
