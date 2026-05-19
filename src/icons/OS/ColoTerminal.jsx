import React from 'react';

export const iconData = {
  "id": "ColoTerminal",
  "name": "ColoTerminal",
  "category": "OS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.88 L 2.50 9.28 L 3.00 11.16 L 3.50 12.11 L 4.00 11.91 L 4.50 10.62 L 5.00 8.52 L 5.50 6.06 L 6.00 3.77 L 6.50 2.17 L 7.00 1.59 L 7.50 2.17 L 8.00 3.77 L 8.50 6.06 L 9.00 8.52 L 9.50 10.62 L 10.00 11.91 L 10.50 12.11 L 11.00 11.16 L 11.50 9.28 L 12.00 6.88 L 12.50 4.48 L 13.00 2.60 L 13.50 1.66 L 14.00 1.85 L 14.50 3.14 L 15.00 5.25 L 15.50 7.71 L 16.00 9.99 L 16.50 11.60 L 17.00 12.17 L 17.50 11.60 L 18.00 9.99 L 18.50 7.71 L 19.00 5.25 L 19.50 3.14 L 20.00 1.85 L 20.50 1.66 L 21.00 2.60 L 21.50 4.48 L 22.00 6.88"
      }
    ]
  ]
};

export const ColoTerminal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.88 L 2.50 9.28 L 3.00 11.16 L 3.50 12.11 L 4.00 11.91 L 4.50 10.62 L 5.00 8.52 L 5.50 6.06 L 6.00 3.77 L 6.50 2.17 L 7.00 1.59 L 7.50 2.17 L 8.00 3.77 L 8.50 6.06 L 9.00 8.52 L 9.50 10.62 L 10.00 11.91 L 10.50 12.11 L 11.00 11.16 L 11.50 9.28 L 12.00 6.88 L 12.50 4.48 L 13.00 2.60 L 13.50 1.66 L 14.00 1.85 L 14.50 3.14 L 15.00 5.25 L 15.50 7.71 L 16.00 9.99 L 16.50 11.60 L 17.00 12.17 L 17.50 11.60 L 18.00 9.99 L 18.50 7.71 L 19.00 5.25 L 19.50 3.14 L 20.00 1.85 L 20.50 1.66 L 21.00 2.60 L 21.50 4.48 L 22.00 6.88" />
      {children}
    </svg>
  );
});

export default ColoTerminal;
