import React from 'react'

const CircleProgress = ({ innerRadius = 30, size = (innerRadius + 10)*2, percent = 0, strokeWidth = 5, color = 'green', ...props }) => {
    return (
        <div
            x-data="scrollProgress"
            className="inline-flex items-center justify-center overflow-hidden rounded-full"
        >
            <svg
                style={{width: `${size}px`,height: `${size}px`}}
            >
                <circle
                    className="text-gray-300"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={innerRadius}
                    cx={size/2}
                    cy={size/2}
                />
                <circle
                    className={`text-${color}-600`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={innerRadius * 2 * Math.PI}
                    strokeDashoffset={innerRadius * 2 * Math.PI - (percent / 100) * innerRadius * 2 * Math.PI}
                    // strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={innerRadius}
                    cx={size/2}
                    cy={size/2}
                />
            </svg>
            <span className={`absolute text-${color}-700`}>{`${percent}%`}</span>
        </div>
    )
}

export default CircleProgress