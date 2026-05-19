import React from 'react';

export const iconData = {
  "id": "PelvoSix",
  "name": "PelvoSix",
  "category": "KI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.89 L 2.50 9.00 L 3.00 10.31 L 3.50 10.31 L 4.00 9.00 L 4.50 6.89 L 5.00 4.77 L 5.50 3.46 L 6.00 3.46 L 6.50 4.77 L 7.00 6.89 L 7.50 9.00 L 8.00 10.31 L 8.50 10.31 L 9.00 9.00 L 9.50 6.89 L 10.00 4.77 L 10.50 3.46 L 11.00 3.46 L 11.50 4.77 L 12.00 6.89 L 12.50 9.00 L 13.00 10.31 L 13.50 10.31 L 14.00 9.00 L 14.50 6.89 L 15.00 4.77 L 15.50 3.46 L 16.00 3.46 L 16.50 4.77 L 17.00 6.89 L 17.50 9.00 L 18.00 10.31 L 18.50 10.31 L 19.00 9.00 L 19.50 6.89 L 20.00 4.77 L 20.50 3.46 L 21.00 3.46 L 21.50 4.77 L 22.00 6.89"
      }
    ]
  ]
};

export const PelvoSix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.89 L 2.50 9.00 L 3.00 10.31 L 3.50 10.31 L 4.00 9.00 L 4.50 6.89 L 5.00 4.77 L 5.50 3.46 L 6.00 3.46 L 6.50 4.77 L 7.00 6.89 L 7.50 9.00 L 8.00 10.31 L 8.50 10.31 L 9.00 9.00 L 9.50 6.89 L 10.00 4.77 L 10.50 3.46 L 11.00 3.46 L 11.50 4.77 L 12.00 6.89 L 12.50 9.00 L 13.00 10.31 L 13.50 10.31 L 14.00 9.00 L 14.50 6.89 L 15.00 4.77 L 15.50 3.46 L 16.00 3.46 L 16.50 4.77 L 17.00 6.89 L 17.50 9.00 L 18.00 10.31 L 18.50 10.31 L 19.00 9.00 L 19.50 6.89 L 20.00 4.77 L 20.50 3.46 L 21.00 3.46 L 21.50 4.77 L 22.00 6.89" />
      {children}
    </svg>
  );
});

export default PelvoSix;
