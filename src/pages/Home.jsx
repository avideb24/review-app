import { useReviews } from '../provider/ReviewProvider';
import ReviewForm from '../components/reusuable/ReviewForm';
import ReviewCard from '../components/reusuable/ReviewCard';
import SearchFilter from '../components/reusuable/SearchFilter';
import Swal from 'sweetalert2';
import Stats from '../components/page-com/home/Stats';
import Hero from '../components/page-com/home/Hero';


export default function Home() {

    const {
        filteredReviews,
        searchTerm,
        addReview,
        updateReview,
        deleteReview,
        setSearchTerm,
        reviews,
        isLoading
    } = useReviews();

    // Handle new review submission
    const handleSubmitReview = (newReview) => {
        addReview(newReview);
    };

    // Handle review editing
    const handleEditReview = (reviewId, updatedData) => {
        updateReview(reviewId, updatedData);
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
                deleteReview(reviewId);
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

    // Show loading state while data is being initialized
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    return (
        <div>

            {/* Hero Section */}
            <Hero />

            <div className="container">

                {/* Review Form */}
                <ReviewForm onSubmit={handleSubmitReview} />

                {/* Seach filter */}
                <SearchFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    totalReviews={filteredReviews?.length || 0}
                />

                {/* Reviews Section */}
                <div className="space-y-6">
                    {filteredReviews && filteredReviews.length > 0 ?
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
                        : reviews && reviews.length > 0 ? (
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
                <Stats />
            </div>
        </div>
    );
} 