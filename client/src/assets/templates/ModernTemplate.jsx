// ModernTemplate.jsx
import React from "react";

export default function ModernTemplate({ data, accentColor }) {
	const {
		fullName,
		profession,
		email,
		phone,
		location,
		linkedin,
		website,
		education,
		experience,
		projects,
		skills,
	} = data;

	return (
		<div
			className="w-full min-h-[1000px] p-6"
			style={{ fontFamily: "Arial, sans-serif" }}
		>
			{/* Header */}
			<div style={{ borderLeft: `5px solid ${accentColor}` }}>
				<h1 className="text-2xl font-bold text-gray-900">{fullName || "Your Name"}</h1>
				<p className="text-sm text-gray-700">{profession || "Your Profession"}</p>
			</div>

			{/* Contacts */}
			<div className="mt-3 text-sm text-gray-600 leading-6">
				{email && <p>Email: {email}</p>}
				{phone && <p>Phone: {phone}</p>}
				{location && <p>Location: {location}</p>}
				{linkedin && <p>LinkedIn: {linkedin}</p>}
				{website && <p>Website: {website}</p>}
			</div>

			{/* Sections */}
			<div className="mt-6">
				<Section title="Education" color={accentColor} content={education} />
				<Section title="Experience" color={accentColor} content={experience} />
				<Section title="Projects" color={accentColor} content={projects} />
				<Section title="Skills" color={accentColor} content={skills} />
			</div>
		</div>
	);
}

const Section = ({ title, content, color }) => (
	<div className="mb-4">
		<h3 className="text-lg font-semibold" style={{ color: color }}>
			{title}
		</h3>
		<p className="text-sm text-gray-700 whitespace-pre-line">
			{content || "Write something here..."}
		</p>
	</div>
);
