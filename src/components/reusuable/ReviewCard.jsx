import { PencilLine, Trash } from "lucide-react";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import StarRatings from "react-star-ratings";


const ReviewCard = ({ review, onEdit, onDelete }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditSubmit = (updatedData) => {
        if (updatedData === null) {
            setIsEditing(false);
            return;
        }

        if (updatedData.shopName.trim() && updatedData.reviewText.trim()) {
            onEdit(review.id, updatedData);
            setIsEditing(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    if (isEditing) {
        return (
            <ReviewForm
                onSubmit={handleEditSubmit}
                initialData={review}
                mode="edit"
            />
        );
    }

    return (
        <div className="card break-all">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold mb-1">{review.shopName}</h3>
                    <div className="flex items-center gap-2">
                        <StarRatings
                            rating={review.rating}
                            starRatedColor="gold"
                            starHoverColor="gold"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="4px"
                        />
                        <span className="text-sm">({review.rating}/5)</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="button !bg-green-600"
                    >
                        <PencilLine />
                    </button>
                    <button
                        onClick={() => onDelete(review.id)}
                        className="button !bg-red-600"
                    >
                        <Trash />
                    </button>
                </div>
            </div>

            <p className="mb-4 leading-relaxed">{review.reviewText}</p>

            <div className="text-xs text-gray-500 border-t pt-3">
                Reviewed on {formatDate(review.date)}
            </div>
        </div>
    );
};

export default ReviewCard;
