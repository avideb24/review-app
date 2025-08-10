import { useState, useEffect } from 'react';
import ReviewForm from '../components/reusuable/ReviewForm';
import ReviewCard from '../components/reusuable/ReviewCard';
import SearchFilter from '../components/reusuable/SearchFilter';
import Swal from 'sweetalert2';
import Stats from '../components/page-com/home/Stats';
import Hero from '../components/page-com/home/Hero';


export default function Home() {

    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load reviews from localStorage on component mount
    useEffect(() => {
        const savedReviews = localStorage.getItem('shopReviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    // Save reviews to localStorage whenever reviews change
    useEffect(() => {
        localStorage.setItem('shopReviews', JSON.stringify(reviews));
    }, [reviews]);

    // Handle new review submission
    const handleSubmitReview = (newReview) => {
        setReviews(prevReviews => [newReview, ...prevReviews]);
    };

    // Handle review editing
    const handleEditReview = (reviewId, updatedData) => {
        setReviews(prevReviews =>
            prevReviews.map(review =>
                review.id === reviewId
                    ? { ...review, ...updatedData, date: new Date().toISOString() }
                    : review
            )
        );
    };

    // Handle review deletion
    const handleDeleteReview = (reviewId) => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                setReviews(prevReviews =>
                    prevReviews.filter(review => review.id !== reviewId)
                );
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Review Deleted!",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        });
    };

    // Filter reviews based on search term
    const filteredReviews = reviews.filter(review =>
        review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            {/* Hero Section */}
            <Hero />

            <div className="container">

                {/* Review Form */}
                <ReviewForm onSubmit={handleSubmitReview} />

                <SearchFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    totalReviews={filteredReviews.length}
                />

                {/* Reviews Section */}
                <div className="space-y-6">
                    {filteredReviews.length > 0 ?
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                filteredReviews.map(review => (
                                    <ReviewCard
                                        key={review.id}
                                        review={review}
                                        onEdit={handleEditReview}
                                        onDelete={handleDeleteReview}
                                    />
                                ))
                            }
                        </div>
                        : reviews.length > 0 ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    No reviews found
                                </h3>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-6xl mb-4">📝</div>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    No Reviews Yet!
                                </h3>
                            </div>
                        )}
                </div>

                {/* Stats Section */}
                <Stats reviews={reviews} />
            </div>
        </div>
    );
} 