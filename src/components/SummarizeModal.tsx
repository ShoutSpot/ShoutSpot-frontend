import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AILoader } from './AILoader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import axios from 'axios';
import { setIsSummarizeModalOpen } from '../features/reviewSlice';

interface ReviewSummary {
  sentiment: string[];
  strengths: string[];
  weaknesses: string[];
  themes: string[];
}

const tabs = ['Sentiment', 'Strengths', 'Weaknesses', 'Themes'] as const;
type Tab = typeof tabs[number];

export const SummarizeModal = () => {
  const reviews = useSelector((state: RootState) => {
    return state.reviewStates.reviews;
  });
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => {
    return state.reviewStates.isSummarizeModalOpen;
  });

  const onRequestClose = () => {
    dispatch(setIsSummarizeModalOpen(false));
  }

  const latestTextReviews = reviews
    .filter((review) => review.reviewType === "text")
    .sort((a, b) => new Date(b.submitDateTime).getTime() - new Date(a.submitDateTime).getTime())
    .slice(0, 10)
    .map((review) => review.reviewText);


  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<ReviewSummary | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('Sentiment');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (isOpen) {
        try {
          setLoading(true);
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8000/summarize',
            headers: {
              Authorization: localStorage.getItem('token')
            },
            data: {
              reviews : latestTextReviews
            }
          });

          setSummary(response.data.summary);
        } catch (error) {
          setError("Error in getting the summary");
          dispatch(setIsSummarizeModalOpen(false));
        } finally {
          setLoading(false);
        }
      }
    };
    fetchReviews();
  }, [isOpen]);

  const renderContent = () => {
    if (loading) return <AILoader />;
    if (error) return <p>Error: {error}</p>;
    if (!summary) return <p>No data available.</p>;

    const items = summary[activeTab.toLowerCase() as keyof ReviewSummary] || [];

    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            {/* Line connector */}
            {index < items.length - 1 && (
              <div className="absolute left-1/2 top-full h-4 w-1 bg-gray-300 transform -translate-x-1/2"></div>
            )}
            {/* Item content */}
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-gray-100 rounded-lg p-6 max-w-2xl w-full mx-auto relative z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Product Review Summary</h2>
        <button
          onClick={onRequestClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Conditionally Render Tabs */}
      {!loading && (
        <div className="flex space-x-4 mb-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold ${activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-blue-500'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <div className="p-4 bg-gray-100 rounded-lg border">
        {renderContent()}
      </div>

      {/* Bottom Close Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onRequestClose}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SummarizeModal;
