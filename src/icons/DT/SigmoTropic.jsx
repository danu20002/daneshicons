import React from 'react';

export const iconData = {
  "id": "SigmoTropic",
  "name": "SigmoTropic",
  "category": "DT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.87 L 2.50 10.93 L 3.00 13.43 L 3.50 13.43 L 4.00 10.93 L 4.50 6.87 L 5.00 2.81 L 5.50 0.31 L 6.00 0.31 L 6.50 2.81 L 7.00 6.87 L 7.50 10.93 L 8.00 13.43 L 8.50 13.43 L 9.00 10.93 L 9.50 6.87 L 10.00 2.81 L 10.50 0.31 L 11.00 0.31 L 11.50 2.81 L 12.00 6.87 L 12.50 10.93 L 13.00 13.43 L 13.50 13.43 L 14.00 10.93 L 14.50 6.87 L 15.00 2.81 L 15.50 0.31 L 16.00 0.31 L 16.50 2.81 L 17.00 6.87 L 17.50 10.93 L 18.00 13.43 L 18.50 13.43 L 19.00 10.93 L 19.50 6.87 L 20.00 2.81 L 20.50 0.31 L 21.00 0.31 L 21.50 2.81 L 22.00 6.87"
      }
    ]
  ]
};

export const SigmoTropic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.87 L 2.50 10.93 L 3.00 13.43 L 3.50 13.43 L 4.00 10.93 L 4.50 6.87 L 5.00 2.81 L 5.50 0.31 L 6.00 0.31 L 6.50 2.81 L 7.00 6.87 L 7.50 10.93 L 8.00 13.43 L 8.50 13.43 L 9.00 10.93 L 9.50 6.87 L 10.00 2.81 L 10.50 0.31 L 11.00 0.31 L 11.50 2.81 L 12.00 6.87 L 12.50 10.93 L 13.00 13.43 L 13.50 13.43 L 14.00 10.93 L 14.50 6.87 L 15.00 2.81 L 15.50 0.31 L 16.00 0.31 L 16.50 2.81 L 17.00 6.87 L 17.50 10.93 L 18.00 13.43 L 18.50 13.43 L 19.00 10.93 L 19.50 6.87 L 20.00 2.81 L 20.50 0.31 L 21.00 0.31 L 21.50 2.81 L 22.00 6.87" />
      {children}
    </svg>
  );
});

export default SigmoTropic;
