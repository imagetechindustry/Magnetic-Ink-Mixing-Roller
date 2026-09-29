import React from 'react';

export default function ProductReviews({ productName, reviewData }) {
  if (!reviewData || !reviewData.reviews || reviewData.reviews.length === 0) {
    return null;
  }

  const { ratingValue, reviewCount, reviews } = reviewData;

  return (
    <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 inline-block">
            Customer Feedback & Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Verified Pressroom Reviews
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            See how the {productName} performs in real-world gravure and flexographic printing pressrooms across India and globally.
          </p>
        </div>

        {/* Rating Summary Badge */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3 shrink-0">
          <div className="text-center">
            <span className="text-3xl font-black text-slate-900 leading-none">
              {ratingValue}
            </span>
            <span className="text-xs text-slate-400 font-semibold block mt-0.5">out of 5</span>
          </div>

          <div className="border-l border-slate-200 pl-4">
            <div className="flex text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs font-bold text-slate-700">
              {reviewCount}+ Press Evaluations
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(rev.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1">
                    {rev.rating}.0
                  </span>
                </div>

                {rev.verifiedPurchase && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    Verified Customer
                  </span>
                )}
              </div>

              {/* Title & Review Text */}
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                "{rev.title}"
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {rev.content}
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
              <div>
                <span className="font-bold text-slate-800 block">{rev.author}</span>
                <span className="text-[11px] text-slate-500">
                  {rev.role}, {rev.company} {rev.city ? `(${rev.city})` : ''}
                </span>
              </div>
              <time className="text-[11px] text-slate-400 shrink-0 font-medium">
                {new Date(rev.date).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
