import { notFound } from "next/navigation"

export default async function ProductReview({params}:{params: Promise<{productId:string, reviewId:string}>}){
    const {productId, reviewId} = await params
    if(reviewId > '100'){
        notFound()
    }
    return (
        <div>
            ProductId {productId} ReviewId: {reviewId}
        </div>
    )
}