import React from 'react';

export const iconData = {
  "id": "VeraceExhibit",
  "name": "VeraceExhibit",
  "category": "ID",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.93 L 2.50 8.66 L 3.00 10.21 L 3.50 11.45 L 4.00 12.24 L 4.50 12.51 L 5.00 12.24 L 5.50 11.45 L 6.00 10.21 L 6.50 8.66 L 7.00 6.93 L 7.50 5.21 L 8.00 3.65 L 8.50 2.41 L 9.00 1.62 L 9.50 1.35 L 10.00 1.62 L 10.50 2.41 L 11.00 3.65 L 11.50 5.21 L 12.00 6.93 L 12.50 8.66 L 13.00 10.21 L 13.50 11.45 L 14.00 12.24 L 14.50 12.51 L 15.00 12.24 L 15.50 11.45 L 16.00 10.21 L 16.50 8.66 L 17.00 6.93 L 17.50 5.21 L 18.00 3.65 L 18.50 2.41 L 19.00 1.62 L 19.50 1.35 L 20.00 1.62 L 20.50 2.41 L 21.00 3.65 L 21.50 5.21 L 22.00 6.93"
      }
    ]
  ]
};

export const VeraceExhibit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.93 L 2.50 8.66 L 3.00 10.21 L 3.50 11.45 L 4.00 12.24 L 4.50 12.51 L 5.00 12.24 L 5.50 11.45 L 6.00 10.21 L 6.50 8.66 L 7.00 6.93 L 7.50 5.21 L 8.00 3.65 L 8.50 2.41 L 9.00 1.62 L 9.50 1.35 L 10.00 1.62 L 10.50 2.41 L 11.00 3.65 L 11.50 5.21 L 12.00 6.93 L 12.50 8.66 L 13.00 10.21 L 13.50 11.45 L 14.00 12.24 L 14.50 12.51 L 15.00 12.24 L 15.50 11.45 L 16.00 10.21 L 16.50 8.66 L 17.00 6.93 L 17.50 5.21 L 18.00 3.65 L 18.50 2.41 L 19.00 1.62 L 19.50 1.35 L 20.00 1.62 L 20.50 2.41 L 21.00 3.65 L 21.50 5.21 L 22.00 6.93" />
      {children}
    </svg>
  );
});

export default VeraceExhibit;
