import React from 'react';

export const iconData = {
  "id": "EquiPropeller",
  "name": "EquiPropeller",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.86 10.39 L 4.68 13.18 L 6.84 15.55 L 4.02 16.19 L 2.65 14.44 L 5.26 15.45 L 7.71 13.55 L 5.05 14.48 L 6.70 17.39 L 6.03 19.39 L 8.98 22.36 L 10.53 20.25 L 12.37 20.76 L 11.03 23.00 L 8.98 23.00 L 9.31 23.00 L 8.81 23.00"
      }
    ]
  ]
};

export const EquiPropeller = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.86 10.39 L 4.68 13.18 L 6.84 15.55 L 4.02 16.19 L 2.65 14.44 L 5.26 15.45 L 7.71 13.55 L 5.05 14.48 L 6.70 17.39 L 6.03 19.39 L 8.98 22.36 L 10.53 20.25 L 12.37 20.76 L 11.03 23.00 L 8.98 23.00 L 9.31 23.00 L 8.81 23.00" />
      {children}
    </svg>
  );
});

export default EquiPropeller;
