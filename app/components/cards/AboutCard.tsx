import React from 'react';

type Props = {
    title: string;
    description: string;
};

export default function AboutCard({ title, description }: Props) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-base-100">{title}</h3>
            <p className="text-base-100 mt-2">{description}</p>
        </div>
    );
}