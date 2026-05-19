import React from 'react';

export const iconData = {
  "id": "MagniFrenzy",
  "name": "MagniFrenzy",
  "category": "FY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.42 L 2.50 10.30 L 3.00 12.09 L 3.50 12.09 L 4.00 10.30 L 4.50 7.42 L 5.00 4.54 L 5.50 2.75 L 6.00 2.75 L 6.50 4.54 L 7.00 7.42 L 7.50 10.30 L 8.00 12.09 L 8.50 12.09 L 9.00 10.30 L 9.50 7.42 L 10.00 4.54 L 10.50 2.75 L 11.00 2.75 L 11.50 4.54 L 12.00 7.42 L 12.50 10.30 L 13.00 12.09 L 13.50 12.09 L 14.00 10.30 L 14.50 7.42 L 15.00 4.54 L 15.50 2.75 L 16.00 2.75 L 16.50 4.54 L 17.00 7.42 L 17.50 10.30 L 18.00 12.09 L 18.50 12.09 L 19.00 10.30 L 19.50 7.42 L 20.00 4.54 L 20.50 2.75 L 21.00 2.75 L 21.50 4.54 L 22.00 7.42"
      }
    ]
  ]
};

export const MagniFrenzy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.42 L 2.50 10.30 L 3.00 12.09 L 3.50 12.09 L 4.00 10.30 L 4.50 7.42 L 5.00 4.54 L 5.50 2.75 L 6.00 2.75 L 6.50 4.54 L 7.00 7.42 L 7.50 10.30 L 8.00 12.09 L 8.50 12.09 L 9.00 10.30 L 9.50 7.42 L 10.00 4.54 L 10.50 2.75 L 11.00 2.75 L 11.50 4.54 L 12.00 7.42 L 12.50 10.30 L 13.00 12.09 L 13.50 12.09 L 14.00 10.30 L 14.50 7.42 L 15.00 4.54 L 15.50 2.75 L 16.00 2.75 L 16.50 4.54 L 17.00 7.42 L 17.50 10.30 L 18.00 12.09 L 18.50 12.09 L 19.00 10.30 L 19.50 7.42 L 20.00 4.54 L 20.50 2.75 L 21.00 2.75 L 21.50 4.54 L 22.00 7.42" />
      {children}
    </svg>
  );
});

export default MagniFrenzy;
