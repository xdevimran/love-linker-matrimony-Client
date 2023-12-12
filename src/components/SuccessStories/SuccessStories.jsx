// SuccessStories.jsx

import React from 'react';
import PrimaryTitle from '../../utils/Titles/PrimaryTitle';

const SuccessStories = () => {
  const successStories = [
    {
      image:
        'https://e1.pxfuel.com/desktop-wallpaper/571/550/desktop-wallpaper-handsome-boy-indian-boys.jpg',
      marriageDate: '2022-01-15',
      reviewStar: 5,
      successStoryText: 'We are happily married thanks to your platform!',
    },
    {
      image: 'https://cdn.aglty.io/boys-town/quotes/ryan_20230915120925.jpg',
      marriageDate: '2021-08-20',
      reviewStar: 4,
      successStoryText: 'Found my soulmate here. Thank you for bringing us together!',
    },
    {
      image:
        'https://st2.depositphotos.com/2313461/7507/i/450/depositphotos_75071809-stock-photo-portrait-of-a-teenage-boy.jpg',
      marriageDate: '2023-03-10',
      reviewStar: 5,
      successStoryText:
        'Our journey started on this platform, and now we are living a beautiful life together.',
    },
  ];

  const sortedSuccessStories = successStories.sort(
    (a, b) => new Date(a.marriageDate) - new Date(b.marriageDate)
  );

  return (
    <div className="container mx-auto mt-8 py-10">
      <PrimaryTitle>Success Stories</PrimaryTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedSuccessStories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={story.image}
              alt={`Couple ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {new Date(story.marriageDate).toLocaleDateString()}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">&#9733;</span>
                <span className="ml-1 text-gray-600">{story.reviewStar}</span>
              </div>
              <p className="mt-2 text-gray-800">{story.successStoryText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
