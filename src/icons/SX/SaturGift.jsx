import React from 'react';

export const iconData = {
  "id": "SaturGift",
  "name": "SaturGift",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.60 4.00 L 11.37 7.87 L 15.73 2.46 L 15.26 9.39 L 22.13 10.46 L 15.89 13.52 L 18.40 20.00 L 12.63 16.13 L 8.27 21.54 L 8.74 14.61 L 1.87 13.54 L 8.11 10.48 Z"
      }
    ]
  ]
};

export const SaturGift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.60 4.00 L 11.37 7.87 L 15.73 2.46 L 15.26 9.39 L 22.13 10.46 L 15.89 13.52 L 18.40 20.00 L 12.63 16.13 L 8.27 21.54 L 8.74 14.61 L 1.87 13.54 L 8.11 10.48 Z" />
      {children}
    </svg>
  );
});

export default SaturGift;
