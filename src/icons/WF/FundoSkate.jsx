import React from 'react';

export const iconData = {
  "id": "FundoSkate",
  "name": "FundoSkate",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 20.40 L 13.74 13.60 L 15.60 2.98 L 4.21 14.51 L 7.77 13.25 L 9.06 20.53"
      }
    ],
    [
      "circle",
      {
        "cx": "20.41",
        "cy": "20.40",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "13.74",
        "cy": "13.60",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "15.60",
        "cy": "2.98",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "4.21",
        "cy": "14.51",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "7.77",
        "cy": "13.25",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "9.06",
        "cy": "20.53",
        "r": "1.04"
      }
    ]
  ]
};

export const FundoSkate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 20.40 L 13.74 13.60 L 15.60 2.98 L 4.21 14.51 L 7.77 13.25 L 9.06 20.53" />
      <circle cx="20.41" cy="20.40" r="1.43" />
      <circle cx="13.74" cy="13.60" r="1.42" />
      <circle cx="15.60" cy="2.98" r="1.06" />
      <circle cx="4.21" cy="14.51" r="0.90" />
      <circle cx="7.77" cy="13.25" r="0.89" />
      <circle cx="9.06" cy="20.53" r="1.04" />
      {children}
    </svg>
  );
});

export default FundoSkate;
