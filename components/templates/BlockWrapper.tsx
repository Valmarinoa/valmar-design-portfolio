export default function BlockWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="md:pt-36 pt-8 ">
            {children}
        </div>
    );
}
