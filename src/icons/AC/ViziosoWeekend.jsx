import React from 'react';

export const iconData = {
  "id": "ViziosoWeekend",
  "name": "ViziosoWeekend",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.72 L 2.50 8.76 L 3.00 10.60 L 3.50 12.06 L 4.00 13.00 L 4.50 13.32 L 5.00 13.00 L 5.50 12.06 L 6.00 10.60 L 6.50 8.76 L 7.00 6.72 L 7.50 4.68 L 8.00 2.84 L 8.50 1.38 L 9.00 0.45 L 9.50 0.12 L 10.00 0.45 L 10.50 1.38 L 11.00 2.84 L 11.50 4.68 L 12.00 6.72 L 12.50 8.76 L 13.00 10.60 L 13.50 12.06 L 14.00 13.00 L 14.50 13.32 L 15.00 13.00 L 15.50 12.06 L 16.00 10.60 L 16.50 8.76 L 17.00 6.72 L 17.50 4.68 L 18.00 2.84 L 18.50 1.38 L 19.00 0.45 L 19.50 0.12 L 20.00 0.45 L 20.50 1.38 L 21.00 2.84 L 21.50 4.68 L 22.00 6.72"
      }
    ]
  ]
};

export const ViziosoWeekend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.72 L 2.50 8.76 L 3.00 10.60 L 3.50 12.06 L 4.00 13.00 L 4.50 13.32 L 5.00 13.00 L 5.50 12.06 L 6.00 10.60 L 6.50 8.76 L 7.00 6.72 L 7.50 4.68 L 8.00 2.84 L 8.50 1.38 L 9.00 0.45 L 9.50 0.12 L 10.00 0.45 L 10.50 1.38 L 11.00 2.84 L 11.50 4.68 L 12.00 6.72 L 12.50 8.76 L 13.00 10.60 L 13.50 12.06 L 14.00 13.00 L 14.50 13.32 L 15.00 13.00 L 15.50 12.06 L 16.00 10.60 L 16.50 8.76 L 17.00 6.72 L 17.50 4.68 L 18.00 2.84 L 18.50 1.38 L 19.00 0.45 L 19.50 0.12 L 20.00 0.45 L 20.50 1.38 L 21.00 2.84 L 21.50 4.68 L 22.00 6.72" />
      {children}
    </svg>
  );
});

export default ViziosoWeekend;
