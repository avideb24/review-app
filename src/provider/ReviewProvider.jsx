import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ReviewContext = createContext();

// Custom hook
export const useReviews = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Load reviews from localStorage on mount / initial load
    useEffect(() => {
        try {
            const savedReviews = localStorage.getItem("shopReviews");
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            }
        } catch (error) {
            console.error("Error loading reviews from localStorage:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Save reviews to localStorage whenever reviews change
    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem("shopReviews", JSON.stringify(reviews));
            } catch (error) {
                console.error("Error saving reviews to localStorage:", error);
            }
        }
    }, [reviews, isLoading]);

    // Add a new review
    const addReview = useCallback((reviewData) => {
        const newReview = {
            ...reviewData,
            id: Date.now(),
            date: new Date().toISOString()
        };

        setReviews(prevReviews => [newReview, ...prevReviews]);
        return newReview;
    }, []);

    // Update a review
    const updateReview = useCallback((reviewId, updatedData) => {
        setReviews(prevReviews =>
            prevReviews.map(review =>
                review.id === reviewId
                    ? { ...review, ...updatedData, date: new Date().toISOString() }
                    : review
            )
        );
    }, []);

    // Delete a review
    const deleteReview = useCallback((reviewId) => {
        setReviews(prevReviews =>
            prevReviews.filter(review => review.id !== reviewId)
        );
    }, []);

    // Filter reviews
    const filteredReviews = reviews.filter(review =>
        review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const value = {
        // States
        reviews,
        filteredReviews,
        searchTerm,
        isLoading,

        // Actions
        addReview,
        updateReview,
        deleteReview,
        setSearchTerm,
    };

    return (
        <ReviewContext.Provider value={value}>
            {children}
        </ReviewContext.Provider>
    );
};

export default ReviewProvider;
