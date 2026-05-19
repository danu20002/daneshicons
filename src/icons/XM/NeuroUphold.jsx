import React from 'react';

export const iconData = {
  "id": "NeuroUphold",
  "name": "NeuroUphold",
  "category": "XM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.43 L 2.50 9.54 L 3.00 10.85 L 3.50 10.85 L 4.00 9.54 L 4.50 7.43 L 5.00 5.31 L 5.50 4.01 L 6.00 4.01 L 6.50 5.31 L 7.00 7.43 L 7.50 9.54 L 8.00 10.85 L 8.50 10.85 L 9.00 9.54 L 9.50 7.43 L 10.00 5.31 L 10.50 4.01 L 11.00 4.01 L 11.50 5.31 L 12.00 7.43 L 12.50 9.54 L 13.00 10.85 L 13.50 10.85 L 14.00 9.54 L 14.50 7.43 L 15.00 5.31 L 15.50 4.01 L 16.00 4.01 L 16.50 5.31 L 17.00 7.43 L 17.50 9.54 L 18.00 10.85 L 18.50 10.85 L 19.00 9.54 L 19.50 7.43 L 20.00 5.31 L 20.50 4.01 L 21.00 4.01 L 21.50 5.31 L 22.00 7.43"
      }
    ]
  ]
};

export const NeuroUphold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.43 L 2.50 9.54 L 3.00 10.85 L 3.50 10.85 L 4.00 9.54 L 4.50 7.43 L 5.00 5.31 L 5.50 4.01 L 6.00 4.01 L 6.50 5.31 L 7.00 7.43 L 7.50 9.54 L 8.00 10.85 L 8.50 10.85 L 9.00 9.54 L 9.50 7.43 L 10.00 5.31 L 10.50 4.01 L 11.00 4.01 L 11.50 5.31 L 12.00 7.43 L 12.50 9.54 L 13.00 10.85 L 13.50 10.85 L 14.00 9.54 L 14.50 7.43 L 15.00 5.31 L 15.50 4.01 L 16.00 4.01 L 16.50 5.31 L 17.00 7.43 L 17.50 9.54 L 18.00 10.85 L 18.50 10.85 L 19.00 9.54 L 19.50 7.43 L 20.00 5.31 L 20.50 4.01 L 21.00 4.01 L 21.50 5.31 L 22.00 7.43" />
      {children}
    </svg>
  );
});

export default NeuroUphold;
