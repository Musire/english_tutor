import { useMetadata } from "@/hooks";


export default function NotFoundPage () {
    useMetadata({
        title: "404 Page Not Found | Repisas Flotantes",
        description: "The requested shelving workspace node does not exist or has moved.",
        keywords: ["404", "error", "missing"]
    });
    return (
        <div className="">that's not it</div>
    );
}