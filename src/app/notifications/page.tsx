'use client';

import { useState } from 'react';
import { BellIcon } from '@heroicons/react/outline'; // BellIcon for notifications

const NotificationPage = () => {
  const [expandedNotification, setExpandedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Job Approval: Software Engineer (Frontend)',
      content:
        'Congratulations! Your application for the position of Software Engineer (Frontend) has been approved. Welcome aboard!',
      imageUrl: 'https://www.istockphoto.com/photos/black-software-engineer', // Replace with your image URL
      redirectUrl: '/job/software-engineer-frontend', // Replace with your redirect URL
    },
    {
      id: 2,
      title: 'Job Denial: UI/UX Designer',
      content:
        'We regret to inform you that your application for the position of UI/UX Designer has been denied at this time. We appreciate your interest and encourage you to apply for future opportunities.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/ui-ux-designer',
    },
    {
      id: 3,
      title: 'Job Approval: Backend Developer',
      content:
        'Congratulations! Your application for the position of Backend Developer has been approved. We look forward to working with you.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/backend-developer',
    },
    {
      id: 4,
      title: 'Job Approval: Data Scientist',
      content:
        'Congratulations! Your application for the position of Data Scientist has been approved. Welcome to the team!',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/data-scientist',
    },
    {
      id: 5,
      title: 'Job Denial: Marketing Manager',
      content:
        'We regret to inform you that your application for the position of Marketing Manager has been denied. Thank you for applying and we wish you the best in your job search.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/marketing-manager',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedNotification(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExpandedNotification(null);
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-800 flex flex-col items-center">
      <div className="container max-w-4xl">
        <div className="flex items-center mb-8">
          <BellIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
        </div>
        <div className="space-y-4 w-full">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 flex items-center space-x-4 cursor-pointer ${
                expandedNotification === index ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{notification.title}</h3>
                {expandedNotification === index && (
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{notification.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <img
              src={notifications[expandedNotification].imageUrl}
              alt={notifications[expandedNotification].title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
              {notifications[expandedNotification].title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {notifications[expandedNotification].content}
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close & Mark as Read
              </button>
              <a
                href={notifications[expandedNotification].redirectUrl}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Go to Source
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NotificationPage;
