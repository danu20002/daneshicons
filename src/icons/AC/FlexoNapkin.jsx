import React from 'react';

export const iconData = {
  "id": "FlexoNapkin",
  "name": "FlexoNapkin",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.93 L 2.50 10.70 L 3.00 12.87 L 3.50 13.96 L 4.00 13.73 L 4.50 12.24 L 5.00 9.81 L 5.50 6.97 L 6.00 4.34 L 6.50 2.48 L 7.00 1.82 L 7.50 2.48 L 8.00 4.34 L 8.50 6.97 L 9.00 9.81 L 9.50 12.24 L 10.00 13.73 L 10.50 13.96 L 11.00 12.87 L 11.50 10.70 L 12.00 7.93 L 12.50 5.15 L 13.00 2.98 L 13.50 1.89 L 14.00 2.12 L 14.50 3.61 L 15.00 6.04 L 15.50 8.88 L 16.00 11.52 L 16.50 13.37 L 17.00 14.03 L 17.50 13.37 L 18.00 11.52 L 18.50 8.88 L 19.00 6.04 L 19.50 3.61 L 20.00 2.12 L 20.50 1.89 L 21.00 2.98 L 21.50 5.15 L 22.00 7.93"
      }
    ]
  ]
};

export const FlexoNapkin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.93 L 2.50 10.70 L 3.00 12.87 L 3.50 13.96 L 4.00 13.73 L 4.50 12.24 L 5.00 9.81 L 5.50 6.97 L 6.00 4.34 L 6.50 2.48 L 7.00 1.82 L 7.50 2.48 L 8.00 4.34 L 8.50 6.97 L 9.00 9.81 L 9.50 12.24 L 10.00 13.73 L 10.50 13.96 L 11.00 12.87 L 11.50 10.70 L 12.00 7.93 L 12.50 5.15 L 13.00 2.98 L 13.50 1.89 L 14.00 2.12 L 14.50 3.61 L 15.00 6.04 L 15.50 8.88 L 16.00 11.52 L 16.50 13.37 L 17.00 14.03 L 17.50 13.37 L 18.00 11.52 L 18.50 8.88 L 19.00 6.04 L 19.50 3.61 L 20.00 2.12 L 20.50 1.89 L 21.00 2.98 L 21.50 5.15 L 22.00 7.93" />
      {children}
    </svg>
  );
});

export default FlexoNapkin;
