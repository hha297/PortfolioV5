import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProject from './CardProject.jsx';

const ProjectsPagination = ({ projectsData }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const [isAnimating, setIsAnimating] = useState(false);
        const [isMobile, setIsMobile] = useState(false);
        const [showAllProjects, setShowAllProjects] = useState(false);

        const itemsPerPage = 6;
        const mobileInitialItems = 4;

        // Detect mobile on mount and resize
        useEffect(() => {
                const checkMobile = () => {
                        setIsMobile(window.innerWidth < 768);
                };

                checkMobile();
                window.addEventListener('resize', checkMobile);

                return () => window.removeEventListener('resize', checkMobile);
        }, []);

        // Calculate pagination for desktop
        const totalPages = Math.ceil(projectsData.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Calculate projects to display based on device
        const currentProjects = isMobile
                ? showAllProjects
                        ? projectsData
                        : projectsData.slice(0, mobileInitialItems)
                : projectsData.slice(startIndex, endIndex);

        const handlePageChange = (page) => {
                if (page === currentPage || isAnimating || isMobile) return;

                setIsAnimating(true);
                setCurrentPage(page);

                // Reset animation state after transition
                setTimeout(() => {
                        setIsAnimating(false);
                }, 500);
        };

        const handlePrevPage = () => {
                if (currentPage > 1 && !isMobile) {
                        handlePageChange(currentPage - 1);
                }
        };

        const handleNextPage = () => {
                if (currentPage < totalPages && !isMobile) {
                        handlePageChange(currentPage + 1);
                }
        };

        const toggleShowMore = () => {
                setShowAllProjects(!showAllProjects);
        };

        return (
                <div className="w-full">
                        {/* Projects Grid */}
                        <div className="relative overflow-hidden">
                                <div
                                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mb-6 ${
                                                !isMobile
                                                        ? `transition-transform duration-500 ease-in-out ${
                                                                  isAnimating
                                                                          ? 'transform translate-x-full opacity-0'
                                                                          : 'transform translate-x-0 opacity-100'
                                                          }`
                                                        : ''
                                        }`}
                                >
                                        {currentProjects.map((project, index) => (
                                                <div
                                                        key={
                                                                isMobile
                                                                        ? `${project.id}-${index}`
                                                                        : `${project.id}-${currentPage}-${index}`
                                                        }
                                                        className={
                                                                !isMobile
                                                                        ? `transition-all duration-500 ${
                                                                                  isAnimating
                                                                                          ? 'transform translate-x-[-100%] opacity-0'
                                                                                          : 'transform translate-x-0 opacity-100'
                                                                          }`
                                                                        : ''
                                                        }
                                                        style={
                                                                !isMobile
                                                                        ? {
                                                                                  transitionDelay: `${index * 100}ms`,
                                                                          }
                                                                        : {}
                                                        }
                                                >
                                                        <CardProject
                                                                Img={project.Img}
                                                                Title={project.Title}
                                                                Description={project.Description}
                                                                Link={project.Link}
                                                                id={project.id}
                                                        />
                                                </div>
                                        ))}
                                </div>
                        </div>

                        {/* Desktop Pagination Controls */}
                        {!isMobile && totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2">
                                        {/* Previous Button */}
                                        <button
                                                onClick={handlePrevPage}
                                                disabled={currentPage === 1 || isAnimating}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                        >
                                                <ChevronLeft className="w-4 h-4" />
                                                Previous
                                        </button>

                                        {/* Page Numbers */}
                                        <div className="flex gap-1">
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                        <button
                                                                key={page}
                                                                onClick={() => handlePageChange(page)}
                                                                disabled={isAnimating}
                                                                className={`px-3 py-2 rounded-lg transition-all duration-300 disabled:cursor-not-allowed ${
                                                                        currentPage === page
                                                                                ? 'bg-purple-500 text-white'
                                                                                : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                                                }`}
                                                        >
                                                                {page}
                                                        </button>
                                                ))}
                                        </div>

                                        {/* Next Button */}
                                        <button
                                                onClick={handleNextPage}
                                                disabled={currentPage === totalPages || isAnimating}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                        >
                                                Next
                                                <ChevronRight className="w-4 h-4" />
                                        </button>
                                </div>
                        )}

                        {/* Mobile See More Button */}
                        {isMobile && projectsData.length > mobileInitialItems && (
                                <div className="mt-6 w-full flex justify-center">
                                        <button
                                                onClick={toggleShowMore}
                                                className="
                                                        px-3 py-1.5
                                                        text-slate-300 
                                                        hover:text-white 
                                                        text-sm 
                                                        font-medium 
                                                        transition-all 
                                                        duration-300 
                                                        ease-in-out
                                                        flex 
                                                        items-center 
                                                        gap-2
                                                        bg-white/5 
                                                        hover:bg-white/10
                                                        rounded-md
                                                        border 
                                                        border-white/10
                                                        hover:border-white/20
                                                        backdrop-blur-sm
                                                        group
                                                        relative
                                                        overflow-hidden
                                                "
                                        >
                                                <span className="relative z-10 flex items-center gap-2">
                                                        {showAllProjects ? 'See Less' : 'See More'}
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className={`transition-transform duration-300 ease-in-out ${
                                                                        showAllProjects
                                                                                ? 'rotate-180 group-hover:-translate-y-0.5'
                                                                                : 'group-hover:translate-y-0.5'
                                                                }`}
                                                        >
                                                                <polyline
                                                                        points={
                                                                                showAllProjects
                                                                                        ? '18 15 12 9 6 15'
                                                                                        : '6 9 12 15 18 9'
                                                                        }
                                                                ></polyline>
                                                        </svg>
                                                </span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
                                        </button>
                                </div>
                        )}
                </div>
        );
};

export default ProjectsPagination;
