import React from 'react';
import SpeakerSection from './components/SpeakerSection';

function App() {
  return (
    <div className="container mx-auto p-6 min-h-screen ">
      <header className="bg-[#eda316] text-white p-4 mb-8 text-center rounded-lg shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">Speakers</h1>
      </header>
      <main className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center">
          <SpeakerSection className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" />
        </div>
      </main>
    </div>
  );
}

export default App;