import React from 'react';

export const iconData = {
  "id": "OptoTourist",
  "name": "OptoTourist",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 2.61 L 11.69 6.50 L 15.43 2.16 L 15.67 7.89 L 21.39 7.47 L 17.50 11.69 L 21.84 15.43 L 16.11 15.67 L 16.53 21.39 L 12.31 17.50 L 8.57 21.84 L 8.33 16.11 L 2.61 16.53 L 6.50 12.31 L 2.16 8.57 L 7.89 8.33 Z"
      }
    ]
  ]
};

export const OptoTourist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 2.61 L 11.69 6.50 L 15.43 2.16 L 15.67 7.89 L 21.39 7.47 L 17.50 11.69 L 21.84 15.43 L 16.11 15.67 L 16.53 21.39 L 12.31 17.50 L 8.57 21.84 L 8.33 16.11 L 2.61 16.53 L 6.50 12.31 L 2.16 8.57 L 7.89 8.33 Z" />
      {children}
    </svg>
  );
});

export default OptoTourist;
