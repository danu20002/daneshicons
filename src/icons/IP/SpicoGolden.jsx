import React from 'react';

export const iconData = {
  "id": "SpicoGolden",
  "name": "SpicoGolden",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.28 20.20 L 4.52 15.76 L 4.39 8.50 L 10.00 3.87 L 17.11 5.36 L 20.38 11.86 L 17.33 18.46 Z"
      }
    ]
  ]
};

export const SpicoGolden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.28 20.20 L 4.52 15.76 L 4.39 8.50 L 10.00 3.87 L 17.11 5.36 L 20.38 11.86 L 17.33 18.46 Z" />
      {children}
    </svg>
  );
});

export default SpicoGolden;
