import React from 'react';

export const iconData = {
  id: "GanttChart",
  name: "GanttChart",
  category: "G",
  nodes: [["path",{"d":"M6 5h12"}],["path",{"d":"M4 12h10"}],["path",{"d":"M12 19h8"}]]
};

export const GanttChart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M6 5h12" />
      <path d="M4 12h10" />
      <path d="M12 19h8" />
      {children}
    </svg>
  );
});

export default GanttChart;
