import React from 'react';

export const iconData = {
  "id": "MuroEmbrace",
  "name": "MuroEmbrace",
  "category": "UO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.92 L 2.50 8.31 L 3.00 9.56 L 3.50 10.55 L 4.00 11.18 L 4.50 11.40 L 5.00 11.18 L 5.50 10.55 L 6.00 9.56 L 6.50 8.31 L 7.00 6.92 L 7.50 5.54 L 8.00 4.29 L 8.50 3.30 L 9.00 2.66 L 9.50 2.44 L 10.00 2.66 L 10.50 3.30 L 11.00 4.29 L 11.50 5.54 L 12.00 6.92 L 12.50 8.31 L 13.00 9.56 L 13.50 10.55 L 14.00 11.18 L 14.50 11.40 L 15.00 11.18 L 15.50 10.55 L 16.00 9.56 L 16.50 8.31 L 17.00 6.92 L 17.50 5.54 L 18.00 4.29 L 18.50 3.30 L 19.00 2.66 L 19.50 2.44 L 20.00 2.66 L 20.50 3.30 L 21.00 4.29 L 21.50 5.54 L 22.00 6.92"
      }
    ]
  ]
};

export const MuroEmbrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.92 L 2.50 8.31 L 3.00 9.56 L 3.50 10.55 L 4.00 11.18 L 4.50 11.40 L 5.00 11.18 L 5.50 10.55 L 6.00 9.56 L 6.50 8.31 L 7.00 6.92 L 7.50 5.54 L 8.00 4.29 L 8.50 3.30 L 9.00 2.66 L 9.50 2.44 L 10.00 2.66 L 10.50 3.30 L 11.00 4.29 L 11.50 5.54 L 12.00 6.92 L 12.50 8.31 L 13.00 9.56 L 13.50 10.55 L 14.00 11.18 L 14.50 11.40 L 15.00 11.18 L 15.50 10.55 L 16.00 9.56 L 16.50 8.31 L 17.00 6.92 L 17.50 5.54 L 18.00 4.29 L 18.50 3.30 L 19.00 2.66 L 19.50 2.44 L 20.00 2.66 L 20.50 3.30 L 21.00 4.29 L 21.50 5.54 L 22.00 6.92" />
      {children}
    </svg>
  );
});

export default MuroEmbrace;
