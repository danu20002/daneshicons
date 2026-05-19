import React from 'react';

export const iconData = {
  "id": "PaliExpand",
  "name": "PaliExpand",
  "category": "YF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.21 L 2.50 7.71 L 3.00 8.88 L 3.50 9.47 L 4.00 9.35 L 4.50 8.54 L 5.00 7.23 L 5.50 5.69 L 6.00 4.27 L 6.50 3.27 L 7.00 2.91 L 7.50 3.27 L 8.00 4.27 L 8.50 5.69 L 9.00 7.23 L 9.50 8.54 L 10.00 9.35 L 10.50 9.47 L 11.00 8.88 L 11.50 7.71 L 12.00 6.21 L 12.50 4.71 L 13.00 3.54 L 13.50 2.95 L 14.00 3.07 L 14.50 3.88 L 15.00 5.19 L 15.50 6.73 L 16.00 8.15 L 16.50 9.15 L 17.00 9.51 L 17.50 9.15 L 18.00 8.15 L 18.50 6.73 L 19.00 5.19 L 19.50 3.88 L 20.00 3.07 L 20.50 2.95 L 21.00 3.54 L 21.50 4.71 L 22.00 6.21"
      }
    ]
  ]
};

export const PaliExpand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.21 L 2.50 7.71 L 3.00 8.88 L 3.50 9.47 L 4.00 9.35 L 4.50 8.54 L 5.00 7.23 L 5.50 5.69 L 6.00 4.27 L 6.50 3.27 L 7.00 2.91 L 7.50 3.27 L 8.00 4.27 L 8.50 5.69 L 9.00 7.23 L 9.50 8.54 L 10.00 9.35 L 10.50 9.47 L 11.00 8.88 L 11.50 7.71 L 12.00 6.21 L 12.50 4.71 L 13.00 3.54 L 13.50 2.95 L 14.00 3.07 L 14.50 3.88 L 15.00 5.19 L 15.50 6.73 L 16.00 8.15 L 16.50 9.15 L 17.00 9.51 L 17.50 9.15 L 18.00 8.15 L 18.50 6.73 L 19.00 5.19 L 19.50 3.88 L 20.00 3.07 L 20.50 2.95 L 21.00 3.54 L 21.50 4.71 L 22.00 6.21" />
      {children}
    </svg>
  );
});

export default PaliExpand;
