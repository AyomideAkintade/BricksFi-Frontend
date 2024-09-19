import React from 'react';
import { FaRegCircle, FaFilePdf } from 'react-icons/fa'; // Import necessary icons

const ActivityItem = ({ title, description, time, file, color }) => {
    return (
        <div className="flex items-start space-x-4 p-4">
            <div className="mt-1">
                {/* The color prop determines the icon color */}
                <FaRegCircle className={`${color}`} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{title}</h4>
                    <span className="text-gray-400 text-sm">{time}</span>
                </div>
                <p>{description}</p>
                {file && (
                    <div className="flex items-center mt-2 text-red-500">
                        <FaFilePdf />
                        <span className="ml-2 text-sm">{file}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const ActivityTimeline = () => {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Activity Timeline</h2>
                <div>...</div>
            </div>
            <div className="space-y-4">
                <ActivityItem 
                    title="Returns on Investment" 
                    description="Returns on Palm Harbor has been paid today" 
                    time="12 min ago" 
                    file="invoices.pdf"
                    // Blue icon
                    color="text-green-500" 
                />
                <ActivityItem 
                    title="Bought token worth $12,000" 
                    description="A token worth $12,000 was bought" 
                    time="45 min ago"
                    color="text-blue-500" // Green icon
                />
                <ActivityItem 
                    title="Create a new project for client" 
                    description="Returns on Palm Harbor has been paid today" 
                    time="2 Day Ago" 
                    file="invoices.pdf"
                    color="text-red-500" // Red icon
                />
            </div>
        </div>
    );
};

export default ActivityTimeline;
