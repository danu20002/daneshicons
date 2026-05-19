import React from 'react';

export const iconData = {
  "id": "QuintNotice",
  "name": "QuintNotice",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.19 L 6.36 12.90 L 7.85 14.18 L 6.24 13.25 L 4.54 15.68 L 5.44 16.55 L 5.58 19.42 L 7.47 17.55 L 8.05 19.11 L 5.22 17.84 L 5.95 15.40 L 3.42 18.07 L 6.03 18.75 L 8.87 20.66 L 7.23 19.88 L 6.31 19.46 L 7.14 20.32 L 5.98 18.39 L 5.11 19.61 L 5.34 18.18 L 3.23 19.54 L 5.37 18.88 L 6.36 21.70 L 6.99 19.11 L 5.05 19.07 L 4.52 20.61"
      }
    ]
  ]
};

export const QuintNotice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.19 L 6.36 12.90 L 7.85 14.18 L 6.24 13.25 L 4.54 15.68 L 5.44 16.55 L 5.58 19.42 L 7.47 17.55 L 8.05 19.11 L 5.22 17.84 L 5.95 15.40 L 3.42 18.07 L 6.03 18.75 L 8.87 20.66 L 7.23 19.88 L 6.31 19.46 L 7.14 20.32 L 5.98 18.39 L 5.11 19.61 L 5.34 18.18 L 3.23 19.54 L 5.37 18.88 L 6.36 21.70 L 6.99 19.11 L 5.05 19.07 L 4.52 20.61" />
      {children}
    </svg>
  );
});

export default QuintNotice;
