import React from 'react';

export const iconData = {
  "id": "ThermoGame",
  "name": "ThermoGame",
  "category": "EM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.33 L 2.50 9.83 L 3.00 11.79 L 3.50 12.77 L 4.00 12.57 L 4.50 11.23 L 5.00 9.03 L 5.50 6.47 L 6.00 4.09 L 6.50 2.42 L 7.00 1.82 L 7.50 2.42 L 8.00 4.09 L 8.50 6.47 L 9.00 9.03 L 9.50 11.23 L 10.00 12.57 L 10.50 12.77 L 11.00 11.79 L 11.50 9.83 L 12.00 7.33 L 12.50 4.83 L 13.00 2.87 L 13.50 1.89 L 14.00 2.09 L 14.50 3.44 L 15.00 5.63 L 15.50 8.19 L 16.00 10.57 L 16.50 12.24 L 17.00 12.84 L 17.50 12.24 L 18.00 10.57 L 18.50 8.19 L 19.00 5.63 L 19.50 3.44 L 20.00 2.09 L 20.50 1.89 L 21.00 2.87 L 21.50 4.83 L 22.00 7.33"
      }
    ]
  ]
};

export const ThermoGame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.33 L 2.50 9.83 L 3.00 11.79 L 3.50 12.77 L 4.00 12.57 L 4.50 11.23 L 5.00 9.03 L 5.50 6.47 L 6.00 4.09 L 6.50 2.42 L 7.00 1.82 L 7.50 2.42 L 8.00 4.09 L 8.50 6.47 L 9.00 9.03 L 9.50 11.23 L 10.00 12.57 L 10.50 12.77 L 11.00 11.79 L 11.50 9.83 L 12.00 7.33 L 12.50 4.83 L 13.00 2.87 L 13.50 1.89 L 14.00 2.09 L 14.50 3.44 L 15.00 5.63 L 15.50 8.19 L 16.00 10.57 L 16.50 12.24 L 17.00 12.84 L 17.50 12.24 L 18.00 10.57 L 18.50 8.19 L 19.00 5.63 L 19.50 3.44 L 20.00 2.09 L 20.50 1.89 L 21.00 2.87 L 21.50 4.83 L 22.00 7.33" />
      {children}
    </svg>
  );
});

export default ThermoGame;
