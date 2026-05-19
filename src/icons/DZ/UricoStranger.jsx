import React from 'react';

export const iconData = {
  "id": "UricoStranger",
  "name": "UricoStranger",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.43 3.03 L 17.52 1.00 L 19.13 3.34 L 21.46 1.69 L 21.92 2.07 L 21.00 3.66 L 21.62 1.00 L 23.00 1.00 L 22.46 1.00 L 22.77 1.00 L 21.26 1.00 L 23.00 2.82 L 23.00 1.13 L 20.08 1.00 L 22.15 1.11 L 22.65 1.66 L 22.55 3.02 L 20.85 3.07 L 23.00 1.00 L 21.26 2.82 L 21.66 1.70 L 23.00 3.92 L 23.00 4.30 L 23.00 5.02 L 20.27 3.12 L 21.92 4.82 L 23.00 5.85 L 21.88 7.61 L 22.42 6.18"
      }
    ]
  ]
};

export const UricoStranger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.43 3.03 L 17.52 1.00 L 19.13 3.34 L 21.46 1.69 L 21.92 2.07 L 21.00 3.66 L 21.62 1.00 L 23.00 1.00 L 22.46 1.00 L 22.77 1.00 L 21.26 1.00 L 23.00 2.82 L 23.00 1.13 L 20.08 1.00 L 22.15 1.11 L 22.65 1.66 L 22.55 3.02 L 20.85 3.07 L 23.00 1.00 L 21.26 2.82 L 21.66 1.70 L 23.00 3.92 L 23.00 4.30 L 23.00 5.02 L 20.27 3.12 L 21.92 4.82 L 23.00 5.85 L 21.88 7.61 L 22.42 6.18" />
      {children}
    </svg>
  );
});

export default UricoStranger;
