import React from 'react';

export const iconData = {
  "id": "VivajoOffend",
  "name": "VivajoOffend",
  "category": "QE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.45 L 2.50 8.66 L 3.00 10.03 L 3.50 10.03 L 4.00 8.66 L 4.50 6.45 L 5.00 4.23 L 5.50 2.86 L 6.00 2.86 L 6.50 4.23 L 7.00 6.45 L 7.50 8.66 L 8.00 10.03 L 8.50 10.03 L 9.00 8.66 L 9.50 6.45 L 10.00 4.23 L 10.50 2.86 L 11.00 2.86 L 11.50 4.23 L 12.00 6.45 L 12.50 8.66 L 13.00 10.03 L 13.50 10.03 L 14.00 8.66 L 14.50 6.45 L 15.00 4.23 L 15.50 2.86 L 16.00 2.86 L 16.50 4.23 L 17.00 6.45 L 17.50 8.66 L 18.00 10.03 L 18.50 10.03 L 19.00 8.66 L 19.50 6.45 L 20.00 4.23 L 20.50 2.86 L 21.00 2.86 L 21.50 4.23 L 22.00 6.45"
      }
    ]
  ]
};

export const VivajoOffend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.45 L 2.50 8.66 L 3.00 10.03 L 3.50 10.03 L 4.00 8.66 L 4.50 6.45 L 5.00 4.23 L 5.50 2.86 L 6.00 2.86 L 6.50 4.23 L 7.00 6.45 L 7.50 8.66 L 8.00 10.03 L 8.50 10.03 L 9.00 8.66 L 9.50 6.45 L 10.00 4.23 L 10.50 2.86 L 11.00 2.86 L 11.50 4.23 L 12.00 6.45 L 12.50 8.66 L 13.00 10.03 L 13.50 10.03 L 14.00 8.66 L 14.50 6.45 L 15.00 4.23 L 15.50 2.86 L 16.00 2.86 L 16.50 4.23 L 17.00 6.45 L 17.50 8.66 L 18.00 10.03 L 18.50 10.03 L 19.00 8.66 L 19.50 6.45 L 20.00 4.23 L 20.50 2.86 L 21.00 2.86 L 21.50 4.23 L 22.00 6.45" />
      {children}
    </svg>
  );
});

export default VivajoOffend;
