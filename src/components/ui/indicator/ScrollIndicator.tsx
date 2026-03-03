export default function ScrollIndicator() {
    return (
        <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-[#7c3aed]/50 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-2.5 rounded-full bg-[#a78bfa] animate-pulse" />
            </div>
        </div>
    );
}
