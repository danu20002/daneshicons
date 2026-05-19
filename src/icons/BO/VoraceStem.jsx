import React from 'react';

export const iconData = {
  "id": "VoraceStem",
  "name": "VoraceStem",
  "category": "BO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.46 L 2.50 7.70 L 3.00 8.82 L 3.50 9.71 L 4.00 10.28 L 4.50 10.48 L 5.00 10.28 L 5.50 9.71 L 6.00 8.82 L 6.50 7.70 L 7.00 6.46 L 7.50 5.21 L 8.00 4.09 L 8.50 3.20 L 9.00 2.63 L 9.50 2.43 L 10.00 2.63 L 10.50 3.20 L 11.00 4.09 L 11.50 5.21 L 12.00 6.46 L 12.50 7.70 L 13.00 8.82 L 13.50 9.71 L 14.00 10.28 L 14.50 10.48 L 15.00 10.28 L 15.50 9.71 L 16.00 8.82 L 16.50 7.70 L 17.00 6.46 L 17.50 5.21 L 18.00 4.09 L 18.50 3.20 L 19.00 2.63 L 19.50 2.43 L 20.00 2.63 L 20.50 3.20 L 21.00 4.09 L 21.50 5.21 L 22.00 6.46"
      }
    ]
  ]
};

export const VoraceStem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.46 L 2.50 7.70 L 3.00 8.82 L 3.50 9.71 L 4.00 10.28 L 4.50 10.48 L 5.00 10.28 L 5.50 9.71 L 6.00 8.82 L 6.50 7.70 L 7.00 6.46 L 7.50 5.21 L 8.00 4.09 L 8.50 3.20 L 9.00 2.63 L 9.50 2.43 L 10.00 2.63 L 10.50 3.20 L 11.00 4.09 L 11.50 5.21 L 12.00 6.46 L 12.50 7.70 L 13.00 8.82 L 13.50 9.71 L 14.00 10.28 L 14.50 10.48 L 15.00 10.28 L 15.50 9.71 L 16.00 8.82 L 16.50 7.70 L 17.00 6.46 L 17.50 5.21 L 18.00 4.09 L 18.50 3.20 L 19.00 2.63 L 19.50 2.43 L 20.00 2.63 L 20.50 3.20 L 21.00 4.09 L 21.50 5.21 L 22.00 6.46" />
      {children}
    </svg>
  );
});

export default VoraceStem;
