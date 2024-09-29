"use client";

const ScrollToTop = () => {
    return (
        <button className="absolute right-0 align-middle group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>W górę</span>
            <span className="align-middle ml-2 top-0 group-hover:-top-1 absolute transition-all" style={{ fontFamily: 'sans-serif', fontSize: '1.875rem' }}>↑</span>
        </button>
    );
};

export default ScrollToTop;
