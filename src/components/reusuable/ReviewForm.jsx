import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

const ReviewForm = ({ onSubmit, initialData = null, mode = "add" }) => {
    const [formData, setFormData] = useState({
        shopName: "",
        reviewText: "",
        rating: 5
    });

    // Initialize data for edit mode
    useEffect(() => {
        if (initialData && mode === "edit") {
            setFormData({
                shopName: initialData.shopName,
                reviewText: initialData.reviewText,
                rating: initialData.rating
            });
        }
    }, [initialData, mode]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.shopName.trim() && formData.reviewText.trim()) {
            if (mode === "edit") {
                onSubmit(formData);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Review Updated!",
                    showConfirmButton: false,
                    timer: 1000
                });
            } else {
                onSubmit({
                    ...formData,
                    id: Date.now(),
                    date: new Date().toISOString()
                });
                setFormData({
                    shopName: "",
                    reviewText: "",
                    rating: 5
                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Review Added!",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (newRating) => {
        setFormData(prev => ({
            ...prev,
            rating: newRating
        }));
    };

    const handleCancel = () => {
        if (mode === "edit" && initialData) {
            setFormData({
                shopName: initialData.shopName,
                reviewText: initialData.reviewText,
                rating: initialData.rating
            });
        }
        onSubmit(null);
    };

    return (
        <div className="card">
            <h2 className="title !mb-3 text-center">
                {mode === "edit" ? "Edit Review" : "Add Your Review"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="shopName" className="input-label">
                        Shop Name *
                    </label>
                    <input
                        type="text"
                        id="shopName"
                        name="shopName"
                        value={formData.shopName}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="Enter shop name..."
                    />
                </div>

                <div>
                    <label htmlFor="reviewText" className="input-label">
                        Review *
                    </label>
                    <textarea
                        id="reviewText"
                        name="reviewText"
                        value={formData.reviewText}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="input"
                        placeholder="Share your experience with this shop..."
                    />
                </div>

                <div>
                    <label className="input-label">Rating</label>
                    <div className="flex items-center gap-2">
                        <StarRatings
                            rating={formData.rating}
                            starRatedColor="gold"
                            starHoverColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name="rating"
                            starDimension="28px"
                            starSpacing="4px"
                        />
                        <span className="text-sm">{formData.rating} / 5</span>
                    </div>
                </div>

                <div className="flex gap-2 pt-3">
                    <button type="submit" className="button">
                        {mode === "edit" ? "Update Review" : "Submit Review"}
                    </button>
                    {mode === "edit" && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="button !bg-gray-500"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
