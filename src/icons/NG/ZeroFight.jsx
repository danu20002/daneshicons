import React from 'react';

export const iconData = {
  "id": "ZeroFight",
  "name": "ZeroFight",
  "category": "NG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.04 L 2.50 9.11 L 3.00 10.98 L 3.50 12.47 L 4.00 13.42 L 4.50 13.75 L 5.00 13.42 L 5.50 12.47 L 6.00 10.98 L 6.50 9.11 L 7.00 7.04 L 7.50 4.97 L 8.00 3.10 L 8.50 1.61 L 9.00 0.66 L 9.50 0.33 L 10.00 0.66 L 10.50 1.61 L 11.00 3.10 L 11.50 4.97 L 12.00 7.04 L 12.50 9.11 L 13.00 10.98 L 13.50 12.47 L 14.00 13.42 L 14.50 13.75 L 15.00 13.42 L 15.50 12.47 L 16.00 10.98 L 16.50 9.11 L 17.00 7.04 L 17.50 4.97 L 18.00 3.10 L 18.50 1.61 L 19.00 0.66 L 19.50 0.33 L 20.00 0.66 L 20.50 1.61 L 21.00 3.10 L 21.50 4.97 L 22.00 7.04"
      }
    ]
  ]
};

export const ZeroFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.04 L 2.50 9.11 L 3.00 10.98 L 3.50 12.47 L 4.00 13.42 L 4.50 13.75 L 5.00 13.42 L 5.50 12.47 L 6.00 10.98 L 6.50 9.11 L 7.00 7.04 L 7.50 4.97 L 8.00 3.10 L 8.50 1.61 L 9.00 0.66 L 9.50 0.33 L 10.00 0.66 L 10.50 1.61 L 11.00 3.10 L 11.50 4.97 L 12.00 7.04 L 12.50 9.11 L 13.00 10.98 L 13.50 12.47 L 14.00 13.42 L 14.50 13.75 L 15.00 13.42 L 15.50 12.47 L 16.00 10.98 L 16.50 9.11 L 17.00 7.04 L 17.50 4.97 L 18.00 3.10 L 18.50 1.61 L 19.00 0.66 L 19.50 0.33 L 20.00 0.66 L 20.50 1.61 L 21.00 3.10 L 21.50 4.97 L 22.00 7.04" />
      {children}
    </svg>
  );
});

export default ZeroFight;
