import React from 'react';

export const iconData = {
  "id": "TricloSpy",
  "name": "TricloSpy",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 17.98 L 7.22 19.34 L 7.07 18.89 L 5.29 21.11 L 3.17 20.23 L 6.00 19.76 L 3.86 18.27 L 1.27 18.05 L 2.18 19.02 L 4.87 18.84 L 2.07 16.60 L 4.02 17.40 L 2.06 16.85 L 1.49 18.64 L 4.46 19.75 L 6.45 21.43 L 6.87 18.86 L 5.86 17.44 L 3.42 20.06 L 1.89 19.52 L 2.60 21.66 L 4.92 21.42 L 3.07 19.19 L 2.58 16.82 L 3.33 18.56 L 2.75 19.08 L 3.55 17.95 L 5.40 16.39"
      }
    ]
  ]
};

export const TricloSpy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 17.98 L 7.22 19.34 L 7.07 18.89 L 5.29 21.11 L 3.17 20.23 L 6.00 19.76 L 3.86 18.27 L 1.27 18.05 L 2.18 19.02 L 4.87 18.84 L 2.07 16.60 L 4.02 17.40 L 2.06 16.85 L 1.49 18.64 L 4.46 19.75 L 6.45 21.43 L 6.87 18.86 L 5.86 17.44 L 3.42 20.06 L 1.89 19.52 L 2.60 21.66 L 4.92 21.42 L 3.07 19.19 L 2.58 16.82 L 3.33 18.56 L 2.75 19.08 L 3.55 17.95 L 5.40 16.39" />
      {children}
    </svg>
  );
});

export default TricloSpy;
