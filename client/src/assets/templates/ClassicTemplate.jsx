// ClassicTemplate.jsx
import React from "react";

export default function ClassicTemplate({ data, accentColor }) {
    return (
        <div className="w-full min-h-[1000px] p-6">
            <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
                {data.fullName || "Your Name"}
            </h1>
            <p className="text-sm text-gray-700 mt-1">{data.profession || ""}</p>

            <div className="border-b mt-4 mb-4" />

            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>LinkedIn:</strong> {data.linkedin}</p>
            <p><strong>Website:</strong> {data.website}</p>

            <Section title="Education" data={data.education} />
            <Section title="Experience" data={data.experience} />
            <Section title="Projects" data={data.projects} />
            <Section title="Skills" data={data.skills} />
        </div>
    );
}

const Section = ({ title, data }) => (
    <div className="mt-4">
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-sm whitespace-pre-line">{data || "Add here..."}</p>
    </div>
);
