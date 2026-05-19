import React from 'react';

export const iconData = {
  "id": "PeriRuby",
  "name": "PeriRuby",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.86 19.23 L 13.49 19.09 L 11.93 19.11 L 9.74 17.82 L 7.38 20.02 L 7.95 19.50 L 8.71 19.42 L 11.41 18.32 L 11.84 20.51 L 14.55 22.17 L 15.47 21.38 L 12.69 23.00 L 12.96 23.00 L 12.27 23.00 L 12.77 20.37 L 11.18 20.84 L 13.93 17.87 L 16.82 14.93 L 16.98 15.88 L 16.57 18.40 L 15.89 20.45 L 18.61 18.52 L 15.95 19.15 L 17.27 18.25 L 19.12 18.07 L 18.58 17.51"
      }
    ]
  ]
};

export const PeriRuby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.86 19.23 L 13.49 19.09 L 11.93 19.11 L 9.74 17.82 L 7.38 20.02 L 7.95 19.50 L 8.71 19.42 L 11.41 18.32 L 11.84 20.51 L 14.55 22.17 L 15.47 21.38 L 12.69 23.00 L 12.96 23.00 L 12.27 23.00 L 12.77 20.37 L 11.18 20.84 L 13.93 17.87 L 16.82 14.93 L 16.98 15.88 L 16.57 18.40 L 15.89 20.45 L 18.61 18.52 L 15.95 19.15 L 17.27 18.25 L 19.12 18.07 L 18.58 17.51" />
      {children}
    </svg>
  );
});

export default PeriRuby;
