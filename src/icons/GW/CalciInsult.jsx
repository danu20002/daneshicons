import React from 'react';

export const iconData = {
  "id": "CalciInsult",
  "name": "CalciInsult",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.77 7.81 L 14.89 5.56 L 3.40 10.70 L 4.75 13.61 L 8.19 13.98 L 7.08 8.04"
      }
    ],
    [
      "circle",
      {
        "cx": "12.77",
        "cy": "7.81",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "14.89",
        "cy": "5.56",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "3.40",
        "cy": "10.70",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "4.75",
        "cy": "13.61",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "8.19",
        "cy": "13.98",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "7.08",
        "cy": "8.04",
        "r": "1.08"
      }
    ]
  ]
};

export const CalciInsult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.77 7.81 L 14.89 5.56 L 3.40 10.70 L 4.75 13.61 L 8.19 13.98 L 7.08 8.04" />
      <circle cx="12.77" cy="7.81" r="1.28" />
      <circle cx="14.89" cy="5.56" r="1.00" />
      <circle cx="3.40" cy="10.70" r="1.32" />
      <circle cx="4.75" cy="13.61" r="1.19" />
      <circle cx="8.19" cy="13.98" r="0.51" />
      <circle cx="7.08" cy="8.04" r="1.08" />
      {children}
    </svg>
  );
});

export default CalciInsult;
