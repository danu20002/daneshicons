import React from 'react';

export const iconData = {
  "id": "GalvoSterling",
  "name": "GalvoSterling",
  "category": "AV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.61 L 2.50 8.75 L 3.00 10.43 L 3.50 11.27 L 4.00 11.10 L 4.50 9.95 L 5.00 8.07 L 5.50 5.87 L 6.00 3.83 L 6.50 2.40 L 7.00 1.89 L 7.50 2.40 L 8.00 3.83 L 8.50 5.87 L 9.00 8.07 L 9.50 9.95 L 10.00 11.10 L 10.50 11.27 L 11.00 10.43 L 11.50 8.75 L 12.00 6.61 L 12.50 4.47 L 13.00 2.79 L 13.50 1.95 L 14.00 2.12 L 14.50 3.27 L 15.00 5.15 L 15.50 7.35 L 16.00 9.39 L 16.50 10.82 L 17.00 11.33 L 17.50 10.82 L 18.00 9.39 L 18.50 7.35 L 19.00 5.15 L 19.50 3.27 L 20.00 2.12 L 20.50 1.95 L 21.00 2.79 L 21.50 4.47 L 22.00 6.61"
      }
    ]
  ]
};

export const GalvoSterling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.61 L 2.50 8.75 L 3.00 10.43 L 3.50 11.27 L 4.00 11.10 L 4.50 9.95 L 5.00 8.07 L 5.50 5.87 L 6.00 3.83 L 6.50 2.40 L 7.00 1.89 L 7.50 2.40 L 8.00 3.83 L 8.50 5.87 L 9.00 8.07 L 9.50 9.95 L 10.00 11.10 L 10.50 11.27 L 11.00 10.43 L 11.50 8.75 L 12.00 6.61 L 12.50 4.47 L 13.00 2.79 L 13.50 1.95 L 14.00 2.12 L 14.50 3.27 L 15.00 5.15 L 15.50 7.35 L 16.00 9.39 L 16.50 10.82 L 17.00 11.33 L 17.50 10.82 L 18.00 9.39 L 18.50 7.35 L 19.00 5.15 L 19.50 3.27 L 20.00 2.12 L 20.50 1.95 L 21.00 2.79 L 21.50 4.47 L 22.00 6.61" />
      {children}
    </svg>
  );
});

export default GalvoSterling;
