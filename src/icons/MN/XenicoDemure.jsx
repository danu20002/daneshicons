import React from 'react';

export const iconData = {
  "id": "XenicoDemure",
  "name": "XenicoDemure",
  "category": "MN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.91 L 2.50 8.18 L 3.00 9.32 L 3.50 10.23 L 4.00 10.81 L 4.50 11.01 L 5.00 10.81 L 5.50 10.23 L 6.00 9.32 L 6.50 8.18 L 7.00 6.91 L 7.50 5.64 L 8.00 4.49 L 8.50 3.59 L 9.00 3.00 L 9.50 2.80 L 10.00 3.00 L 10.50 3.59 L 11.00 4.49 L 11.50 5.64 L 12.00 6.91 L 12.50 8.18 L 13.00 9.32 L 13.50 10.23 L 14.00 10.81 L 14.50 11.01 L 15.00 10.81 L 15.50 10.23 L 16.00 9.32 L 16.50 8.18 L 17.00 6.91 L 17.50 5.64 L 18.00 4.49 L 18.50 3.59 L 19.00 3.00 L 19.50 2.80 L 20.00 3.00 L 20.50 3.59 L 21.00 4.49 L 21.50 5.64 L 22.00 6.91"
      }
    ]
  ]
};

export const XenicoDemure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.91 L 2.50 8.18 L 3.00 9.32 L 3.50 10.23 L 4.00 10.81 L 4.50 11.01 L 5.00 10.81 L 5.50 10.23 L 6.00 9.32 L 6.50 8.18 L 7.00 6.91 L 7.50 5.64 L 8.00 4.49 L 8.50 3.59 L 9.00 3.00 L 9.50 2.80 L 10.00 3.00 L 10.50 3.59 L 11.00 4.49 L 11.50 5.64 L 12.00 6.91 L 12.50 8.18 L 13.00 9.32 L 13.50 10.23 L 14.00 10.81 L 14.50 11.01 L 15.00 10.81 L 15.50 10.23 L 16.00 9.32 L 16.50 8.18 L 17.00 6.91 L 17.50 5.64 L 18.00 4.49 L 18.50 3.59 L 19.00 3.00 L 19.50 2.80 L 20.00 3.00 L 20.50 3.59 L 21.00 4.49 L 21.50 5.64 L 22.00 6.91" />
      {children}
    </svg>
  );
});

export default XenicoDemure;
