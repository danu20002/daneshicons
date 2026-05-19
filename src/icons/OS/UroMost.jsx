import React from 'react';

export const iconData = {
  "id": "UroMost",
  "name": "UroMost",
  "category": "OS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.76 L 2.50 9.78 L 3.00 11.03 L 3.50 11.03 L 4.00 9.78 L 4.50 7.76 L 5.00 5.75 L 5.50 4.50 L 6.00 4.50 L 6.50 5.75 L 7.00 7.76 L 7.50 9.78 L 8.00 11.03 L 8.50 11.03 L 9.00 9.78 L 9.50 7.76 L 10.00 5.75 L 10.50 4.50 L 11.00 4.50 L 11.50 5.75 L 12.00 7.76 L 12.50 9.78 L 13.00 11.03 L 13.50 11.03 L 14.00 9.78 L 14.50 7.76 L 15.00 5.75 L 15.50 4.50 L 16.00 4.50 L 16.50 5.75 L 17.00 7.76 L 17.50 9.78 L 18.00 11.03 L 18.50 11.03 L 19.00 9.78 L 19.50 7.76 L 20.00 5.75 L 20.50 4.50 L 21.00 4.50 L 21.50 5.75 L 22.00 7.76"
      }
    ]
  ]
};

export const UroMost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.76 L 2.50 9.78 L 3.00 11.03 L 3.50 11.03 L 4.00 9.78 L 4.50 7.76 L 5.00 5.75 L 5.50 4.50 L 6.00 4.50 L 6.50 5.75 L 7.00 7.76 L 7.50 9.78 L 8.00 11.03 L 8.50 11.03 L 9.00 9.78 L 9.50 7.76 L 10.00 5.75 L 10.50 4.50 L 11.00 4.50 L 11.50 5.75 L 12.00 7.76 L 12.50 9.78 L 13.00 11.03 L 13.50 11.03 L 14.00 9.78 L 14.50 7.76 L 15.00 5.75 L 15.50 4.50 L 16.00 4.50 L 16.50 5.75 L 17.00 7.76 L 17.50 9.78 L 18.00 11.03 L 18.50 11.03 L 19.00 9.78 L 19.50 7.76 L 20.00 5.75 L 20.50 4.50 L 21.00 4.50 L 21.50 5.75 L 22.00 7.76" />
      {children}
    </svg>
  );
});

export default UroMost;
