import React from 'react';

export const iconData = {
  "id": "SemiHabit",
  "name": "SemiHabit",
  "category": "ID",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.40 L 2.50 9.29 L 3.00 11.56 L 3.50 12.70 L 4.00 12.46 L 4.50 10.91 L 5.00 8.37 L 5.50 5.40 L 6.00 2.65 L 6.50 0.71 L 7.00 0.02 L 7.50 0.71 L 8.00 2.65 L 8.50 5.40 L 9.00 8.37 L 9.50 10.91 L 10.00 12.46 L 10.50 12.70 L 11.00 11.56 L 11.50 9.29 L 12.00 6.40 L 12.50 3.50 L 13.00 1.24 L 13.50 0.10 L 14.00 0.33 L 14.50 1.89 L 15.00 4.43 L 15.50 7.39 L 16.00 10.15 L 16.50 12.08 L 17.00 12.78 L 17.50 12.08 L 18.00 10.15 L 18.50 7.39 L 19.00 4.43 L 19.50 1.89 L 20.00 0.33 L 20.50 0.10 L 21.00 1.24 L 21.50 3.50 L 22.00 6.40"
      }
    ]
  ]
};

export const SemiHabit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.40 L 2.50 9.29 L 3.00 11.56 L 3.50 12.70 L 4.00 12.46 L 4.50 10.91 L 5.00 8.37 L 5.50 5.40 L 6.00 2.65 L 6.50 0.71 L 7.00 0.02 L 7.50 0.71 L 8.00 2.65 L 8.50 5.40 L 9.00 8.37 L 9.50 10.91 L 10.00 12.46 L 10.50 12.70 L 11.00 11.56 L 11.50 9.29 L 12.00 6.40 L 12.50 3.50 L 13.00 1.24 L 13.50 0.10 L 14.00 0.33 L 14.50 1.89 L 15.00 4.43 L 15.50 7.39 L 16.00 10.15 L 16.50 12.08 L 17.00 12.78 L 17.50 12.08 L 18.00 10.15 L 18.50 7.39 L 19.00 4.43 L 19.50 1.89 L 20.00 0.33 L 20.50 0.10 L 21.00 1.24 L 21.50 3.50 L 22.00 6.40" />
      {children}
    </svg>
  );
});

export default SemiHabit;
