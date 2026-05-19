import React from 'react';

export const iconData = {
  "id": "RhyoTariff",
  "name": "RhyoTariff",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.33 15.54 L 14.19 17.43 L 8.46 20.33 L 6.57 14.19 L 3.67 8.46 L 9.81 6.57 L 15.54 3.67 L 17.43 9.81 Z"
      }
    ]
  ]
};

export const RhyoTariff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.33 15.54 L 14.19 17.43 L 8.46 20.33 L 6.57 14.19 L 3.67 8.46 L 9.81 6.57 L 15.54 3.67 L 17.43 9.81 Z" />
      {children}
    </svg>
  );
});

export default RhyoTariff;
