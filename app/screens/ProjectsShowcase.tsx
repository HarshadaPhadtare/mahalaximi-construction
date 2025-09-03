// ProjectsShowcase.tsx
import Image from "next/image";

const projectImages = [
    "/building1.jpg",
    "/home1.jpg",
    "/home2.jpg",
    "/building2.jpg",
];

export default function ProjectShowcase() {
    return (
        <div className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projectImages.map((img, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={img}
                            alt={`Project ${index + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                        <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white text-xl font-semibold rounded-lg">
                            Project {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
