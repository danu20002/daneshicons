import React from 'react';

export const iconData = {
  "id": "TurrisOscillate",
  "name": "TurrisOscillate",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.92 5.04 L 18.07 4.18 L 15.92 2.36 L 14.37 2.87 L 16.23 4.21 L 14.01 1.35 L 12.51 1.00 L 14.09 1.00 L 15.97 1.93 L 16.92 3.68 L 17.87 3.17 L 17.68 3.88 L 15.92 5.39 L 18.10 8.33 L 19.10 7.81 L 19.27 6.56 L 18.32 3.88 L 19.96 5.42 L 20.47 4.09 L 22.00 2.20 L 21.55 3.17 L 23.00 1.31 L 22.12 1.27 L 21.25 3.25 L 19.77 1.84 L 20.78 1.00 L 18.28 1.92 L 18.36 3.90 L 17.12 4.47 L 17.72 1.97 L 16.01 1.21 L 17.76 1.00 L 19.89 1.00 L 21.86 1.00 L 20.75 1.00 L 22.06 2.49"
      }
    ]
  ]
};

export const TurrisOscillate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.92 5.04 L 18.07 4.18 L 15.92 2.36 L 14.37 2.87 L 16.23 4.21 L 14.01 1.35 L 12.51 1.00 L 14.09 1.00 L 15.97 1.93 L 16.92 3.68 L 17.87 3.17 L 17.68 3.88 L 15.92 5.39 L 18.10 8.33 L 19.10 7.81 L 19.27 6.56 L 18.32 3.88 L 19.96 5.42 L 20.47 4.09 L 22.00 2.20 L 21.55 3.17 L 23.00 1.31 L 22.12 1.27 L 21.25 3.25 L 19.77 1.84 L 20.78 1.00 L 18.28 1.92 L 18.36 3.90 L 17.12 4.47 L 17.72 1.97 L 16.01 1.21 L 17.76 1.00 L 19.89 1.00 L 21.86 1.00 L 20.75 1.00 L 22.06 2.49" />
      {children}
    </svg>
  );
});

export default TurrisOscillate;
