import React from "react";

const ChooseUs = () => {
    return (
        <section className="py-16 bg-teal-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Pitanbara?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div className="text-4xl mb-2">💡</div>
                    <h4 className="font-semibold text-lg">Tech + Legal Expertise</h4>
                    <p className="text-gray-600 text-sm">We bridge the gap between cybersecurity and legal risk mitigation.</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">🛡️</div>
                    <h4 className="font-semibold text-lg">Certified Excellence</h4>
                    <p className="text-gray-600 text-sm">Led by ISO 27001, CIPP, and CISA certified professionals.</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">🌍</div>
                    <h4 className="font-semibold text-lg">Global Clientele</h4>
                    <p className="text-gray-600 text-sm">Trusted by 50+ businesses across multiple regions.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs;